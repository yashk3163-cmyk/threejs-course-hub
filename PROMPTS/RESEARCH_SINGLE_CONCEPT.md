# Research a single concept, or audit its versions (Prompt D)

## Research a concept

```
RESEARCH CONCEPT [CONCEPT-ID or topic] — Locate it in CURRICULUM_MAP.json (or state that it is not in
the approved roadmap). Research it with the source hierarchy: three.js docs, manual, examples,
Migration Guide and release notes → MDN, Node.js, Vite → browser compatibility tables, Khronos, FFmpeg
→ maintainer docs → community material only as a supplement. Record versions and access dates, mark
version-specific claims, fill in TEMPLATES/RESEARCH_LOG_TEMPLATE.md, and prepare an isolated concept
package draft. If its chapter is not yet authorized, ask whether to attach the work to that chapter or
treat it as a separately approved unit. Do not bypass chapter confirmation.
```

## Version audit

```
Audit [CONCEPT-ID / repository] for changes in current Three.js APIs, package versions, renderer
status, browser support and linked source documentation. Use primary sources. Read every Migration
Guide section between the pinned revision and the latest. Separate necessary fixes from optional
improvements, identify breaking changes, and propose a migration and test plan (steps of at most 10
revisions). Do not change the frozen roadmap or push commits until the scope and write permission are
clear.
```
