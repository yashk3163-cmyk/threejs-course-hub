# Concept repository template — `threejs-cNN-slug`

Fields in `[brackets]` are filled in when the concept is built. Include only files the concept needs; the README explains any standard file that was left out and why.

## Layout

```text
threejs-cNN-slug/
  README.md              # see "README contents" below
  LESSON.md              # the 22 lesson sections (TEMPLATES/CHAPTER_TEMPLATE.md)
  QUICK_REFERENCE.md     # key APIs, syntax, parameters, commands
  EXERCISES.md           # experiment lab, guided exercise (with hints), independent challenge, transfer task
  SOLUTIONS.md           # complete solutions, reasoning summary, common wrong answers and why
  SOURCES.md             # source register for this concept
  CHANGELOG.md
  LICENSE                # MIT, full text
  LICENSE-AND-ASSETS.md  # licence for prose (CC BY 4.0) and every third-party asset
  TEST_REPORT.md         # from TEMPLATES/TEST_REPORT_TEMPLATE.md
  package.json           # exact pins (below)
  package-lock.json      # committed; readers use npm ci
  .nvmrc                 # 26
  .gitignore             # copy of the hub .gitignore
  index.html
  src/                   # main.js, scene.js, animation.js, styles.css — only those needed
  public/assets/         # original, CC0 or appropriately licensed assets only
  public/data/
  tests/                 # unit tests for pure logic where practical
  scripts/               # generation or verification scripts
  screenshots/           # genuine captures only; placeholders labelled as such
  outputs/               # git-ignored; a manifest and regeneration command are committed instead
```

## `package.json` baseline

```json
{
  "name": "threejs-cNN-slug",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "engines": { "node": ">=22.12" },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "three": "0.186.1"
  },
  "devDependencies": {
    "vite": "8.3.5"
  }
}
```

Versions are re-checked at the start of each chapter and recorded in SOURCES.md. A `test` script is added only when the repo has tests. Dev tools (Vitest, Playwright, ESLint) are pinned exactly when first introduced.

## README contents

1. **Concept ID and title** — `[Pxx-CHyy-Czz] — [title]`, chapter link in the hub.
2. **What you will be able to do** — observable outcomes.
3. **Prerequisites** — concept IDs with links to their repos.
4. **Estimated effort.**
5. **Expected result** — what you should see or hear when it works.
6. **Commands** — `npm ci` · `npm run dev` · `npm run build` · `npm test` (if present), plus any `scripts/` commands.
7. **Project tree** and how the files import each other.
8. **Tested environment** — OS, browser and version, GPU if known, Node, npm, three, Vite; or `NOT TESTED` with the reason.
9. **Troubleshooting** — symptom → likely cause → check → fix.
10. **Verification record** — checks performed vs checks not possible here.
11. **Assets and licences** — pointer to LICENSE-AND-ASSETS.md.
12. **Omitted standard files** — and why.

## `SOURCES.md` columns

`ID | Title | URL | Publisher/maintainer | Accessed | Claim supported | Version-specific (Y/N)`
