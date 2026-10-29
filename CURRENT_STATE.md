# CURRENT_STATE — 2026-10-29 (Asia/Calcutta)

## Snapshot

| Item | Value |
|---|---|
| Workflow state | **AWAITING_CHAPTER_CONFIRMATION** |
| Roadmap | v1.0.0, approved 2026-10-29 |
| Last completed chapter | none |
| Current chapter | P01-CH01 — Setup and first 3D quick win. Preflight shown; waiting for `YES, START CHAPTER P01-CH01`. No chapter content written. |
| Concept repositories | none created (0 of 99) |
| Hub on GitHub | **NOT PUBLISHED.** Owner: creator's personal account (username not yet supplied). Name `threejs-course-hub`. Private. |
| Hub files | Complete package built in the assistant's session workspace, committed to a local Git repository on branch `main`, delivered as `threejs-course-hub.zip`, and mirrored to the Claude Project "THREE JS" under `threejs-course-hub/`. |

## Transition log

ROADMAP_DRAFTED (0.1.0-draft) → ROADMAP_APPROVED (1.0.0, 14:50) → AWAITING_CHAPTER_CONFIRMATION (P01-CH01). Full history in PROGRESS.json.

## Research and checks done

- Sources S01–S39 (SOURCES_MASTER.md); decisions D-001–D-019 (DECISION_LOG.md).
- Verified in the workspace on 2026-10-29: npm registry reachable; `three` latest = 0.186.1; `vite` latest = 8.3.5 with engines `^20.19.0 || >=22.12.0`; npm `three@0.186.1` ships no minified builds and exports `./addons/*`.
- Workspace tools: Node 22.23.4, npm 10.9.9, git 2.43.0, gh 2.89.0 (not authenticated), ffmpeg/ffprobe 6.1.1, Python 3.13.
- `node scripts/validate-hub.mjs` passed: 61 core chapters, 93 core concepts, 6 optional; no broken prerequisites or cycles; repo names unique; core effort 6045–6615 min.

## Tests

| Check | Result |
|---|---|
| Hub validator (IDs, prereqs, cycles, repo names, next-chain, PROGRESS consistency) | PASS |
| Validator negative test (copy with a missing prereq, a duplicate repo and a back-reference) | PASS — 5 errors reported, exit code 1, nothing written |
| Mermaid syntax of PREREQUISITE_GRAPH.md (mermaid 11.17.2 parser) | PASS — parsed as flowchart. Rendering on GitHub: NOT TESTED |
| Chapter code tests | NOT TESTED — no chapter has started |

## Open questions

1. Creator's GitHub username — needed to attach the private hub repo and push.
2. GitHub plan — Pages from private repos needs Pro/Team/Enterprise. Decide the deploy target at the P01-CH03 preflight.
3. Concept repos must be created by the creator, 1–3 per chapter (D-017).
4. Course target is Node 26 LTS; the workspace runs Node 22.23.4. Test reports record the Node that actually ran.

## Next actions

1. Creator: create an **empty** private repo named `threejs-course-hub` on their account (no README, .gitignore or licence) and reply with their GitHub username. The assistant then attaches it with push access, pushes `main`, verifies with `git ls-remote`, and records URL and commit here.
   - Manual alternative: unzip `threejs-course-hub.zip` (it contains the local Git history), then run `gh auth login` and, inside the folder, `gh repo create threejs-course-hub --private --source=. --remote=origin --push`.
2. Creator: reply `YES, START CHAPTER P01-CH01` to begin the first chapter. Before building it, the creator also creates two empty private repos: `threejs-c01-dev-environment-setup` and `threejs-c02-first-scene-quick-win`.

## Resume prompt (copy exactly)

```
RESUME COURSE — Use threejs-course-hub as the source of truth (GitHub if published; otherwise the
Claude Project "THREE JS" folder threejs-course-hub/ or the delivered zip). Read CURRENT_STATE.md,
PROGRESS.json, ROADMAP.md, CURRICULUM_MAP.json and DECISION_LOG.md, then run
`node scripts/validate-hub.mjs`. Reconcile with the actual GitHub state. Expected last verified
checkpoint: roadmap v1.0.0 approved, state AWAITING_CHAPTER_CONFIRMATION for P01-CH01, no concept
repos, hub possibly not yet on GitHub. Report discrepancies, unpublished material and unrun checks.
Do not repeat completed work or invent state. If the hub is unpublished, help publish it first.
Then show the P01-CH01 preflight and wait for "YES, START CHAPTER P01-CH01".
```
