# CURRENT_STATE — 2026-10-29 15:20 (Asia/Calcutta)

## Snapshot

| Item | Value |
|---|---|
| Workflow state | **AWAITING_CHAPTER_CONFIRMATION** |
| Roadmap | v1.0.0, approved 2026-10-29 |
| Last completed chapter | none |
| Current chapter | P01-CH01 — Setup and first 3D quick win. Preflight shown; waiting for `YES, START CHAPTER P01-CH01`. No chapter content written. |
| Concept repositories | none created (0 of 99) |
| Hub on GitHub | **Created, partial.** https://github.com/yashk3163-cmyk/threejs-course-hub (private, branch `main`). Verified at commit `625425c94c87b28f0a12f5c0ea2deec2ff780eb5` ("Add files via upload", 15:12): 13 of 27 files present and byte-identical to the built hub. Missing: `PROMPTS/` (8 files), `TEMPLATES/` (5), `scripts/validate-hub.mjs`. |
| Push access for the assistant | **Refused.** The repo is attached to the assistant's session for reading, but the Claude GitHub App is not installed on this account, so the assistant cannot push. |
| Canonical history | GitHub `main`. The assistant's earlier local commit `8b223fa` (inside `threejs-course-hub.zip`) is a separate history and is retired. |
| Pending upload | `hub-upload-pack.zip` (delivered in chat): the 14 missing files plus this updated CURRENT_STATE.md, PROGRESS.json, REPOSITORY_INDEX.md, DECISION_LOG.md and CHANGELOG.md. The commit that adds them is verified at the next step and its SHA recorded then. |
| Project mirror | Claude Project "THREE JS", folder `threejs-course-hub/` — all 27 files, kept in step with this file. |

## Transition log

ROADMAP_DRAFTED (0.1.0-draft) → ROADMAP_APPROVED (1.0.0, 14:50) → AWAITING_CHAPTER_CONFIRMATION (P01-CH01). Full history in PROGRESS.json. Hub publishing does not change the workflow state.

## Research and checks done

- Sources S01–S39 (SOURCES_MASTER.md); decisions D-001–D-020 (DECISION_LOG.md).
- Verified in the workspace on 2026-10-29: npm registry reachable; `three` latest = 0.186.1; `vite` latest = 8.3.5 with engines `^20.19.0 || >=22.12.0`; npm `three@0.186.1` ships no minified builds and exports `./addons/*`.
- Workspace tools: Node 22.23.4, npm 10.9.9, git 2.43.0, gh 2.89.0 (not authenticated), ffmpeg/ffprobe 6.1.1, Python 3.13.

## Tests

| Check | Result |
|---|---|
| Hub validator (IDs, prereqs, cycles, repo names, next-chain, PROGRESS consistency) | PASS |
| Validator negative test (copy with a missing prereq, a duplicate repo and a back-reference) | PASS — 5 errors reported, exit code 1, nothing written |
| Mermaid syntax of PREREQUISITE_GRAPH.md (mermaid 11.17.2 parser) | PASS — parsed as flowchart. Rendering on GitHub: NOT TESTED |
| GitHub hub contents vs built hub (commit 625425c) | PARTIAL — 13/27 files present, all identical; 14 missing |
| Push from the assistant's session | FAIL — refused (Claude GitHub App not installed) |
| Chapter code tests | NOT TESTED — no chapter has started |

## Open questions

1. Install the Claude GitHub App on `yashk3163-cmyk` so the assistant can push and verify directly. Without it, every hub and concept-repo update needs a manual upload.
2. GitHub plan — Pages from private repos needs Pro/Team/Enterprise. Decide the deploy target at the P01-CH03 preflight.
3. Concept repos must be created by the creator, 1–3 per chapter (D-017).
4. Course target is Node 26 LTS; the workspace runs Node 22.23.4. Test reports record the Node that actually ran.

## Next actions

1. Creator: upload the contents of `hub-upload-pack.zip` to the repo (GitHub page → Add file → Upload files → drag the three folders and five files in, then commit). Or install the Claude GitHub App and ask the assistant to push them.
2. Assistant: re-clone, confirm all 27 files match, and record the new commit SHA.
3. Creator: reply `YES, START CHAPTER P01-CH01` and create two empty private repos: `threejs-c01-dev-environment-setup` and `threejs-c02-first-scene-quick-win`.

## Resume prompt (copy exactly)

```
RESUME COURSE — Use https://github.com/yashk3163-cmyk/threejs-course-hub as the source of truth
(fall back to the Claude Project "THREE JS" folder threejs-course-hub/ if GitHub is unreachable).
Read CURRENT_STATE.md, PROGRESS.json, ROADMAP.md, CURRICULUM_MAP.json and DECISION_LOG.md, then run
`node scripts/validate-hub.mjs`. Reconcile with the actual GitHub state: last verified hub commit is
625425c (13 of 27 files); check whether the 14 missing files have since been uploaded and record the
new commit. Expected checkpoint: roadmap v1.0.0 approved, state AWAITING_CHAPTER_CONFIRMATION for
P01-CH01, no concept repos. Report discrepancies, unpublished material and unrun checks. Do not repeat
completed work or invent state. Then show the P01-CH01 preflight and wait for
"YES, START CHAPTER P01-CH01".
```
