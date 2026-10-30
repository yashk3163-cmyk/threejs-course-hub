# Source register (master)

Accessed 2026-10-29 unless noted. S40–S57 were added for P01-CH01. "Secondary" sources may not be the sole support for a claim in a lesson; they are flagged for re-verification. Each concept repo keeps its own SOURCES.md; entries used there are also added here.

| ID | Title | URL | Publisher / maintainer | Claim supported | Version-specific |
|---|---|---|---|---|---|
| S01 | Releases · mrdoob/three.js | https://github.com/mrdoob/three.js/releases | three.js authors | r186 is the latest release; each release links its Migration Guide section | Y |
| S02 | Migration Guide (wiki) | https://github.com/mrdoob/three.js/wiki/Migration-Guide | three.js authors | Removals and renames by revision; upgrade in steps of ≤ 10 revisions (details re-verified per chapter) | Y |
| S03 | three – npm | https://www.npmjs.com/package/three | npm / three.js | Latest 0.186.1; MIT | Y |
| S04 | three.js manual – WebGPURenderer | https://threejs.org/manual/en/webgpurenderer.html | three.js | WebGPU by default with WebGL 2 fallback; TSL; ShaderMaterial/onBeforeCompile/EffectComposer unsupported; WebGLRenderer still recommended for pure WebGL 2 (from the indexed page text; direct fetch failed — re-fetch at P12-CH03) | Y |
| S05 | Three.js in 2026: what changed (r186) | https://www.utsubo.com/blog/threejs-2026-what-changed | Utsubo (secondary) | Release cadence; r186 changes (re-verify against S02) | Y |
| S06 | three.js – cdnjs | https://cdnjs.com/libraries/three.js/ | cdnjs | cdnjs serves minified files for 0.186.1 (cdnjs-generated; see D-014) | Y |
| S07 | WebGPU is now supported in major browsers | https://web.dev/blog/webgpu-supported-major-browsers | Google web.dev | WebGPU availability by browser and OS | Y |
| S08 | WebGPU | https://en.wikipedia.org/wiki/WebGPU | Wikipedia (tertiary) | W3C Candidate Recommendation Draft (Sep 2026); Firefox Linux/Android pre-release | Y |
| S09 | Node.js Releases | https://nodejs.org/en/about/previous-releases | OpenJS Foundation | v26/v24/v22 LTS status; production should use Active or Maintenance LTS | Y |
| S10 | Node.js release blog | https://nodejs.org/en/blog/release | OpenJS Foundation | Recent 26.x/24.x/22.x releases | Y |
| S11 | Vite 8.0 is out! | https://vite.dev/blog/announcing-vite8 | Vite team | Rolldown as unified bundler; Node 20.19+/22.12+ | Y |
| S12 | Releases (policy) | https://vite.dev/releases | Vite team | Supported lines and patch policy | Y |
| S13 | vite – npm versions | https://www.npmjs.com/package/vite?activeTab=versions | npm | Latest 8.3.5 | Y |
| S14 | Deploying a Static Site | https://vite.dev/guide/static-deploy | Vite team | GitHub Pages `base` setting and Actions workflow | Y |
| S15 | MediaRecorder: isTypeSupported() | https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/isTypeSupported_static | MDN | Baseline since Apr 2021; recording may still fail | N |
| S16 | MediaStream Recording API | https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API | MDN | captureStream + MediaRecorder example | N |
| S17 | MediaRecorder browser support and codecs | https://www.testmuai.com/learning-hub/mediarecorder-browser-support/ | TestMu AI (secondary) | Safari MP4 default; WebM from 18.4 (re-verify) | Y |
| S18 | WebCodecs API – Can I use | https://caniuse.com/webcodecs | caniuse | Browser support table (Sep 2026 data) | Y |
| S19 | VideoEncoder | https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder | MDN | Not Baseline; secure context required | Y |
| S20 | WebCodecs API | https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API | MDN | Encoded chunks need a muxer | N |
| S21 | mp4-muxer README | https://github.com/Vanilagy/mp4-muxer | Vanilagy | Deprecated in favour of Mediabunny | Y |
| S22 | webm-muxer – npm | https://www.npmjs.com/package/webm-muxer | npm / Vanilagy | Deprecated; superseded by Mediabunny | Y |
| S23 | mediabunny | https://www.npmjs.com/package/mediabunny | Vanilagy | Browser media read/write; CanvasSource; MPL-2.0 | Y |
| S24 | ccapture.js | https://github.com/spite/ccapture.js/ | spite | v2.0.0 rewrite using WebCodecs; 1.x dormant | Y |
| S25 | Download FFmpeg | https://ffmpeg.org/download.html | FFmpeg | ~6-month major cadence; 8.1.x and 9.0 branches | Y |
| S26 | FFmpeg – endoflife.date | https://endoflife.date/ffmpeg | endoflife.date | 9.0.2 (2026-09-18); support lines | Y |
| S27 | FFmpeg image sequence to video | https://ffmpeg-cookbook.com/en/articles/slideshow-timelapse/ | community (secondary) | `-framerate` / libx264 / yuv420p recipe (re-verify against official docs at P11-CH03) | N |
| S28 | Testing 3D applications with Playwright on GPU | https://blog.promaton.com/testing-3d-applications-with-playwright-on-gpu-1e9cfc8b54a9 | Promaton (secondary) | Headless GPU flags; new headless mode | Y |
| S29 | Rate limits for the REST API | https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api | GitHub Docs | Secondary limits on content-creating requests; subject to change | Y |
| S30 | Improving Students' Learning With Effective Learning Techniques (Dunlosky et al., 2013) | https://journals.sagepub.com/doi/abs/10.1177/1529100612453266 | SAGE / Psychological Science in the Public Interest 14(1) | Practice testing and distributed practice rated high utility | N |
| S31 | Strengthening the Student Toolbox | https://www.aft.org/ae/fall2013/dunlosky | AFT American Educator | Practitioner summary of S30 | N |
| S32 | GSAP 3.13 release | https://gsap.com/blog/3-13/ | GreenSock / Webflow | GSAP and plugins free, including commercial use | Y |
| S33 | gsap versions – Snyk | https://security.snyk.io/package/npm/gsap | Snyk | 3.15.0 (Apr 2026) | Y |
| S34 | lil-gui – npm | https://www.npmjs.com/package/lil-gui | npm | 0.21.0 | Y |
| S35 | Theatre.js releases | https://www.theatrejs.com/docs/latest/releases | Theatre.js | Public releases up to 0.7.x | Y |
| S36 | Vite 8.1 is out! | https://vite.dev/blog/announcing-vite8-1 | Vite team | Vite 8 released March 2026 | Y |
| S37 | npm package contents of `three@0.186.1` | `npm pack three@0.186.1 --dry-run --json` (run in workspace) | npm registry (primary) | `build/` has no `*.min.js`; `exports` include `./addons/*`, `./webgpu`, `./tsl` | Y |
| S38 | npm registry metadata for `three` and `vite` | `npm view three time`, `npm view vite time`, `npm view vite@8.3.5 engines` (run in workspace) | npm registry (primary) | three 0.186.1 published 2026-09-24; vite 8.3.5 published 2026-10-21; Vite 8.3.5 engines `^20.19.0 \|\| >=22.12.0` | Y |
| S39 | Creating a GitHub Pages site | https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site | GitHub Docs | Pages available in public repos on GitHub Free; public and private repos on Pro, Team, Enterprise Cloud and Enterprise Server | Y |
| S40 | Node.js v26.13.0 (LTS) release post | https://nodejs.org/en/blog/release/v26.13.0 | OpenJS Foundation | 26.13.0 LTS "Lithium" (2026-10-28, to end of April 2029); `.msi`, `.pkg`, Linux binaries; Linux needs `libatomic` since Node 25 | Y |
| S41 | Download Node.js | https://nodejs.org/en/download | OpenJS Foundation | "Latest LTS" is v26.13.0 | Y |
| S42 | nvm README | https://github.com/nvm-sh/nvm | nvm maintainers | Install command v0.40.8; not native on Windows | Y |
| S43 | Setting up Visual Studio Code | https://code.visualstudio.com/docs/setup/setup-overview | Microsoft | Windows, macOS, Linux; no account for the core editor; built-in terminal | N |
| S44 | Terminal basics | https://code.visualstudio.com/docs/terminal/basics | Microsoft | Ctrl+` / ⌃` toggles the terminal; opens in the workspace folder | N |
| S45 | Open Chrome DevTools | https://developer.chrome.com/docs/devtools/open | Google | DevTools and Console shortcuts | N |
| S46 | Set-ExecutionPolicy | https://learn.microsoft.com/powershell/module/microsoft.powershell.security/set-executionpolicy | Microsoft | Default Restricted on Windows clients; RemoteSigned for CurrentUser | N |
| S47 | npm ci | https://docs.npmjs.com/cli/v10/commands/npm-ci | npm | Lockfile required; errors when out of sync; never writes package files | N |
| S48 | Getting Started (Vite guide) | https://vite.dev/guide/ | Vite team | Node 20.19+/22.12+; dev/build/preview scripts; `index.html` entry point | Y |
| S49 | Server Options | https://vite.dev/config/server-options | Vite team | Default port 5173; next free port if busy | Y |
| S50 | Test runner (node:test) | https://nodejs.org/api/test.html | OpenJS Foundation | Stable since v20; default `node --test` patterns | Y |
| S51 | Understanding SC 2.2.2 Pause, Stop, Hide | https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | W3C | Auto-starting motion over 5 s needs a pause mechanism (Level A) | N |
| S52 | prefers-reduced-motion | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion | MDN | Reduced-motion preference; Baseline since Jan 2020 | N |
| S53 | Downloading source code archives | https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives | GitHub | Code → Download ZIP; no Git history | N |
| S54 | three.js r186 source, as installed | `node_modules/three/src/` from `three@0.186.1` | three.js authors | setAnimationLoop timestamp; sRGB output default; Color.NAMES and setStyle formats (space-separated rgb silently ignored); WebGL context error text; Icosahedron detail 0 flat normals | Y |
| S55 | Course workspace runs (P01-CH01) | npm, Vite, Playwright runs on 2026-10-29/30 | this course | Quoted command output, error texts, build sizes, browser results | Y |
| S56 | Visual Studio Code on macOS | https://code.visualstudio.com/docs/setup/mac | Microsoft | Download, open, drag into Applications (accessed 2026-10-30) | N |
| S57 | Visual Studio Code on Linux | https://code.visualstudio.com/docs/setup/linux | Microsoft | Official `.deb`/`.rpm`; `.deb` via software centre or apt (accessed 2026-10-30) | N |

## Pending verification (no lesson claims rest on these yet)

Khronos glTF 2.0 spec and extension registry; three.js GLTFLoader / KTX2Loader / DRACOLoader docs; gltf-transform docs; Poly Haven, Kenney, ambientCG licence pages; Google Fonts / SIL OFL; GitHub CLI manual (`gh repo create`); Git LFS docs; Vitest, Playwright, ESLint docs; Rapier, cannon-es, pmndrs postprocessing; official FFmpeg docs (ffmpeg, ffprobe, subtitles filter, libx264); Roediger & Karpicke (2006); Sweller (cognitive load theory); Renkl (worked examples and fading); Mayer (multimedia principles); structure benchmarks (three.js manual, discoverthreejs.com, Three.js Journey, MDN WebGL/JS guides).
