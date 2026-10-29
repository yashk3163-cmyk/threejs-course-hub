# CURRENT_STATE — 2026-10-29 15:25 (Asia/Calcutta)

## Snapshot

| Item | Value |
|---|---|
| Workflow state | **AWAITING_CHAPTER_CONFIRMATION** |
| Roadmap | v1.0.0, approved 2026-10-29 |
| Last completed chapter | none |
| Current chapter | P01-CH01 — Setup and first 3D quick win. Preflight shown; waiting for `YES, START CHAPTER P01-CH01`. No chapter content written. |
| Concept repositories | none created (0 of 99) |
| Hub on GitHub | **Complete.** https://github.com/yashk3163-cmyk/threejs-course-hub (private, branch `main`). Verified at commit `8049e5ac0ef6b8efdc2aad1f70830b42fd749071`: all 27 files present and byte-identical to the built hub; validator passes in a fresh clone. This file was updated in the commit after it (state files only). |
| Push access for the assistant | **Working** (Claude GitHub App installed 15:19). The creator still creates each new empty repo. |
| Canonical history | GitHub `main`: `625425c` (creator upload) → `8049e5a` (missing files) → state-update commits. The assistant's earlier local commit `8b223fa` is retired. |
| Project mirror | Claude Project "THREE JS", folder `threejs-course-hub/` — all 27 files, kept in step with GitHub. |

## Transition log

ROADMAP_DRAFTED (0.1.0-draft) → ROADMAP_APPROVED (1.0.0, 14:50) → AWAITING_CHAPTER_CONFIRMATION (P01-CH01). Full history in PROGRESS.json. Hub publishing does not change the workflow state.

## Research and checks done

- Sources S01–S39 (SOURCES_MASTER.md); decisions D-001–D-021 (DECISION_LOG.md).
- Verified in the workspace on 2026-10-29: npm registry reachable; `three` latest = 0.186.1; `vite` latest = 8.3.5 with engines `^20.19.0 || >=22.12.0`; npm `three@0.186.1` ships no minified builds and exports `./addons/*`.
- Workspace tools: Node 22.23.4, npm 10.9.9, git 2.43.0, gh 2.89.0 (not authenticated), ffmpeg/ffprobe 6.1.1, Python 3.13.

## Tests

| Check | Result |
|---|---|
| Hub validator (IDs, prereqs, cycles, repo names, next-chain, PROGRESS consistency) | PASS |
| Validator negative test (copy with a missing prereq, a duplicate repo and a back-reference) | PASS — 5 errors reported, exit code 1, nothing written |
| Mermaid syntax of PREREQUISITE_GRAPH.md (mermaid 11.17.2 parser) | PASS — parsed as flowchart. Rendering on GitHub: NOT TESTED |
| GitHub hub contents vs built hub (commit 8049e5a, fresh clone) | PASS — 27/27 files identical |
| Push from the assistant's session | PASS — `8049e5a` pushed; `git ls-remote` matches |
| Chapter code tests | NOT TESTED — no chapter has started |

## Open questions

1. GitHub plan — Pages from private repos needs Pro/Team/Enterprise. Decide the deploy target at the P01-CH03 preflight.
2. Concept repos must be created by the creator, 1–3 per chapter (D-017, D-021). Push access to each one depends on the GitHub App's repository selection; checked when it is attached.
3. Course target is Node 26 LTS; the workspace runs Node 22.23.4. Test reports record the Node that actually ran.

## Next actions

1. Creator: reply `YES, START CHAPTER P01-CH01` and create two empty private repos: `threejs-c01-dev-environment-setup` and `threejs-c02-first-scene-quick-win` (no README, .gitignore or licence). If the GitHub App was installed for selected repositories only, add these two to it.
2. Assistant: attach both repos, then research, write, build, test and push P01-CH01.

## Resume prompt (copy exactly)

```
RESUME COURSE — Use https://github.com/yashk3163-cmyk/threejs-course-hub as the source of truth
(fall back to the Claude Project "THREE JS" folder threejs-course-hub/ if GitHub is unreachable).
Read CURRENT_STATE.md, PROGRESS.json, ROADMAP.md, CURRICULUM_MAP.json and DECISION_LOG.md, then run
`node scripts/validate-hub.mjs`. Reconcile with the actual GitHub state (hub complete since 8049e5a).
Expected checkpoint: roadmap v1.0.0 approved, state AWAITING_CHAPTER_CONFIRMATION for P01-CH01, no
concept repos. Report discrepancies, unpublished material and unrun checks. Do not repeat completed
work or invent state. Then show the P01-CH01 preflight and wait for "YES, START CHAPTER P01-CH01".
```
