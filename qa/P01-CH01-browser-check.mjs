// qa/P01-CH01-browser-check.mjs
// Automated browser checks for chapter P01-CH01. Not part of any learner project.
//
// Needs: Node >= 22.12, `npm i playwright@1.64.1 pngjs@7` in the folder you run it from,
// a Chrome/Chromium binary, and both concept repos built (`npm ci && npm run build` in c02).
//
// Usage:
//   CHROME_PATH=/path/to/chrome C01_DIR=/path/to/threejs-c01-dev-environment-setup \
//   C02_DIR=/path/to/threejs-c02-first-scene-quick-win OUT_DIR=/tmp/p01ch01-shots \
//   node P01-CH01-browser-check.mjs
//
// Each check prints PASS or FAIL. Exit code 1 if any check fails.
// WebGL runs on the CPU (SwiftShader) in headless mode, so frame rate here says nothing about
// real hardware; the checks only look at correctness.

import { spawn } from 'node:child_process';
import { cpSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';

const { CHROME_PATH, C01_DIR, C02_DIR } = process.env;
const OUT_DIR = process.env.OUT_DIR ?? join(tmpdir(), 'p01ch01-shots');
mkdirSync(OUT_DIR, { recursive: true });

const results = [];
const record = (name, pass, detail = '') => {
  results.push({ name, pass, detail });
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);
};

function startServer(cwd, args, port) {
  // detached: the server gets its own process group, so stopServer() can stop npx and Vite together.
  const child = spawn('npx', ['vite', ...args, '--port', String(port), '--strictPort'], { cwd, stdio: 'ignore', detached: true });
  return new Promise((resolve, reject) => {
    const deadline = Date.now() + 30000;
    const poll = async () => {
      try {
        const response = await fetch(`http://localhost:${port}/`);
        if (response.ok) return resolve(child);
      } catch { /* not up yet */ }
      if (Date.now() > deadline) { child.kill(); return reject(new Error(`server on ${port} did not start`)); }
      setTimeout(poll, 300);
    };
    poll();
  });
}

// Fraction of pixels in the central box that differ clearly from the background colour.
function shapeCoverage(buffer, background = [15, 23, 36]) {
  const png = PNG.sync.read(buffer);
  const x0 = Math.floor(png.width * 0.3), x1 = Math.floor(png.width * 0.7);
  const y0 = Math.floor(png.height * 0.25), y1 = Math.floor(png.height * 0.75);
  let different = 0, total = 0;
  for (let y = y0; y < y1; y += 2) {
    for (let x = x0; x < x1; x += 2) {
      const i = (y * png.width + x) * 4;
      const d = Math.abs(png.data[i] - background[0]) + Math.abs(png.data[i + 1] - background[1]) + Math.abs(png.data[i + 2] - background[2]);
      if (d > 60) different += 1;
      total += 1;
    }
  }
  return different / total;
}

function pixelDifference(a, b) {
  const pa = PNG.sync.read(a), pb = PNG.sync.read(b);
  if (pa.width !== pb.width || pa.height !== pb.height) return 1;
  let changed = 0;
  for (let i = 0; i < pa.data.length; i += 4) {
    if (pa.data[i] !== pb.data[i] || pa.data[i + 1] !== pb.data[i + 1] || pa.data[i + 2] !== pb.data[i + 2]) changed += 1;
  }
  return changed / (pa.data.length / 4);
}

function watch(page) {
  const log = { errors: [], warnings: [], pageErrors: [], failedRequests: [] };
  page.on('console', (m) => {
    if (m.type() === 'error') log.errors.push(`${m.text()} ${m.location()?.url ?? ''}`.trim());
    if (m.type() === 'warning') log.warnings.push(m.text());
  });
  page.on('pageerror', (e) => log.pageErrors.push(e.message));
  page.on('requestfailed', (r) => log.failedRequests.push(r.url()));
  page.on('response', (r) => { if (r.status() >= 400) log.failedRequests.push(`${r.status()} ${r.url()}`); });
  return log;
}

const browser = await chromium.launch({
  executablePath: CHROME_PATH,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const servers = [];

try {
  // ---------- C02: production build served by `vite preview` ----------
  servers.push(await startServer(C02_DIR, ['preview'], 4173));
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();
  const log = watch(page);
  await page.goto('http://localhost:4173/');
  await page.waitForTimeout(2500);

  const info = await page.evaluate(() => ({
    webgl2: !!document.createElement('canvas').getContext('webgl2'),
    canvasCss: [document.querySelector('#scene').clientWidth, document.querySelector('#scene').clientHeight],
    canvasPixels: [document.querySelector('#scene').width, document.querySelector('#scene').height],
    dpr: window.devicePixelRatio,
    caption: document.querySelector('#caption').textContent,
    captionHidden: document.querySelector('#caption').hidden,
    button: document.querySelector('#toggle-motion').textContent,
    problemHidden: document.querySelector('#problem').hidden,
  }));
  record('C02 page loads with no console errors, page errors or failed requests',
    log.errors.length + log.pageErrors.length + log.failedRequests.length === 0,
    JSON.stringify({ errors: log.errors, pageErrors: log.pageErrors, failed: log.failedRequests }));
  record('C02 no Three.js warnings in the console', log.warnings.length === 0, JSON.stringify(log.warnings));
  record('C02 error panel stays hidden with the shipped config', info.problemHidden === true);
  record('C02 canvas fills the 1280x720 window', info.canvasCss[0] === 1280 && info.canvasCss[1] === 720, JSON.stringify(info));
  record('C02 caption shows the configured text', info.caption === 'My first 3D scene' && !info.captionHidden, info.caption);
  record('C02 pause button starts as "Pause motion"', info.button === 'Pause motion', info.button);

  const shotA = await page.screenshot({ path: join(OUT_DIR, 'c02-desktop.png') });
  const coverage = shapeCoverage(shotA);
  record('C02 the shape is drawn in the centre (not a blank canvas)', coverage > 0.08, `coverage ${(coverage * 100).toFixed(1)}%`);
  await page.waitForTimeout(700);
  const shotB = await page.screenshot();
  record('C02 the shape moves while playing', pixelDifference(shotA, shotB) > 0.005, `${(pixelDifference(shotA, shotB) * 100).toFixed(2)}% pixels changed`);

  // Keyboard: Tab to the button and press Enter to pause.
  await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => document.activeElement?.id);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(300);
  const label = await page.textContent('#toggle-motion');
  record('C02 keyboard: Tab focuses the button, Enter pauses', focused === 'toggle-motion' && label === 'Play motion', `${focused}, ${label}`);
  const pausedA = await page.screenshot();
  await page.waitForTimeout(700);
  const pausedB = await page.screenshot();
  record('C02 nothing moves while paused', pixelDifference(pausedA, pausedB) === 0, `${(pixelDifference(pausedA, pausedB) * 100).toFixed(3)}% pixels changed`);

  // Resize the window.
  await page.setViewportSize({ width: 800, height: 600 });
  await page.waitForTimeout(400);
  const resized = await page.evaluate(() => [document.querySelector('#scene').clientWidth, document.querySelector('#scene').clientHeight]);
  record('C02 canvas follows a window resize to 800x600', resized[0] === 800 && resized[1] === 600, JSON.stringify(resized));
  await context.close();

  // Phone-sized window at device pixel ratio 3 (checks the pixel-ratio cap of 2).
  const phone = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 });
  const phonePage = await phone.newPage();
  await phonePage.goto('http://localhost:4173/');
  await phonePage.waitForTimeout(2000);
  const phoneInfo = await phonePage.evaluate(() => [document.querySelector('#scene').width, document.querySelector('#scene').height]);
  await phonePage.screenshot({ path: join(OUT_DIR, 'c02-phone.png') });
  record('C02 pixel ratio is capped at 2 on a 3x screen', phoneInfo[0] === 780 && phoneInfo[1] === 1688, JSON.stringify(phoneInfo));
  await phone.close();

  // Reduced motion: starts paused.
  const calm = await browser.newContext({ viewport: { width: 1280, height: 720 }, reducedMotion: 'reduce' });
  const calmPage = await calm.newPage();
  await calmPage.goto('http://localhost:4173/');
  await calmPage.waitForTimeout(2000);
  const calmLabel = await calmPage.textContent('#toggle-motion');
  const calmA = await calmPage.screenshot();
  await calmPage.waitForTimeout(700);
  const calmB = await calmPage.screenshot();
  record('C02 reduced-motion setting: starts paused and still', calmLabel === 'Play motion' && pixelDifference(calmA, calmB) === 0, calmLabel);
  await calm.close();

  // ---------- C02: a broken config shows the friendly error panel (dev server on a copy) ----------
  const copy = join(tmpdir(), 'p01ch01-broken-config');
  rmSync(copy, { recursive: true, force: true });
  cpSync(C02_DIR, copy, { recursive: true, filter: (p) => !p.includes(`${'/'}dist`) });
  const configPath = join(copy, 'src', 'config.js');
  writeFileSync(configPath, readFileSync(configPath, 'utf8').replace('turnsPerMinute: 10', "turnPerMinute: '10'"));
  servers.push(await startServer(copy, [], 5174));
  const broken = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const brokenPage = await broken.newPage();
  const brokenLog = watch(brokenPage);
  await brokenPage.goto('http://localhost:5174/');
  await brokenPage.waitForTimeout(2500);
  const panel = await brokenPage.evaluate(() => ({ hidden: document.querySelector('#problem').hidden, text: document.querySelector('#problem').textContent }));
  await brokenPage.screenshot({ path: join(OUT_DIR, 'c02-broken-config.png') });
  record('C02 typo in config.js shows the problem panel with a suggestion',
    !panel.hidden && panel.text.includes('Did you mean "turnsPerMinute"?') && panel.text.includes('"turnsPerMinute" is missing.'),
    panel.text.split('\n')[1]);
  record('C02 the same problem is logged to the Console', brokenLog.errors.some((e) => e.includes('Problem in src/config.js')));
  await broken.close();

  // ---------- C01: DevTools practice page opened straight from disk ----------
  const practice = await browser.newContext();
  const practicePage = await practice.newPage();
  const practiceLog = { logs: [], pageErrors: [] };
  practicePage.on('console', (m) => practiceLog.logs.push(`${m.type()}: ${m.text()}`));
  practicePage.on('pageerror', (e) => practiceLog.pageErrors.push(e));
  await practicePage.goto(pathToFileURL(join(C01_DIR, 'devtools-practice', 'index.html')).href);
  await practicePage.waitForTimeout(500);
  record('C01 practice page works from file:// and logs its messages',
    practiceLog.logs.some((l) => l.startsWith('log: Hello from practice.js')) && practiceLog.logs.some((l) => l.startsWith('warning:')),
    `${practiceLog.logs.length} messages`);
  await practicePage.click('#ok-button');
  const okText = await practicePage.textContent('#output');
  record('C01 the "3 objects" button works', okText === 'The scene has 3 objects.', okText);
  await practicePage.click('#error-button');
  await practicePage.waitForTimeout(300);
  const thrown = practiceLog.pageErrors[0];
  record('C01 the practice error appears with its message and file name',
    !!thrown && thrown.message.includes('describeScene expected a number') && /practice\.js:\d+/.test(thrown.stack ?? ''),
    thrown ? (thrown.stack ?? '').split('\n').slice(0, 2).join(' | ') : 'no error');
  await practicePage.screenshot({ path: join(OUT_DIR, 'c01-devtools-practice.png'), fullPage: true });
  await practice.close();
} finally {
  await browser.close();
  for (const server of servers) {
    try { process.kill(-server.pid, 'SIGTERM'); } catch { /* already stopped */ }
  }
}

const failed = results.filter((r) => !r.pass).length;
console.log(`\n${results.length - failed} passed, ${failed} failed. Screenshots in ${OUT_DIR}`);
writeFileSync(join(OUT_DIR, 'results.json'), JSON.stringify(results, null, 2));
process.exitCode = failed ? 1 : 0;
