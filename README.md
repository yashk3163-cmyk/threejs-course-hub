# threejs-course-hub

Private control hub for a checkpointed course: learn JavaScript, browser graphics, 3D maths and Three.js from the ground up, then produce reproducible explainer videos.

This repository holds the plan, the state and the rules. Lessons and runnable code live in one separate repository per concept, listed in REPOSITORY_INDEX.md.

## Where to look

| Need | File |
|---|---|
| What the course covers, chapter by chapter | ROADMAP.md (human-readable) · CURRICULUM_MAP.json (machine-readable) |
| What depends on what | PREREQUISITE_GRAPH.md (generated) |
| Where things stand right now, and how to resume | CURRENT_STATE.md · PROGRESS.json |
| Every concept repository and its verified status | REPOSITORY_INDEX.md (generated) |
| Why decisions were made | DECISION_LOG.md |
| Evidence behind technical claims | SOURCES_MASTER.md |
| Terms | GLOSSARY.md |
| History of changes | CHANGELOG.md |
| Copy-paste prompts for each workflow step | PROMPTS/ |
| Templates for concept repos, lessons, research logs, test reports, QA | TEMPLATES/ |
| Chapter overviews and research logs | CHAPTERS/ |
| Automated checks used to test chapters | qa/ |

## Current status

- Roadmap **v1.0.0 approved** on 2026-10-29.
- **P01-CH01 — Setup and first 3D quick win: complete** (2026-10-30). Start here: [threejs-c01-dev-environment-setup](https://github.com/yashk3163-cmyk/threejs-c01-dev-environment-setup), then [threejs-c02-first-scene-quick-win](https://github.com/yashk3163-cmyk/threejs-c02-first-scene-quick-win). Chapter overview: CHAPTERS/P01-CH01.md.
- Next: P01-CH02 — What the tools do: terminal, Node, npm, Vite, import maps (starts on request).

## Baseline stack (re-verified at each chapter)

`three@0.186.1` (r186) · `WebGLRenderer` · Vite 8.3.5 · Node.js 26 LTS target (22.12+ accepted, Vite 8's floor) · FFmpeg for video assembly.

## Keeping the hub consistent

CURRICULUM_MAP.json and PROGRESS.json are the sources of truth. After changing either, run:

```bash
node scripts/validate-hub.mjs --write
```

It checks IDs, prerequisites, cycles, repository names and effort totals, and regenerates REPOSITORY_INDEX.md and PREREQUISITE_GRAPH.md. It needs only Node (no `npm install`). Exit code 1 means something is inconsistent and nothing was written.

## Rules that never change

- Never commit tokens, `.env` files, private data, unlicensed media, or large frame/video outputs.
- A repository, commit or URL is recorded only after it has been verified.
- Licence: code MIT; lesson prose CC BY 4.0 (see LICENSE.md). Third-party assets are listed per repo.
