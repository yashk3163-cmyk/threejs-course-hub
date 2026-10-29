# Roadmap — v1.0.0 (approved baseline)

| | |
|---|---|
| Status | **APPROVED** by the creator on 2026-10-29 (Asia/Calcutta) |
| Based on | 0.1.0-draft of the same day. Chapters, concepts, IDs and repository names are unchanged. Effort totals were recomputed from the chapter rows (see CHANGELOG.md). |
| Research date | 2026-10-29 |
| Baseline stack | `three@0.186.1` (r186) · `WebGLRenderer` · Vite 8.3.5 · Node.js 26 LTS target (Vite 8 itself needs `^20.19.0 \|\| >=22.12.0`) |
| Machine-readable copy | CURRICULUM_MAP.json (the source for the generated REPOSITORY_INDEX.md and PREREQUISITE_GRAPH.md) |

Version rule: MAJOR = structural change to parts or IDs; MINOR = chapters added or re-ordered; PATCH = wording or effort fixes. Concept IDs and repository names are frozen from v1.0.0; renaming one needs `REVISE ROADMAP` and a CHANGELOG entry.

Labels used across the course: **Verified fact** (has a source) · **Recommendation** (a reasoned course decision) · **Teaching analogy** (limits stated) · **Unresolved** (flagged for re-verification).

---

## 1. Course vision

A learner who knows basic programming in some language becomes able to explain, modify, debug and build original interactive Three.js scenes, and to turn those scenes into polished 30–90 second explainer videos with a reproducible, documented pipeline. Each concept ends in a small runnable repository. Four checkpoint and capstone tiers build up to a final, independently designed explainer.

**Observable end-of-course outcomes.** The learner can:
- build a responsive, accessible Three.js scene from a blank folder and explain every object in it;
- diagnose common failures (module/import errors, 404 assets, colour-space faults, z-fighting, black materials, leaks) from Console, Network and `renderer.info` evidence;
- drive all animation from a single deterministic timeline and prove it by rendering the same frame twice;
- produce a narrated, captioned explainer through the frame-by-frame + FFmpeg route and verify it with `ffprobe`;
- document sources, asset licences and production decisions so another person can regenerate the video.

## 2. Audience assumptions (recorded defaults)

- Knows variables, conditions, loops and functions in at least one language. JavaScript, HTML/CSS, the terminal, Node/npm, Git and 3D maths are taught from scratch.
- Has a desktop or laptop with Windows 10/11, macOS or a mainstream Linux, plus a current Chrome or Edge. Firefox and Safari are used for comparison testing. A phone is optional and used for responsive checks.
- Studies in sessions of about 30–90 minutes. Creator timezone: Asia/Calcutta. No fixed calendar.
- English-language materials, a neutral and simple visual style, consistent naming (`scene`, `camera`, `renderer`, `timeline`).
- Maths arrives just in time, visually first, and only to the depth the next project needs.

## 3. Design logic

1. **Quick win first.** In P01-CH01 the learner runs a starter and changes a scene.
2. **Foundations before abstraction.** JavaScript (P02) and browser mechanics (P03) come before principled Three.js.
3. **Just-in-time maths.** Vectors arrive with the first scene (P04); transforms, rotations and projection with the scene graph (P05).
4. **A video thread in every part.** Checkpoints export something: a PNG frame at P03, a reproducible still at P05, a quick-capture preview at P07, a timeline render at P09, an aspect-ratio layout at P10, full video at P11.
5. **No experimental feature on the core path.** WebGPU/TSL is a comparison chapter (P12-CH03) and an optional branch.
6. **Spaced, cumulative review.** Every chapter carries a next-session quiz, a 3–7 day review card and a later-part interleaved task (recommendations, not laws). Every checkpoint and capstone reuses at least three earlier parts.
7. **Cognitive load limits.** At most three concepts per chapter; a new maths idea, a new API and a new tool are not introduced together in a first example.

## 4. Parts at a glance

| Part | Theme | Chapters | Concepts | Effort (from chapter rows) |
|---|---|---|---|---|
| P01 | Orientation, quick win, toolchain, Git | 3 | 6 (c01–c06) | 4 h |
| P02 | JavaScript foundations | 6 | 11 (c07–c17) | 7.25 h |
| P03 | Browser foundations + Checkpoint 1 | 5 | 6 (c18–c23) | 6.75–7.25 h |
| P04 | Core Three.js I + vectors | 4 | 7 (c24–c30) | 5 h |
| P05 | Transforms, rotations, projection + Checkpoint 2 | 6 | 8 (c31–c38) | 8.75 h |
| P06 | GPU model, colour, materials, textures | 6 | 8 (c39–c46) | 6.75 h |
| P07 | Interaction, UI, labels + Capstone A | 5 | 8 (c47–c54) | 9.25–11.25 h |
| P08 | Geometry, assets, lifecycle, licensing | 5 | 9 (c55–c63) | 7 h |
| P09 | Deterministic animation + Capstone B | 6 | 10 (c64–c73) | 10.5–11.5 h |
| P10 | Data, callouts, aspect-ratio templates + Capstone C | 3 | 4 (c74–c77) | 6.75 h |
| P11 | Explainer-video pipeline (3 routes) + Capstone D | 5 | 7 (c78–c84) | 12–14 h |
| P12 | Shaders, post-processing, WebGPU/TSL | 3 | 4 (c85–c88) | 4.5 h |
| P13 | Production engineering | 3 | 4 (c89–c92) | 4.25 h |
| P14 | Final independent explainer capstone | 1 | 1 (c93) | 8–12 h |
| **Core total** | | **61** | **93** | **≈ 101–110 h** of chapter time, plus spaced-review sessions |
| P15 | Optional branches (non-blocking) | 6 | 6 (c94–c99) | 8.75 h |

Effort figures are planning estimates, not measurements. Checkpoints and capstones exceed 90 minutes on purpose.

## 5. Chapter detail

Concept IDs follow `Pxx-CHyy-Czz`, where `Czz` is the concept's number within the chapter. Repository names use the global concept number `cNN`. Unless a row says otherwise, the next dependency is the next row.

### P01 — Orientation, quick win and toolchain

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P01-CH01** Setup and first 3D quick win | none | Install an editor, Node LTS and a current browser. Open DevTools. Run a starter with `npm ci` and `npm run dev`. Change a colour and a speed and describe what changed. | C01 → `threejs-c01-dev-environment-setup`; C02 → `threejs-c02-first-scene-quick-win` | Personalised spinning-object scene with a caption | Runs the starter unaided. Makes 2 visible edits. Reads one console error aloud and locates its file/line. | 75 min |
| **P01-CH02** What the tools do: terminal, Node, npm, Vite, import maps | P01-CH01 | Explain the role of Node, npm, `package.json`, the lockfile, scripts and the dev server. Compare the Vite route with the no-build import-map route. Pin a version. | C01 → `threejs-c03-terminal-node-npm-scripts`; C02 → `threejs-c04-vite-vs-importmap-routes` | Same scene built twice (Vite, and pinned import map) | Explains `npm install` vs `npm ci`. Predicts why `file://` breaks modules. Trade-off table filled in correctly. | 75 min |
| **P01-CH03** Git and GitHub for this course | P01-CH02 | Initialise a repo, commit, branch, write a README and `.gitignore`, push with `gh`, deploy a Vite build. Explain why secrets and large outputs stay out of Git. | C01 → `threejs-c05-git-local-basics`; C02 → `threejs-c06-github-publish-pages` | Learner's quick-win scene published to GitHub and deployed | Deployed URL loads (learner-verified). Repo has no `node_modules`, `.env` or video files. Commit history tells a story. | 90 min |

Note for P01-CH03 (added at approval): repositories are private. GitHub Pages serves private repositories only on GitHub Pro, Team or Enterprise plans, so the deploy target is confirmed at that chapter's preflight (see DECISION_LOG D-016). The concept, ID and repo name are unchanged.

### P02 — JavaScript foundations

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P02-CH01** Values, types, operators | P01-CH02 | Predict the result of expressions. Distinguish number/string/boolean/null/undefined. Use `===`. Explain coercion pitfalls. | C01 → `threejs-c07-js-values-types-operators` | Console unit converter for scene units | ≥ 8/10 on a no-notes prediction quiz | 60 min |
| **P02-CH02** Control flow and functions | P02-CH01 | Write conditionals and loops. Define functions with parameters and return values. Explain block and function scope. | C01 → `threejs-c08-js-control-flow`; C02 → `threejs-c09-js-functions-scope` | Grid-of-positions generator (feeds P04 layouts) | Writes a function from a spec with no hints. Explains a scope bug. | 75 min |
| **P02-CH03** Arrays, objects, references | P02-CH02 | Create and transform arrays (`map`/`filter`/`reduce`). Model scene data as objects. Predict mutation via shared references. | C01 → `threejs-c10-js-arrays-objects`; C02 → `threejs-c11-js-references-mutation` | Shot-list data model as an array of objects | Correctly predicts 4/5 reference/mutation scenarios | 75 min |
| **P02-CH04** Modern syntax and modules | P02-CH03 | Use `const`/`let`, arrow functions, destructuring, template literals, spread/rest. Split code into ES modules with named and default exports. | C01 → `threejs-c12-js-modern-syntax`; C02 → `threejs-c13-js-modules-imports` | Refactor the P02-CH03 project into 3 modules | Fixes 3 seeded import/export errors from their messages | 75 min |
| **P02-CH05** Classes and error handling | P02-CH04 | Write a small class with a constructor and methods. Use `try`/`catch`/`finally` and throw meaningful errors. | C01 → `threejs-c14-js-classes`; C02 → `threejs-c15-js-error-handling` | `Timeline` stub class that validates its inputs | Error messages name the bad value. Class passes the given checks. | 60 min |
| **P02-CH06** Events, callbacks, promises, async/await | P02-CH05 | Explain the event loop at a working level. Use callbacks and listeners. Turn a delayed load into a Promise. Use `async`/`await` with error handling. | C01 → `threejs-c16-js-callbacks-events`; C02 → `threejs-c17-js-promises-async-await` | Simulated asset loader with progress and failure states | Orders log output correctly for 3 async snippets. Handles a rejected load gracefully. | 90 min |

### P03 — Browser foundations

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P03-CH01** HTML/CSS to host a canvas | P02-CH04 | Build a semantic page with a full-viewport canvas, a caption overlay and a control panel. Use flexbox/grid and `position`. | C01 → `threejs-c18-html-css-canvas-host` | Explainer stage page layout | Layout holds at 3 window sizes. Overlay text stays readable. | 60 min |
| **P03-CH02** DOM and UI events | P03-CH01, P02-CH06 | Query and update elements. Handle click, input and keyboard events. Make controls keyboard-accessible. | C01 → `threejs-c19-dom-ui-events` | Play/pause/scrub control bar (no 3D yet) | Every control works with the keyboard only | 60 min |
| **P03-CH03** Animation loop, time, resize | P03-CH02 | Drive a `requestAnimationFrame` loop. Use delta time for frame-rate-independent motion. Handle resize and `devicePixelRatio` on a 2D canvas. | C01 → `threejs-c20-raf-delta-time`; C02 → `threejs-c21-canvas-resize-pixel-ratio` | 2D bouncing data dot that moves at the same speed at 30 and 120 Hz | Explains why frame-counted motion is wrong. Canvas is crisp after resize. | 90 min |
| **P03-CH04** Debugging web projects | P03-CH03 | Diagnose module import errors, 404 asset paths, CORS and dependency mismatches with Console and Network panels. Write a minimal reproducible example. | C01 → `threejs-c22-debugging-imports-paths-cors` | Broken-project clinic: fix 6 seeded faults | Fixes ≥ 5/6 and writes one minimal repro | 75 min |
| **P03-CH05** Checkpoint 1: animated 2D explainer card | P03-CH04 | Combine layout, events, time-based animation and debugging. Export a chosen frame as PNG with `canvas.toBlob`. | C01 → `threejs-c23-checkpoint-2d-explainer-card` | 10-second 2D title-card animation with a scrubber and PNG frame export (video thread) | Rubric: time-based motion, accessible controls, the same timestamp gives the same PNG | 120–150 min |

### P04 — Core Three.js I (with vectors)

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P04-CH01** Scene, camera, renderer, loop | P03-CH05 | Create a scene, a `PerspectiveCamera` and a `WebGLRenderer`. Run `setAnimationLoop`. Handle resize and pixel ratio. Explain each object's job. | C01 → `threejs-c24-scene-camera-renderer`; C02 → `threejs-c25-render-loop-resize` | Minimal principled scene, rebuilt from the quick win line by line | Builds it from a blank file with the docs only. Resize works. | 75 min |
| **P04-CH02** Coordinates and vectors in 3D | P04-CH01 | Read the right-handed axes with `AxesHelper`/`GridHelper`. Choose units. Compute distance and direction with `Vector3`. Normalise. | C01 → `threejs-c26-coordinates-axes-helpers`; C02 → `threejs-c27-vectors-distance-direction` | Measure-the-room scene with distance labels in the console | Places 5 objects from coordinate specs. Computes 2 directions correctly. | 75 min |
| **P04-CH03** Geometry, mesh, material | P04-CH02 | Combine built-in geometries with basic materials into meshes. Explain what each parameter changes. | C01 → `threejs-c28-geometry-mesh-material` | Primitive toy shelf | Changes one parameter at a time and predicts the outcome | 60 min |
| **P04-CH04** Lights and shadows | P04-CH03 | Use ambient/hemisphere/directional/point/spot lights. Enable shadows, tune the shadow camera, explain shadow cost. | C01 → `threejs-c29-lights-basics`; C02 → `threejs-c30-shadows` | Three-point lighting on the toy shelf | Fixes shadow acne and clipped shadows. Justifies the light choice. | 90 min |

### P05 — Transforms, rotations and projection

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P05-CH01** Angles and trigonometry for motion | P04-CH04 | Convert degrees and radians. Use `sin`/`cos` for circular and oscillating motion. | C01 → `threejs-c31-angles-trig-orbits` | Orbiting moon and bobbing marker | Derives an orbit position for a given angle on paper | 60 min |
| **P05-CH02** Transforms and the scene graph | P05-CH01 | Apply position, rotation and scale. Distinguish local from world space. Use groups and parent–child hierarchies. Read the world position. | C01 → `threejs-c32-transforms-local-world`; C02 → `threejs-c33-scene-graph-groups` | Articulated desk lamp | Draws the scene graph and predicts world positions | 90 min |
| **P05-CH03** Rotations: Euler angles and quaternions | P05-CH02 | Explain rotation order and gimbal issues. Use quaternions and `slerp` for smooth orientation changes. | C01 → `threejs-c34-euler-quaternions` | Turntable that spins smoothly between two orientations | Explains when Euler fails. Interpolates orientation with no flips. | 75 min |
| **P05-CH04** Dot and cross products, `lookAt` | P05-CH03 | Use the dot product for facing and angle tests and the cross product for perpendiculars. Aim objects and cameras. | C01 → `threejs-c35-dot-cross-lookat` | Spotlight that tracks a target and notices when it faces the viewer | Correct facing test in 3 cases | 60 min |
| **P05-CH05** Matrices and camera projection | P05-CH04 | Explain matrices intuitively as packed transforms. Compare perspective and orthographic cameras. Tune FOV, near/far and depth. | C01 → `threejs-c36-matrices-intuition`; C02 → `threejs-c37-projection-frustum-depth` | Side-by-side perspective vs orthographic diagram scene | Diagnoses a near/far z-fighting fault. Picks a camera for a diagram. | 90 min |
| **P05-CH06** Checkpoint 2: solar-system diorama | P05-CH05 | Integrate transforms, hierarchy, trig, lighting and cameras. Render a still at a chosen time and save it. | C01 → `threejs-c38-checkpoint-solar-system-diorama` | Scale-labelled diorama plus a PNG still at t = 5 s (video thread) | Rubric covering hierarchy, time-based motion, framing and reproducible stills | 150 min |

### P06 — Rendering look: GPU model, colour, materials

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P06-CH01** GPU and rasterisation mental model | P05-CH06 | Explain vertices, triangles, normals, UVs, rasterisation, depth testing and frame time at a working level. | C01 → `threejs-c39-gpu-rasterization-model` | Wireframe/normals/UV visualiser | Labels a pipeline diagram without notes | 60 min |
| **P06-CH02** Colour management and tone mapping | P06-CH01 | Explain sRGB vs linear. Set texture colour spaces and output colour space. Compare tone-mapping options. | C01 → `threejs-c40-color-management-tone-mapping` | Colour-checker scene | Fixes washed-out and too-dark faults | 60 min |
| **P06-CH03** Physically based materials | P06-CH02 | Tune `MeshStandardMaterial`/`MeshPhysicalMaterial` roughness, metalness and emissive. Explain the interplay of energy and lighting. | C01 → `threejs-c41-pbr-materials` | Material swatch board | Matches 3 reference looks | 60 min |
| **P06-CH04** Textures and UVs | P06-CH03 | Load colour, normal and roughness maps. Set wrapping, repeat and filtering. Explain UV mapping. | C01 → `threejs-c42-textures-uvs` | Textured crate and floor using CC0 textures with a manifest | Fixes a stretched-UV and a wrong-colour-space fault | 75 min |
| **P06-CH05** Environment, background, fog | P06-CH04 | Use HDR environment lighting. Choose a background. Use fog for depth and staging. | C01 → `threejs-c43-environment-hdr`; C02 → `threejs-c44-background-fog` | Studio product-shot set | Justifies environment and fog for readability | 75 min |
| **P06-CH06** Transparency and visual-failure diagnosis | P06-CH05 | Handle transparency, sorting, `depthWrite` and blending. Diagnose black, invisible, z-fighting and flipped-normal faults. | C01 → `threejs-c45-transparency-blending`; C02 → `threejs-c46-visual-failure-diagnosis` | Glass lab and a fault-finding checklist | Diagnoses ≥ 5/6 seeded visual faults | 75 min |

### P07 — Interaction, UI and labels

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P07-CH01** Camera controls | P06-CH06 | Configure `OrbitControls` (damping, limits, target). Compare Map/Trackball/Pointer-lock controls. | C01 → `threejs-c47-orbit-and-other-controls` | Constrained exhibit viewer | Limits prevent a lost camera. Justifies the controls chosen. | 60 min |
| **P07-CH02** Raycasting, selection, dragging | P07-CH01 | Convert pointer position to normalised device coordinates. Raycast and highlight a selection. Drag on a plane. | C01 → `threejs-c48-raycasting-selection`; C02 → `threejs-c49-pointer-dragging` | Click-to-inspect and drag-to-arrange exhibits | Works with mouse and touch. Handles empty hits. | 90 min |
| **P07-CH03** GUI parameters, keyboard, accessibility | P07-CH02 | Expose parameters with lil-gui. Add keyboard equivalents, focus handling, reduced-motion support and text alternatives. | C01 → `threejs-c50-lil-gui-parameters`; C02 → `threejs-c51-keyboard-accessibility` | Accessible exhibit navigator | Full keyboard path. `prefers-reduced-motion` respected. | 75 min |
| **P07-CH04** Labels and text | P07-CH03 | Attach CSS2D labels. Choose between CSS2D/CSS3D, 3D text and HTML overlays. Keep text readable. | C01 → `threejs-c52-css2d-labels`; C02 → `threejs-c53-text-3d-and-overlays` | Labelled anatomy-style diagram | Labels track objects and stay legible at 3 sizes | 90 min |
| **P07-CH05** Capstone A: responsive interactive museum | P07-CH04 | Integrate P04–P07 into a responsive, accessible explainer scene. Record a short quick-capture preview where supported. | C01 → `threejs-c54-capstone-interactive-museum` | 3-exhibit museum with info panels, deployed | Capstone rubric (function, accessibility, performance, documentation) | 240–360 min |

### P08 — Geometry, assets and lifecycle

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P08-CH01** Custom BufferGeometry | P07-CH05 | Build geometry from position, normal, UV and index attributes. Update attributes at runtime. | C01 → `threejs-c55-buffergeometry-custom` | Procedural terrain strip from an array | Explains every attribute. Fixes a missing-normals fault. | 75 min |
| **P08-CH02** Points, lines, particles, instancing | P08-CH01 | Render points and lines. Use `InstancedMesh` (and `BatchedMesh` where applicable) to cut draw calls. | C01 → `threejs-c56-points-lines-particles`; C02 → `threejs-c57-instancing-batching` | 10,000-item instanced crowd | Measures draw calls before and after on their own device | 90 min |
| **P08-CH03** Loading assets and glTF/GLB | P08-CH02, P02-CH06 | Use `LoadingManager` progress and error states. Load images, fonts and audio. Load GLB with `GLTFLoader`, including animations. Explain why glTF over OBJ/FBX. | C01 → `threejs-c58-loading-manager-errors`; C02 → `threejs-c59-gltf-glb-loading` | Model viewer with a progress bar and a friendly failure | Missing-file test shows a useful message | 90 min |
| **P08-CH04** Model fixes and asset compression | P08-CH03 | Fix scale, orientation and pivot; replace materials. Compress with gltf-transform (Draco/Meshopt/KTX2) and wire up decoders. | C01 → `threejs-c60-model-fixes`; C02 → `threejs-c61-asset-compression` | Before/after optimisation report | Size and load-time comparison recorded honestly on their own machine | 90 min |
| **P08-CH05** Disposal and asset provenance | P08-CH04 | Dispose of geometries, materials, textures and render targets and verify with `renderer.info`. Keep a licence and attribution manifest. | C01 → `threejs-c62-disposal-memory`; C02 → `threejs-c63-asset-licensing-manifests` | Scene-swapping app with no leaks, plus `ASSETS.json` | Memory stays steady over 20 swaps. Every asset has a licence entry. | 75 min |

### P09 — Deterministic animation and cinematic 3D

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P09-CH01** Central clock and keyframe timeline | P08-CH05 | Separate the time source from the scene state at time t. Write a pure `evaluate(t)` timeline with keyframes. Unit-test it with Vitest. | C01 → `threejs-c64-central-clock-deterministic-time`; C02 → `threejs-c65-keyframe-timeline` | Timeline-driven scene with a scrub bar and tests | The same `t` gives identical state. Tests pass. | 75 min |
| **P09-CH02** Interpolation, easing, animation principles | P09-CH01 | Implement lerp and easing curves. Apply anticipation, overshoot, follow-through, staging and visual hierarchy. | C01 → `threejs-c66-lerp-easing`; C02 → `threejs-c67-animation-principles` | Reveal animation in 3 styles | Critiques the timing of 3 clips using the principles | 75 min |
| **P09-CH03** AnimationMixer, clips, skeletal and morph | P09-CH02, P08-CH03 | Play, blend and cross-fade glTF clips. Drive the mixer from timeline time. Use morph targets. | C01 → `threejs-c68-animationmixer-clips`; C02 → `threejs-c69-skeletal-morph` | Character/prop that switches clips on cue | The mixer is time-addressable (no wall-clock dependence) | 90 min |
| **P09-CH04** Curves, camera moves, camera language | P09-CH03 | Animate the camera along curves with eased look-at targets. Apply framing, composition, focal length, depth and scale cues. | C01 → `threejs-c70-curves-camera-paths`; C02 → `threejs-c71-camera-language-composition` | 3-shot camera sequence with a shot list | Each shot has a stated purpose. Motion is smooth at any `t`. | 90 min |
| **P09-CH05** Procedural motion and particles | P09-CH04 | Write noise- and seeded-random motion that is reproducible from `t` and a seed. | C01 → `threejs-c72-procedural-motion` | Seeded particle flow | The same seed and `t` give the same frame | 60 min |
| **P09-CH06** Capstone B: animated process diagram | P09-CH05 | Explain a real process (e.g. the water cycle) with a deterministic timeline, camera language and labels. | C01 → `threejs-c73-capstone-process-diagram` | 45–60 s scrubbable process animation | Capstone rubric plus a determinism check at 5 timestamps | 240–300 min |

### P10 — Data, callouts and video layouts

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P10-CH01** Data to 3D, charts and callouts | P09-CH06 | Load and validate clean JSON/CSV. Map data to geometry and scales. Build arrows, callouts and annotations. | C01 → `threejs-c74-data-json-csv-to-3d`; C02 → `threejs-c75-callouts-charts-annotations` | 3D bar/terrain chart with callouts | Data-transform unit tests pass. Bad rows are rejected with a message. | 90 min |
| **P10-CH02** Aspect-ratio templates (16:9, 9:16, 1:1) | P10-CH01 | Build a fixed-resolution render stage separate from the window. Add title-safe margins, title cards and transitions. | C01 → `threejs-c76-aspect-ratio-templates` | Reusable template rendering the same shot in 3 aspect ratios | Text inside safe areas in all 3 formats | 75 min |
| **P10-CH03** Capstone C: data-driven 3D visualisation | P10-CH02 | Build a sourced, accurate data story with provenance. | C01 → `threejs-c77-capstone-data-visualization` | Interactive and renderable data visualisation | Rubric covering data accuracy, provenance, clarity and accessibility | 240 min |

### P11 — Explainer-video production pipeline

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P11-CH01** Pre-production | P10-CH03 | Define audience and objective. Fact-check. Write script, storyboard, shot list, asset plan and timing sheet. | C01 → `threejs-c78-script-storyboard-shotlist` | Pre-production pack for a 60 s explainer | Every claim in the script is sourced. Timing sums correctly. | 75 min |
| **P11-CH02** Route 1: quick canvas capture | P11-CH01 | Use `canvas.captureStream()` with `MediaRecorder`. Negotiate the MIME type with `isTypeSupported`. Explain why real-time capture is not deterministic. | C01 → `threejs-c79-canvas-capture-mediarecorder` | Recorder with a format-detection report | Report lists the actual supported types per tested browser | 75 min |
| **P11-CH03** Route 2: frame-by-frame render plus FFmpeg | P11-CH02 | Render frame N at t = N/fps. Export a numbered PNG sequence (browser download or Playwright-driven). Assemble with FFmpeg (libx264, yuv420p, CRF). Inspect with ffprobe. | C01 → `threejs-c80-frame-by-frame-export`; C02 → `threejs-c81-ffmpeg-assemble-inspect` | 10 s 1080p30 clip = 300 frames, with a manifest | ffprobe shows the expected resolution, fps, frame count and duration | 120 min |
| **P11-CH04** Route 3: narration, audio sync, captions, delivery | P11-CH03 | Sync the timeline to narration markers. Set levels and silence. Mux audio. Produce SRT/WebVTT captions. Choose delivery settings. | C01 → `threejs-c82-narration-audio-sync`; C02 → `threejs-c83-captions-delivery-settings` | Narrated clip with burned and soft captions | Sync within the stated tolerance. Captions readable within safe margins. | 90 min |
| **P11-CH05** Capstone D: reusable 30–90 s explainer pipeline | P11-CH04 | Run the full pipeline from script to verified encode with one regeneration command. | C01 → `threejs-c84-capstone-video-pipeline` | Final encoded explainer plus pipeline repo (frames kept out of Git) | Video gate: metadata verified, playback checked, licences complete | 360–480 min |

### P12 — Shaders and advanced rendering

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P12-CH01** Shader concepts and a minimal shader | P11-CH05 | Explain vertex vs fragment stages, uniforms, attributes and varyings. Write a minimal `ShaderMaterial`. Debug compile errors. | C01 → `threejs-c85-shader-basics-glsl` | Time-uniform scan-line material | Fixes 2 seeded GLSL errors. Drives the uniform from timeline `t`. | 90 min |
| **P12-CH02** Post-processing | P12-CH01 | Use `EffectComposer` with bloom, outline, anti-aliasing and output passes. Explain render targets and performance cost. | C01 → `threejs-c86-postprocessing-effectcomposer` | Highlight-the-key-part bloom/outline shot | Frame time before/after measured on their own device | 90 min |
| **P12-CH03** WebGPURenderer, fallback and TSL (comparison) | P12-CH02 | Port a scene to `three/webgpu`. Detect the active backend and force the WebGL 2 fallback. List the incompatibilities. Write one TSL material (optional). | C01 → `threejs-c87-webgpurenderer-fallback`; C02 *(optional)* → `threejs-c88-tsl-node-materials-intro` | Same scene on both renderers with a backend badge | Correct incompatibility list. Fallback tested in at least one browser. | 90 min |

### P13 — Production engineering

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P13-CH01** Architecture and testing | P12-CH03 | Structure modules, config and reusable scene components. Write Vitest unit tests and Playwright smoke and screenshot tests, and explain their limits. | C01 → `threejs-c89-project-architecture`; C02 → `threejs-c90-testing-vitest-playwright` | Refactored Capstone B with a CI test workflow | CI green, with tolerances and known flakiness documented | 90 min |
| **P13-CH02** Performance budgets and profiling | P13-CH01 | Set budgets for draw calls, textures, shadows and pixel ratio. Profile frame time. Apply LOD and graceful degradation. | C01 → `threejs-c91-performance-budgets-profiling` | Performance report with a quality toggle | Budget met on the stated device, or deviation explained | 90 min |
| **P13-CH03** Deploy, release, reproducibility | P13-CH02 | Deploy, tag releases, write a dependency-update procedure, check for secrets. | C01 → `threejs-c92-deploy-release-reproducibility` | Released v1.0 of a capstone | A fresh clone plus `npm ci` reproduces the result | 75 min |

### P14 — Final capstone

| Chapter | Prereqs | Learning objectives | Concepts → repos | Project | Assessment / mastery | Effort |
|---|---|---|---|---|---|---|
| **P14-CH01** Final independent explainer | P13-CH03 | Independently choose a topic, then research, script, build, render, verify and document a 30–90 s explainer. | C01 → `threejs-c93-final-independent-explainer` | Original explainer, pipeline repo and production log | Full rubric across all gates. Self-evaluation. Decision log. | 480–720 min |

### P15 — Optional advanced branches (never block the core path)

| Chapter | Earliest prereq | Concept → repo | Status label | Effort |
|---|---|---|---|---|
| **P15-CH01** Physics (Rapier vs cannon-es) | P09-CH05 | `threejs-c94-opt-physics-rapier-cannon` | Library status verified at chapter time | 90 min |
| **P15-CH02** GSAP timelines (Theatre.js comparison note) | P09-CH02 | `threejs-c95-opt-gsap-timelines` | GSAP is free under a non-OSI licence; Theatre.js not recommended (1.0 in private development) | 75 min |
| **P15-CH03** WebCodecs + Mediabunny in-browser MP4 export | P11-CH03 | `threejs-c96-opt-webcodecs-mediabunny-export` | Browser-dependent (not Baseline) | 90 min |
| **P15-CH04** GPU compute with TSL | P12-CH03 | `threejs-c97-opt-gpu-compute-tsl` | WebGPU-dependent, experimental | 90 min |
| **P15-CH05** WebXR introduction | P07-CH05 | `threejs-c98-opt-webxr-intro` | Device-dependent | 90 min |
| **P15-CH06** Blender → glTF pipeline | P08-CH04 | `threejs-c99-opt-blender-gltf-pipeline` | External tool | 90 min |

## 6. Core path, checkpoints, capstones and optional branches

- **Core path:** P01 → P14 in order (see PREREQUISITE_GRAPH.md). Within the core, P12-CH03-C02 (TSL) is optional, and WebGPU material is "useful to recognise", not "must understand".
- **Checkpoints:** CP1 = P03-CH05 (2D card plus PNG export). CP2 = P05-CH06 (diorama plus reproducible still).
- **Capstones:** A = P07-CH05 museum. B = P09-CH06 process diagram. C = P10-CH03 data visualisation. D = P11-CH05 video pipeline. Final = P14-CH01.
- **Optional branches:** P15-CH01 to P15-CH06. Each states its earliest prerequisite and is never a prerequisite of core work.

## 7. Review, glossary and transfer plan (recommendation)

- Every chapter: a next-session retrieval quiz, a 3–7 day spaced review card, and a later-part interleaved task.
- GLOSSARY.md grows each chapter; every checkpoint and capstone quizzes cumulative terms.
- Every checkpoint and capstone reuses at least three earlier parts and ends with a transfer task (a different object, dataset or video use case).

## 8. Repository and versioning plan

**Model.** One private hub (`threejs-course-hub`) plus one repository per concept: 93 core + 6 optional = 99. Names are lowercase and hyphenated with a stable global number (`threejs-cNN-slug`). REPOSITORY_INDEX.md links every repo once it is verified.

**Ownership and visibility.** All repositories belong to the creator's personal GitHub account and are private by default (decided at approval). A repo is made public only if the creator chooses to, for example to host a demo.

**Creation discipline.** Repos are created only when their chapter is approved, so 1–3 per session. Before each one, check it does not already exist. Create sequentially, never in parallel, and verify each write before recording it. This stays far below GitHub's documented secondary limits for content-creating requests.

**Who creates repos (recorded at approval).** The assistant's workspace cannot create GitHub repositories (its `gh` CLI is not authenticated). The working arrangement is: the creator creates each empty private repo (one command or a few clicks, given in each chapter preflight), the repo is attached to the session with push access, and the assistant pushes and verifies. If this becomes impractical, the documented fallback below may be chosen — never silently.

**Fallback policy (only with explicit creator approval).** Switch to one repo per chapter with `cNN-slug/` concept folders if: repeated 403/429 rate-limit errors persist after back-off; account permissions forbid repo creation; or the creator chooses it for convenience. Concept IDs and folder names stay identical, so a later split is mechanical.

**Version pinning.**
- `three`: exact `0.186.1` (three.js does not follow semver; each `rNNN` is npm `0.NNN.x`).
- `vite`: exact `8.3.5` at the time each repo is created; each repo records its resolved versions.
- Node: `"engines": { "node": ">=22.12" }` (Vite 8's own floor), `.nvmrc` → `26`. Tested target Node 26 LTS; every test report records the Node version that actually ran.
- npm: the version bundled with that Node. `package-lock.json` committed; readers use `npm ci`.
- Add-ons imported only through `three/addons/...` from the pinned package (export verified in `three@0.186.1`). No CDN in npm projects. The import-map route (P01-CH02) pins `three@0.186.1` URLs explicitly and uses the non-minified `build/three.module.js`, because the npm package no longer ships minified builds.
- Dev tools (Vitest, Playwright, ESLint) pinned exactly when first introduced; versions verified at that chapter.

**Updating version-sensitive chapters.**
1. Each concept's SOURCES.md marks version-specific claims (Y/N).
2. At each new three.js release, or at least quarterly, run the version audit (PROMPTS/RESEARCH_SINGLE_CONCEPT.md, audit variant) on version-sensitive concepts, oldest first.
3. Read every intervening Migration Guide section; upgrade in steps of at most 10 revisions.
4. Branch → bump → `npm ci` → tests → manual visual check → CHANGELOG entry → tag `vX.Y.Z-rNNN`.
5. Completed chapters stay frozen; updates ship as new tagged versions only with creator approval.

## 9. Evidence and source strategy

For each chapter: three.js docs, manual, examples, Migration Guide and release notes first; then MDN, Node and Vite docs; then browser compatibility tables, Khronos and FFmpeg docs; maintainer docs next; community material only as a supplement. Claims are cited inline and logged in SOURCES_MASTER.md with access date and a version-specific flag. Secondary-only claims are marked "re-verify" and may not ship in a lesson until confirmed.

## 10. Risk register

| # | Risk | Likelihood / impact | Mitigation |
|---|---|---|---|
| R1 | Learner blocked at install (PATH, permissions, corporate proxy) | High / High | Per-OS steps in P01-CH01, a `node -v`/`npm -v` checkpoint, a troubleshooting table, import-map fallback route |
| R2 | Module/import/path errors and `file://` usage | High / Medium | Taught explicitly in P01-CH02 and P03-CH04 with seeded faults |
| R3 | Three.js API drift (releases every ~8–11 weeks, 10-release deprecation window) | High / Medium | Exact pins, per-concept version notes, version audits, stepwise upgrades |
| R4 | WebGPU unavailable (Firefox Linux/Android, older devices) | Medium / Low for core | Core uses WebGLRenderer; WebGPU is comparison/optional with tested fallback |
| R5 | MediaRecorder format variance and dropped frames | High / Medium | `isTypeSupported` negotiation, per-browser report, Route 2 as the reproducible default |
| R6 | Headless/CI GPU differences break render tests | High / Medium | Unit-test pure timeline maths; screenshot tests with tolerances and per-platform baselines; record GPU/flags per run |
| R7 | FFmpeg not installed or flag mismatch | Medium / Medium | Per-OS install steps, `ffmpeg -version` gate, flags re-verified against official docs at P11 |
| R8 | Large frames/videos bloat Git | High / Medium | `.gitignore` covers `outputs/`, `frames/`, `*.mp4`, `*.webm`; manifests plus regeneration scripts; Git LFS only on request |
| R9 | Asset, font or music licence violations | Medium / High | CC0, original or generated assets only; ASSETS.json manifest; licence check in the QA checklist |
| R10 | Browser variation (colour, fonts, DPR, Safari quirks) | Medium / Medium | Test matrix recorded per chapter; fixed-resolution render stage for video |
| R11 | GitHub repo-count, rate or permission limits | Low–Medium / Medium | Paced creation, existence checks, documented fallback (Section 8) |
| R12 | Cognitive overload (new maths + API + tool together) | Medium / High | ≤ 3 concepts per chapter, just-in-time maths, fading worked examples, mastery gates |
| R13 | Learning-science claims overstated | Low / Medium | Presented as design principles; primary sources verified before citing in lessons |
| R14 | Secret or token leakage | Low / High | Interactive `gh auth login` only; `.env` ignored; pre-publish secret check in the QA checklist |
| R15 | Long effort leads to drop-off | Medium / High | Quick win in session 1, a checkpoint every 1–2 parts, visible video thread |
| R16 | Private repos block free GitHub Pages hosting (added at approval) | Medium / Medium | Verified: Pages on private repos needs Pro/Team/Enterprise. Choose at P01-CH03: a paid plan, one public demo repo, another static host, or local `vite preview` |
| R17 | Every new concept repo needs a creator action to create it (added at approval) | High / Low | Each preflight lists the exact repos and a one-line create command; the fallback stays available on request |
