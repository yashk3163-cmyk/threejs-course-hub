# Audit a chapter (Prompt E)

```
AUDIT CHAPTER [CHAPTER-ID] — Audit the chapter using all quality gates in PROMPTS/MASTER_PROMPT.md
Section 10 (research, teaching, code, repository, video) and TEMPLATES/LESSON_QA_CHECKLIST.md. Inspect
the actual files in each concept repository listed for this chapter in REPOSITORY_INDEX.md and run
feasible checks (npm ci, build, unit tests, browser smoke tests if configured). Check for source
drift, code errors, teaching gaps, broken links, repository/index mismatch, asset licensing and
missing tests. Report every issue with severity, evidence, affected file and line, correction and a
regression test, separating verified defects from suspected ones. Never claim a test ran unless it
ran. Report before editing; apply fixes only if I asked for audit-and-fix and only within the approved
scope; then update CHANGELOG.md and PROGRESS.json and verify the repository state after publishing.
```
