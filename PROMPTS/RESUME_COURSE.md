# Resume the course (Prompt C)

Use this at the start of any new conversation, or whenever context may have been lost. The hub files are the memory; conversation history is not.

```
RESUME COURSE — Resume the Three.js course using threejs-course-hub as the source of truth
(GitHub if published; otherwise the Claude Project "THREE JS" folder threejs-course-hub/ or the
latest delivered zip). Read and reconcile CURRENT_STATE.md, PROGRESS.json, ROADMAP.md,
CURRICULUM_MAP.json, REPOSITORY_INDEX.md and DECISION_LOG.md, and run
`node scripts/validate-hub.mjs`. Check the relevant concept repositories on GitHub. Report the last
verified checkpoint, uncommitted or unpublished material, failed or unrun checks, and the exact next
action. Do not repeat completed work or invent missing state. If files disagree, report the
discrepancy, use the most recently verified state, and log the correction in DECISION_LOG.md. If the
next action is a new chapter, show its preflight and ask for permission before starting.
```
