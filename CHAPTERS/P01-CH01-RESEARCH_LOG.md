# Research log — P01-CH01 — 2026-10-29, completed 2026-10-30 (Asia/Calcutta)

## Versions and assumptions

| Item | Value | How verified |
|---|---|---|
| three | r186 (npm 0.186.1) | `npm ls` after install; `REVISION = '186'` in `node_modules/three/src/constants.js` |
| Vite | 8.3.5 | `npm ls`; engines `^20.19.0 \|\| >=22.12.0` (S38, S48) |
| Node used for tests | 22.23.4 (workspace) | `node --version`. Node 26 LTS could not be installed in the workspace; the course target stays 26 LTS. |
| Browser used for tests | Google Chrome for Testing 153.0.8010.12, headless, WebGL 2 through SwiftShader (CPU) | `chrome --version`; WebGL 2 context reported by the page |
| Learner's machine | Windows 10/11, macOS or mainstream Linux; current Chrome or Edge | Assumption recorded in ROADMAP.md |

## Questions

| Q# | Question | Sources checked | Finding | Confidence | Version-specific | Conflicts and resolution |
|---|---|---|---|---|---|---|
| Q1 | Which Node.js should a learner install today, and from where? | S40, S41 | Node.js 26.13.0 became LTS ("Lithium") on 2026-10-28, supported to end of April 2029. Official installers: Windows `.msi` (x64, ARM64), macOS `.pkg`; Linux `.tar.xz` binaries. Since Node 25, Linux binaries need `libatomic`. | High | Y | The download page's per-OS section did not render for the fetch tool; the release post (S40) gave the file list. |
| Q2 | Simplest reliable Linux route? | S42, S40 | nvm v0.40.8 install script, then `nvm install 26`. nvm does not run natively on Windows. | High (README) | Y | — |
| Q3 | Which editor, and how does a beginner open a terminal in the right folder? | S43, S44, S56, S57 | VS Code runs on Windows, macOS, Linux; no account needed for the core editor. macOS: drag the app into Applications. Linux: official `.deb`/`.rpm` packages (re-checked 2026-10-30). Terminal: Ctrl+\` (Windows/Linux), ⌃\` (macOS), or Terminal → New Terminal; it opens in the folder open in VS Code. | High | N | — |
| Q4 | How to open DevTools and the Console? | S45 | F12 or Ctrl+Shift+I / Cmd+Option+I; Console directly: Ctrl+Shift+J / Cmd+Option+J. | High | N | — |
| Q5 | Most common Windows blocker for `npm` in PowerShell? | S46 | Default execution policy on Windows client computers is Restricted (no scripts). Fix for the current user: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`. Alternative: use Command Prompt or `npm.cmd`. | High for policy facts; the exact wording of the error is commonly reported, not quoted from Microsoft | N | Microsoft page does not explicitly state whether CurrentUser needs admin rights; lesson says it changes only your account and does not claim more. |
| Q6 | `npm ci` vs `npm install` for a downloaded project | S47 | `npm ci` needs a lockfile, deletes `node_modules` first, errors if `package.json` and lockfile disagree, never writes either file. | High | N (npm 10 docs) | — |
| Q7 | Vite scripts and dev-server behaviour | S48, S49 | `dev` = `vite`, `build` = `vite build`, `preview` = `vite preview`; `index.html` at the project root is the entry point; dev port 5173 by default, next free port if busy. | High | Y | — |
| Q8 | Three.js APIs used by the quick-win scene (r186) | S54 (installed source) | `WebGLRenderer.setAnimationLoop(cb)` calls `cb(time)` with the requestAnimationFrame timestamp in ms; output colour space defaults to sRGB; `Color.NAMES` lists colour keywords; `Color.setStyle` accepts hex (3/6 digits), names, comma-separated `rgb/rgba/hsl/hsla`; the WebGL renderer throws "Error creating WebGL context." when WebGL is unavailable. | High (read from the pinned source) | Y | Finding: Three.js r186 **silently ignores** space-separated `rgb(255 136 0)` (colour stays unchanged, no warning). The config check rejects it with a message; a unit test pins this behaviour. |
| Q9 | Test runner for the zero-dependency projects | S50 | `node:test` is stable since Node 20; `node --test` finds `**/*.test.js` by default. | High | Y | — |
| Q10 | Motion accessibility for an auto-rotating scene | S51, S52 | Auto-starting motion that lasts more than 5 s alongside other content needs a pause mechanism (WCAG 2.2 SC 2.2.2, Level A). `prefers-reduced-motion` is Baseline since Jan 2020. | High | N | — |
| Q11 | How does the learner get a private repo's files before Git is taught? | S53 | GitHub: Code → Download ZIP. The ZIP has no Git history. | High | N | — |
| Q12 | Is the production build clean? | S55 (workspace build) | `vite build` succeeds; it warns that the bundle (533 kB, of which almost all is Three.js) exceeds 500 kB. Harmless for this chapter; bundle optimisation belongs to P13-CH02. | High | Y | — |
| Q13 | Which Ubuntu package provides `libatomic`? | workspace `dpkg -S` on Ubuntu 24.04 | `libatomic1` | High | N | — |
| Q14 | Does a lockfile made on Linux work on Windows and macOS? | inspection of `package-lock.json` | It lists the win32 and darwin builds of Vite's native helpers (`@rolldown/binding-*`, `lightningcss-*`), so `npm ci` can pick the right one; not run on those systems | Medium (not executed) | Y | — |

## Migration Guide sections read

None needed: the chapter starts on r186 and uses only long-standing APIs (WebGLRenderer, Scene, PerspectiveCamera, TorusKnotGeometry, MeshStandardMaterial, HemisphereLight, DirectionalLight, Color). Their r186 behaviour was read directly from the installed source.

## Unverified items carried forward

- Behaviour on real GPUs, Safari and Firefox — only headless Chrome with a CPU renderer was tested here. The learner's own run is the real-hardware check (mastery gate in C02).
- Node 26 on the learner's machine — the projects were tested on Node 22.23.4; both declare `engines: >=22.12`.
- Exact text of the Windows "running scripts is disabled" error — described, not quoted.
