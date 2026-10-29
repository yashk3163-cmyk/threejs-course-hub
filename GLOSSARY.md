# Glossary

Plan: each chapter adds its new terms (term · plain-English definition · first chapter · related terms). Every checkpoint quizzes the cumulative list. Definitions are re-checked against official docs when the chapter that introduces them is written, and the "Verified" column is then set to the chapter ID.

| Term | Plain-English definition | First chapter | Verified |
|---|---|---|---|
| Node.js | A program that runs JavaScript outside the browser; in this course it runs our tools. | P01-CH01 | — |
| npm | Node's package manager: downloads libraries and runs project scripts. | P01-CH02 | — |
| package-lock.json | Records exact installed versions so others can reproduce the install with `npm ci`. | P01-CH02 | — |
| Vite | Development server and build tool that serves modules quickly and bundles them for deployment. | P01-CH02 | — |
| Import map | A browser feature that maps names like `three` to URLs, enabling module imports without a build step. | P01-CH02 | — |
| ES module | A JavaScript file that uses `import` and `export`. | P02-CH04 | — |
| Promise | An object representing a value that will be ready later, or an error if it fails. | P02-CH06 | — |
| requestAnimationFrame | Browser call that runs your function just before the next screen repaint. | P03-CH03 | — |
| Delta time | Time elapsed since the last frame, used to keep motion speed independent of frame rate. | P03-CH03 | — |
| devicePixelRatio | Ratio of physical screen pixels to CSS pixels; affects sharpness and rendering cost. | P03-CH03 | — |
| CORS | Browser security rule controlling which sites may load resources from other origins. | P03-CH04 | — |
| Scene | The container that holds everything to be drawn. | P04-CH01 | — |
| Camera | Defines the viewpoint and projection used to draw the scene. | P04-CH01 | — |
| Renderer | Turns a scene plus a camera into pixels on a canvas (here `WebGLRenderer`). | P04-CH01 | — |
| Vector3 | Three numbers (x, y, z) used for positions, directions and offsets. | P04-CH02 | — |
| Normalise | Scale a vector to length 1 while keeping its direction. | P04-CH02 | — |
| Mesh | A drawable object: geometry (shape) plus material (surface look). | P04-CH03 | — |
| Local vs world space | Coordinates relative to a parent object vs relative to the whole scene. | P05-CH02 | — |
| Scene graph | The parent–child tree of objects; children inherit their parents' transforms. | P05-CH02 | — |
| Quaternion | A four-number representation of rotation that interpolates smoothly without gimbal lock. | P05-CH03 | — |
| Frustum | The visible, pyramid-shaped volume of a perspective camera between its near and far planes. | P05-CH05 | — |
| Rasterisation | Converting triangles into the pixels they cover. | P06-CH01 | — |
| Colour space (sRGB / linear) | How colour numbers map to light; lighting maths uses linear values. | P06-CH02 | — |
| Tone mapping | Compressing bright (HDR) values into the range a screen can show. | P06-CH02 | — |
| PBR | Physically based rendering: materials described by real-world-like properties such as roughness and metalness. | P06-CH03 | — |
| UV coordinates | 2D coordinates telling a mesh where each point samples a texture. | P06-CH04 | — |
| Raycasting | Shooting an invisible line to find which object the pointer is over. | P07-CH02 | — |
| Draw call | One instruction to the GPU to draw a batch of geometry; fewer usually means faster. | P08-CH02 | — |
| glTF / GLB | Khronos standard 3D asset format (JSON plus binary files / a single binary file). | P08-CH03 | — |
| Deterministic rendering | The same time input always produces the same frame, regardless of machine speed. | P09-CH01 | — |
| Easing | A curve that shapes how a value changes over time (for example slow-in, slow-out). | P09-CH02 | — |
| MediaRecorder | Browser API that records a media stream, such as a canvas, in real time. | P11-CH02 | — |
| MIME type / codec | Labels for a file's container (e.g. video/webm) and its compression format (e.g. VP9, H.264). | P11-CH02 | — |
| FFmpeg / ffprobe | Command-line tools to encode or assemble media, and to inspect media metadata. | P11-CH03 | — |
| yuv420p | A widely compatible pixel format for H.264 video delivery. | P11-CH03 | — |
| CRF | Constant Rate Factor: an x264 quality setting where lower means higher quality and larger files. | P11-CH03 | — |
| Shader | A small GPU program; vertex shaders place points, fragment shaders colour pixels. | P12-CH01 | — |
| TSL | Three.js Shading Language: shaders written as JavaScript node graphs and compiled to WGSL or GLSL. | P12-CH03 | — |
