# CURRENT_STATE — 2026-10-30 13:30 (Asia/Calcutta)

## Snapshot

| Item | Value |
|---|---|
| Workflow state | **CHAPTER_COMPLETE** (P01-CH01). Next chapter starts only on request. |
| Roadmap | v1.0.0, approved 2026-10-29 |
| Last completed chapter | **P01-CH01 — Setup and first 3D quick win** — all gates PASS; untested items listed below |
| Next chapter | **P01-CH02 — What the tools do: terminal, Node, npm, Vite, import maps** (not started) |
| Concept repositories | 2 of 99 created and verified |
| Hub on GitHub | https://github.com/yashk3163-cmyk/threejs-course-hub (private, `main`). Last verified commit before this update: `271837f`. The commit containing this file is listed in CHANGELOG.md and should be confirmed with `git ls-remote` at the start of the next session. |
| Push access | Working (Claude GitHub App). The creator creates each new empty repo and adds it to the app if it uses selected repositories. |
| Project mirror | Claude Project "THREE JS", folder `threejs-course-hub/`, kept in step with the hub |
| Learner progress | P01-CH01 not yet worked through by the creator (see PROGRESS.json `learnerProgress`) |

## Concept repositories

| Concept | Repository | Verified commit | Status |
|---|---|---|---|
| P01-CH01-C01 | https://github.com/yashk3163-cmyk/threejs-c01-dev-environment-setup | `024ee45cd5b296c492f0fa4e77b31f0bc2bf2d7d` | COMPLETE — fresh clone identical; 7/7 tests; `npm run check` READY |
| P01-CH01-C02 | https://github.com/yashk3163-cmyk/threejs-c02-first-scene-quick-win | `e01e14d4686aa54629f06109d86a92a4c0664e20` | COMPLETE — fresh clone identical; `npm ci`; 21/21 tests; build OK |

## Tests

| Check | Result |
|---|---|
| Hub validator | PASS |
| P01-CH01 unit tests | PASS — 28/28 (C01 7, C02 21) |
| P01-CH01 clean install and build | PASS — `npm ci` added 18 packages; build OK with the expected chunk-size warning |
| P01-CH01 browser checks (headless Chrome for Testing 153, software WebGL) | PASS — 18/18 |
| Fresh clones from GitHub | PASS — both repos identical to the built files; tests re-run from the clones |
| Real GPU, Windows, macOS, Safari, Firefox, Edge, Node.js 26 | NOT TESTED (workspace limits; learner's own run is the real-hardware check) |

## Research done

Sources S01–S57 (SOURCES_MASTER.md). Decisions D-001–D-027 (DECISION_LOG.md). Chapter research log: CHAPTERS/P01-CH01-RESEARCH_LOG.md.

## Open questions

1. GitHub plan — Pages from private repos needs Pro/Team/Enterprise. Decide the deploy target at the P01-CH03 preflight.
2. Course target is Node 26 LTS; the workspace runs Node 22.23.4. Test reports record the Node that actually ran.
3. Optional: the creator's computer is linked to this session. With permission, chapter checks could also run there (real GPU, the creator's OS).

## Next actions

1. Creator (as learner): work through C01 then C02 on your own computer; each LESSON.md section 19 is the mastery gate.
2. Creator: when ready, ask for P01-CH02. Its preflight will ask for two empty private repos: `threejs-c03-terminal-node-npm-scripts` and `threejs-c04-vite-vs-importmap-routes`.

## Resume prompt (copy exactly)

```
RESUME COURSE — Use https://github.com/yashk3163-cmyk/threejs-course-hub as the source of truth
(fall back to the Claude Project "THREE JS" folder threejs-course-hub/ if GitHub is unreachable).
Read CURRENT_STATE.md, PROGRESS.json, ROADMAP.md, CURRICULUM_MAP.json and DECISION_LOG.md, then run
`node scripts/validate-hub.mjs`. Confirm the hub's latest commit with `git ls-remote` and the two
P01-CH01 repos at 024ee45 and e01e14d. Expected checkpoint: P01-CH01 COMPLETE, state
CHAPTER_COMPLETE, next chapter P01-CH02 not started. Report discrepancies, unpublished material and
unrun checks. Do not repeat completed work or invent state. Then show the P01-CH02 preflight and wait
for "YES, START CHAPTER P01-CH02".
```
