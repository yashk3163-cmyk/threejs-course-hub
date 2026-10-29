# INITIALIZE COURSE

**Status:** already executed on 2026-10-29. The roadmap was approved as v1.0.0 the same day. Do not run this again for normal work — use RESUME_COURSE.md or START_CHAPTER.md.

Run it only to rebuild the course plan from scratch (for example after a decision to restart). Re-running replaces the roadmap, so it requires a `REVISE ROADMAP` decision first.

## Prompt (copy if a rebuild is approved)

```
INITIALIZE COURSE — Follow PROMPTS/MASTER_PROMPT.md. Perform the environment preflight and verify,
do not assume: web research, local file creation, Node/npm/browser test execution, and GitHub write
access. Refresh current primary sources (three.js releases and Migration Guide, MDN, Node.js, Vite,
browser compatibility tables, FFmpeg, Khronos). Regenerate the roadmap and hub package using the
existing stable IDs where possible, run `node scripts/validate-hub.mjs --write`, mark GitHub status
truthfully, and ask for APPROVE ROADMAP or REVISE ROADMAP. Do not write any chapter.
Hub: threejs-course-hub (private, creator's personal account).
```
