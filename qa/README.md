# qa/

Automated checks the course uses to test chapters. They are not part of any learner project and need extra tools (Playwright and a Chrome/Chromium binary), so learners can ignore this folder.

| Script | Chapter | What it checks |
|---|---|---|
| `P01-CH01-browser-check.mjs` | P01-CH01 | 18 browser checks across C01 and C02: clean Console, shape drawn and moving, keyboard pause, reduced motion, resize, pixel-ratio cap, config-error panel, DevTools practice page and its error location. Writes screenshots and `results.json`. |

Run instructions are in the header comment of each script. Results from each run are recorded in the concept repositories' `TEST_REPORT.md`.
