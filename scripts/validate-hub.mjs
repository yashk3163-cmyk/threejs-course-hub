#!/usr/bin/env node
// validate-hub.mjs — checks the hub's machine-readable files and (with --write)
// regenerates REPOSITORY_INDEX.md and PREREQUISITE_GRAPH.md from them.
//
// Usage (from the hub root, Node >= 18, no dependencies):
//   node scripts/validate-hub.mjs            # validate only; exit code 1 on any error
//   node scripts/validate-hub.mjs --write    # validate, then regenerate the two derived files
//
// Sources of truth: CURRICULUM_MAP.json (plan) and PROGRESS.json (verified state).
// The two generated files must never be edited by hand.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (f) => JSON.parse(readFileSync(join(root, f), "utf8"));

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);

const map = read("CURRICULUM_MAP.json");
const progress = read("PROGRESS.json");

const WORKFLOW_STATES = [
  "NOT_INITIALIZED", "ROADMAP_DRAFTED", "ROADMAP_APPROVED", "AWAITING_CHAPTER_CONFIRMATION",
  "CHAPTER_IN_PROGRESS", "CHAPTER_QA", "AWAITING_CREATOR_REVIEW", "PUBLISHING", "CHAPTER_COMPLETE", "BLOCKED",
];

// ---------- structural checks on CURRICULUM_MAP.json ----------
const chapters = map.chapters;
const byId = new Map();
const partIds = new Set(map.parts.map((p) => p.id));
const repoNames = new Set();
const conceptIds = new Set();
let expectedNum = 1;

for (const ch of chapters) {
  if (!/^P\d{2}-CH\d{2}$/.test(ch.id)) fail(`Bad chapter ID format: ${ch.id}`);
  if (byId.has(ch.id)) fail(`Duplicate chapter ID: ${ch.id}`);
  byId.set(ch.id, ch);
  if (!partIds.has(ch.id.slice(0, 3))) fail(`${ch.id}: part ${ch.id.slice(0, 3)} not in parts list`);
  if (!["core", "checkpoint", "capstone", "optional"].includes(ch.track)) fail(`${ch.id}: unknown track ${ch.track}`);
  if (!map.statusValues.includes(ch.status)) fail(`${ch.id}: unknown status ${ch.status}`);
  const e = ch.effortMinutes;
  if (!e || !(e.low > 0) || !(e.high >= e.low)) fail(`${ch.id}: invalid effortMinutes`);
  if (!ch.concepts?.length || ch.concepts.length > 3) fail(`${ch.id}: must have 1-3 concepts (has ${ch.concepts?.length ?? 0})`);
  if (!ch.project) fail(`${ch.id}: missing project`);

  ch.concepts.forEach((c, i) => {
    const want = `${ch.id}-C${String(i + 1).padStart(2, "0")}`;
    if (c.id !== want) fail(`Concept ID ${c.id} should be ${want}`);
    if (conceptIds.has(c.id)) fail(`Duplicate concept ID ${c.id}`);
    conceptIds.add(c.id);
    if (c.num !== expectedNum) fail(`${c.id}: global number ${c.num}, expected ${expectedNum}`);
    expectedNum += 1;
    const prefix = `threejs-c${String(c.num).padStart(2, "0")}-`;
    if (!c.repo.startsWith(prefix)) fail(`${c.id}: repo ${c.repo} should start with ${prefix}`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(c.repo)) fail(`${c.id}: repo name not lowercase-hyphenated: ${c.repo}`);
    if (c.repo.length > 100) fail(`${c.id}: repo name longer than 100 characters`);
    if (repoNames.has(c.repo)) fail(`Duplicate repo name ${c.repo}`);
    repoNames.add(c.repo);
    if (!c.title) fail(`${c.id}: missing title`);
    if (!map.statusValues.includes(c.status)) fail(`${c.id}: unknown status ${c.status}`);
  });
}

// ---------- dependency checks ----------
const isOptional = (ch) => ch.track === "optional";
const coreOrder = chapters.filter((c) => !isOptional(c)).map((c) => c.id);
const position = new Map(coreOrder.map((id, i) => [id, i]));

for (const ch of chapters) {
  for (const p of ch.prereqs) {
    if (!byId.has(p)) { fail(`${ch.id}: prerequisite ${p} does not exist`); continue; }
    if (!isOptional(ch) && isOptional(byId.get(p))) fail(`${ch.id}: core chapter depends on optional ${p}`);
    if (!isOptional(ch) && position.get(p) >= position.get(ch.id)) fail(`${ch.id}: prerequisite ${p} comes later in the core sequence`);
  }
  if (ch.next !== null && !byId.has(ch.next)) fail(`${ch.id}: next ${ch.next} does not exist`);
  if (isOptional(ch) && ch.next !== null) fail(`${ch.id}: optional chapters must not feed the core path`);
}

// cycle check (depth-first search over prerequisite edges)
const visiting = new Set();
const done = new Set();
function visit(id, trail) {
  if (done.has(id)) return;
  if (visiting.has(id)) { fail(`Cycle: ${[...trail, id].join(" -> ")}`); return; }
  visiting.add(id);
  for (const p of byId.get(id)?.prereqs ?? []) visit(p, [...trail, id]);
  visiting.delete(id);
  done.add(id);
}
chapters.forEach((c) => visit(c.id, []));

// the "next" chain must walk the whole core path once, in listed order
const walked = [];
for (let id = coreOrder[0]; id && walked.length <= chapters.length; id = byId.get(id)?.next) walked.push(id);
if (walked.join() !== coreOrder.join()) fail(`"next" chain does not visit the core chapters in listed order`);

// ---------- PROGRESS.json checks ----------
if (!WORKFLOW_STATES.includes(progress.workflowState)) fail(`PROGRESS.json: unknown workflowState ${progress.workflowState}`);
if (progress.roadmapVersion !== map.roadmapVersion) fail(`Version mismatch: map ${map.roadmapVersion} vs progress ${progress.roadmapVersion}`);
for (const id of [...progress.chapters.completed, ...progress.chapters.inProgress, ...progress.chapters.blocked]) {
  if (!byId.has(id)) fail(`PROGRESS.json lists unknown chapter ${id}`);
}
if (progress.chapters.next && !byId.has(progress.chapters.next)) fail(`PROGRESS.json next ${progress.chapters.next} unknown`);
for (const [repo, rec] of Object.entries(progress.repos ?? {})) {
  if (repo !== map.hubRepo && !repoNames.has(repo)) fail(`PROGRESS.json repo ${repo} not in curriculum`);
  if (rec.verifiedUrl && !rec.verifiedCommit) warnings.push(`${repo}: URL recorded without a verified commit`);
}

// ---------- totals ----------
const sum = (list, key) => list.reduce((t, c) => t + c.effortMinutes[key], 0);
const coreChapters = chapters.filter((c) => !isOptional(c));
const optChapters = chapters.filter(isOptional);
const coreConcepts = coreChapters.flatMap((c) => c.concepts);
const optConcepts = optChapters.flatMap((c) => c.concepts);
const hours = (m) => (m / 60).toFixed(2).replace(/\.?0+$/, "");

const partTotals = map.parts.map((p) => {
  const chs = chapters.filter((c) => c.id.startsWith(p.id));
  return {
    part: p.id, title: p.title, chapters: chs.length,
    concepts: chs.flatMap((c) => c.concepts).length,
    low: sum(chs, "low"), high: sum(chs, "high"),
  };
});

console.log(`Roadmap ${map.roadmapVersion} (${map.roadmapStatus})`);
console.log(`Core chapters: ${coreChapters.length} | core concepts: ${coreConcepts.length} | optional chapters: ${optChapters.length} | optional concepts: ${optConcepts.length}`);
console.log(`Core effort: ${sum(coreChapters, "low")}-${sum(coreChapters, "high")} min (${hours(sum(coreChapters, "low"))}-${hours(sum(coreChapters, "high"))} h)`);
console.log(`Optional effort: ${sum(optChapters, "low")}-${sum(optChapters, "high")} min`);
for (const t of partTotals) {
  const range = t.low === t.high ? `${t.low}` : `${t.low}-${t.high}`;
  console.log(`  ${t.part}  ${String(t.chapters).padStart(2)} ch  ${String(t.concepts).padStart(2)} concepts  ${range} min  (${hours(t.low)}${t.low === t.high ? "" : "-" + hours(t.high)} h)`);
}
console.log(`Workflow state: ${progress.workflowState} | next: ${progress.chapters.next}`);

// ---------- generators ----------
function repositoryIndex() {
  const owner = progress.github.owner ?? "<owner pending>";
  const hub = progress.repos?.[map.hubRepo] ?? {};
  const rows = [
    `| (hub) | ${map.hubRepo} | — | Course control hub | ${hub.status ?? "NOT CREATED"} | ${hub.verifiedUrl ?? "—"} | ${hub.verifiedCommit ?? "—"} |`,
  ];
  for (const ch of chapters) {
    for (const c of ch.concepts) {
      const rec = progress.repos?.[c.repo] ?? {};
      const title = c.optional ? `${c.title} (optional)` : c.title;
      rows.push(`| ${c.id} | ${c.repo} | ${ch.id} | ${title} | ${rec.status ?? "PLANNED"} | ${rec.verifiedUrl ?? "—"} | ${rec.verifiedCommit ?? "—"} |`);
    }
  }
  return [
    "# Repository index",
    "",
    "> Generated by `node scripts/validate-hub.mjs --write` from CURRICULUM_MAP.json and PROGRESS.json. Do not edit by hand.",
    "",
    `- Owner: ${owner}`,
    `- Visibility: ${progress.github.visibility}`,
    `- Concept repositories planned: ${coreConcepts.length + optConcepts.length} (${coreConcepts.length} core, ${optConcepts.length} optional)`,
    "- A row moves past PLANNED only when the repository is confirmed to exist; URL and commit are filled in only after they are verified.",
    "",
    "| Concept ID | Repository | Chapter | Concept | Status | Verified URL | Last verified commit |",
    "|---|---|---|---|---|---|---|",
    ...rows,
    "",
  ].join("\n");
}

function prerequisiteGraph() {
  const node = (id) => id.replace("-", "");
  const shape = (ch) => {
    const label = `${ch.id} ${ch.title}`.replace(/"/g, "'");
    if (ch.track === "checkpoint" || ch.track === "capstone") return `${node(ch.id)}{{"${label}"}}`;
    if (ch.track === "optional") return `${node(ch.id)}(["${label}"])`;
    return `${node(ch.id)}["${label}"]`;
  };
  const lines = ["```mermaid", "graph TD"];
  for (const p of map.parts) {
    const chs = chapters.filter((c) => c.id.startsWith(p.id));
    lines.push(`  subgraph ${p.id}["${p.id} ${p.title}"]`);
    chs.forEach((c) => lines.push(`    ${shape(c)}`));
    lines.push("  end");
  }
  for (const ch of chapters) {
    for (const p of ch.prereqs) {
      lines.push(isOptional(ch) ? `  ${node(p)} -.->|optional| ${node(ch.id)}` : `  ${node(p)} --> ${node(ch.id)}`);
    }
  }
  for (const ch of coreChapters) {
    if (ch.next && !byId.get(ch.next).prereqs.includes(ch.id)) lines.push(`  ${node(ch.id)} -.->|then| ${node(ch.next)}`);
  }
  lines.push("```");

  const text = chapters.map((ch) => {
    const pre = ch.prereqs.length ? ch.prereqs.join(", ") : "none";
    return `- **${ch.id}** ${ch.title} — requires: ${pre}; next in sequence: ${ch.next ?? "—"}${isOptional(ch) ? " (optional branch)" : ""}`;
  });

  return [
    `# Prerequisite graph — roadmap ${map.roadmapVersion}`,
    "",
    "> Generated by `node scripts/validate-hub.mjs --write` from CURRICULUM_MAP.json. Do not edit by hand.",
    "",
    "How to read it: solid arrows are hard prerequisites. Dashed arrows labelled *then* show the recommended study order where it is not also a prerequisite. Dashed arrows labelled *optional* lead to optional branches, which never feed back into the core path. Hexagons are checkpoints and capstones; rounded boxes are optional branches.",
    "",
    ...lines,
    "",
    "## Text alternative",
    "",
    ...text,
    "",
  ].join("\n");
}

// ---------- result ----------
warnings.forEach((w) => console.log(`WARNING: ${w}`));
if (errors.length) {
  errors.forEach((e) => console.error(`ERROR: ${e}`));
  console.error(`${errors.length} error(s). Nothing was written.`);
  process.exit(1);
}
console.log("All checks passed.");

if (process.argv.includes("--write")) {
  writeFileSync(join(root, "REPOSITORY_INDEX.md"), repositoryIndex());
  writeFileSync(join(root, "PREREQUISITE_GRAPH.md"), prerequisiteGraph());
  console.log("Regenerated REPOSITORY_INDEX.md and PREREQUISITE_GRAPH.md.");
}
