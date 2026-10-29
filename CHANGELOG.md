# Changelog

All notable changes to the course plan and hub. Dates are Asia/Calcutta.

## Hub complete — 2026-10-29 15:22

- Creator installed the Claude GitHub App. Assistant pushed `8049e5a` (the 14 missing files plus updated state files) on top of `625425c`. Verified: `main` = `8049e5a`, fresh clone has all 27 files byte-identical to the built hub, validator passes (D-021).
- This entry and the matching CURRENT_STATE.md / PROGRESS.json / REPOSITORY_INDEX.md / DECISION_LOG.md updates were committed in the next commit, which only changes state files.

## Hub publishing — 2026-10-29 15:15

- Creator created the private repo https://github.com/yashk3163-cmyk/threejs-course-hub and uploaded 13 files (commit `625425c`). Verified: all 13 identical to the built hub; `PROMPTS/`, `TEMPLATES/` and `scripts/` (14 files) missing (D-020).
- Recorded owner `yashk3163-cmyk`, the verified URL and commit in PROGRESS.json; REPOSITORY_INDEX.md regenerated.
- Assistant push refused (Claude GitHub App not installed); missing files and updated state files delivered as an upload pack.

## [1.0.0] — 2026-10-29 — roadmap approved

- Creator approved the roadmap. Frozen as the v1.0.0 baseline (D-013). Chapters, concepts, IDs and repository names are identical to 0.1.0-draft.
- Recorded ownership and visibility: creator's personal GitHub account, hub `threejs-course-hub`, private; concept repos private by default (D-016).
- Recorded how repos are created and written: the creator creates empty repos; the assistant pushes after the repo is attached to the session (D-017).
- Corrections, documented:
  - Core effort recomputed from chapter rows: ≈ 101–110 h (draft said ≈ 110–125 h); part totals for P03, P05, P07, P09, P10, P11 and P13 corrected (D-018).
  - Node `engines` floor set to `>=22.12` (Vite 8's own requirement) instead of `>=24`; target stays Node 26 LTS (D-015).
  - Minified-build conflict resolved: npm `three@0.186.1` ships no minified builds; import-map route uses `build/three.module.js` (D-014).
- Added risks R16 (private repos and GitHub Pages plan requirement) and R17 (creator action needed per new repo).
- Built the complete hub package: all required files with no placeholder sections, plus `scripts/validate-hub.mjs`, `PROMPTS/EXPLAINER_VIDEO_BUILD.md`, `.gitignore` and `LICENSE.md` (D-019).
- REPOSITORY_INDEX.md and PREREQUISITE_GRAPH.md are now generated from CURRICULUM_MAP.json and PROGRESS.json.
- Workflow state: ROADMAP_DRAFTED → ROADMAP_APPROVED → AWAITING_CHAPTER_CONFIRMATION (P01-CH01).

## [0.1.0-draft] — 2026-10-29

- Initialized course: environment preflight, current-source research, roadmap (61 core chapters, 93 core + 6 optional concepts), repository and versioning plan, risk register, prompts and templates. Delivered as a report only. State: ROADMAP_DRAFTED. GitHub: NOT PERFORMED.
