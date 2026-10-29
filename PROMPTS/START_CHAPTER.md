# Start a chapter (Prompts A and B)

Use Prompt A to see the preflight. Use Prompt B only after reading the preflight and agreeing.
Replace `[CHAPTER-ID]` (for example `P01-CH01`). Concept repo names come from CURRICULUM_MAP.json.

## Before you send Prompt B

Create the chapter's empty private repositories on your GitHub account (no README, .gitignore or licence), so they can be attached and pushed to. With GitHub CLI on your own computer:

```bash
gh repo create threejs-c01-dev-environment-setup --private
gh repo create threejs-c02-first-scene-quick-win --private
```

(These two lines are for P01-CH01; each preflight lists the exact names for its chapter.)

## Prompt A — preflight

```
START CHAPTER [CHAPTER-ID] — Read CURRENT_STATE.md, PROGRESS.json, ROADMAP.md and the chapter entry
for [CHAPTER-ID] in CURRICULUM_MAP.json in threejs-course-hub. Check the actual repository state on
GitHub before proceeding. Show me the chapter preflight: why it comes next, prerequisites and their
status, concepts and planned concept repositories, research questions, version assumptions
(three@0.186.1 unless an audit changed it), external requirements, test plan and risks.
Do not start drafting until I reply YES, START CHAPTER [CHAPTER-ID].
```

## Prompt B — execute an approved chapter

```
YES, START CHAPTER [CHAPTER-ID] — I approve beginning [CHAPTER-ID]. Research the chapter using
current primary sources, write the complete teaching material, and build one independent concept
repository per concept following TEMPLATES/CONCEPT_REPO_TEMPLATE.md and TEMPLATES/CHAPTER_TEMPLATE.md.
Include worked examples, complete runnable code, line-by-line explanations for new ideas, exercises,
solutions, debugging guidance, retrieval questions, mastery criteria, source register, licensing
notes and tests. Validate all available code and runtime checks and fill in
TEMPLATES/TEST_REPORT_TEMPLATE.md honestly. Publish only to repositories I have created and attached
with push access; verify every push. Update CURRICULUM_MAP.json statuses, PROGRESS.json,
CURRENT_STATE.md, SOURCES_MASTER.md, GLOSSARY.md, DECISION_LOG.md and CHANGELOG.md, run
`node scripts/validate-hub.mjs --write`, deliver a complete report, and ask before proceeding.
```
