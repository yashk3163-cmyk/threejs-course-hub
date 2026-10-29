# Lesson QA checklist

Run before a chapter is marked complete. Any unchecked item in the first four groups blocks `CHAPTER_COMPLETE`.

## Research
- [ ] Every core technical claim is cited to a current primary source; secondary-only claims are removed or flagged.
- [ ] Versions, research date, browser and runtime assumptions are recorded; import paths match the pinned three version.
- [ ] Conflicts between sources are shown with their resolution.

## Teaching
- [ ] Prerequisites are explicit and linked; at most three new core ideas.
- [ ] No new maths, new API and new tool together in the first example.
- [ ] Sequence: mental model → worked example → faded example → independent task → transfer.
- [ ] Retrieval quiz with separate answers; hints; common wrong answers explained; observable mastery gate; spaced review listed.
- [ ] Jargon defined on first use and added to the hub GLOSSARY.md.
- [ ] Every item labelled MUST UNDERSTAND / USEFUL TO RECOGNISE / ADVANCED-OPTIONAL.

## Code
- [ ] Complete code; no ellipses or unexplained placeholders; every block names its file.
- [ ] Exact commands; lockfile committed; `npm ci` and `npm run build` run (or the failure is logged).
- [ ] Error and loading states, resize and disposal handled where applicable.
- [ ] Unit tests for pure logic where practical; visual checks marked NOT TESTED unless a browser actually ran them.

## Repository and safety
- [ ] Correct concept ID, repo name, README sections, SOURCES.md, TEST_REPORT.md.
- [ ] No undocumented dependency on another concept repository.
- [ ] No secrets, `.env` files or tokens; large outputs git-ignored with a regeneration command.
- [ ] Every asset has source, licence and attribution in LICENSE-AND-ASSETS.md; nothing unlicensed.
- [ ] GitHub actions reported truthfully; URLs and commit SHAs recorded only after verification.
- [ ] Hub updated: CURRICULUM_MAP.json statuses, PROGRESS.json, CURRENT_STATE.md, and `node scripts/validate-hub.mjs --write` passes.

## Accessibility (when the concept has UI or visuals)
- [ ] Keyboard path for every control; visible focus.
- [ ] `prefers-reduced-motion` respected.
- [ ] Text alternatives for diagrams; readable contrast.

## Video (when relevant)
- [ ] Script, storyboard, timing and export workflow included.
- [ ] Codec and capture constraints explained accurately.
- [ ] Reproducible render route provided; export and playback verification status stated explicitly.
