#!/usr/bin/env node
// Sweeps every storybook story + example app route in headless chromium,
// records console.error / pageerror / goto-timeout / runaway-console-volume
// per page. Filters favicon 404s. Loop detection signals: page-load timeout,
// "Maximum update depth", or excessive console message count.

import { chromium } from 'playwright';

const STORYBOOK = process.env.STORYBOOK_URL || 'http://localhost:9009';
const EXAMPLE = process.env.EXAMPLE_URL || 'http://localhost:3000/scorer-ui-kit';
const CHROME = process.env.PW_CHROMIUM_PATH || '/usr/bin/chromium';
const PAGE_TIMEOUT = Number(process.env.PAGE_TIMEOUT_MS || 15000);
const SETTLE_MS = Number(process.env.SETTLE_MS || 500);
const LOOP_THRESHOLD = Number(process.env.LOOP_THRESHOLD || 500);

const stories = await fetch(`${STORYBOOK}/index.json`)
  .then((r) => r.json())
  .catch((e) => {
    console.error(`Could not fetch ${STORYBOOK}/index.json — is storybook running? (${e.message})`);
    process.exit(1);
  });
const storyIds = Object.keys(stories.entries);

const exampleRoutes = [
  '/',
  '/line',
  '/linevideo',
  '/linehls',
  '/linertc',
  '/login',
  '/forms',
  '/table',
  '/customdrawer',
  '/tabs',
  '/customalert',
  '/globalUI',
  '/layouts',
  '/split-layouts',
  '/switch-test',
  '/usepoll-test',
  '/webrtc-strictmode-test',
];

const targets = [
  ...storyIds.map((id) => ({
    kind: 'story',
    id,
    url: `${STORYBOOK}/iframe.html?id=${id}&viewMode=story`,
  })),
  ...exampleRoutes.map((r) => ({ kind: 'example', id: r, url: `${EXAMPLE}/#${r}` })),
];

console.error(
  `Sweeping ${targets.length} pages (${storyIds.length} stories + ${exampleRoutes.length} example routes)...`
);

const browser = await chromium.launch({ executablePath: CHROME });
const ctx = await browser.newContext();
const page = await ctx.newPage();

const results = [];
let i = 0;
for (const t of targets) {
  i++;
  const errors = [];
  let consoleCount = 0;
  const onConsole = (m) => {
    consoleCount++;
    if (m.type() === 'error') errors.push(`console.error: ${m.text()}`);
  };
  const onErr = (e) => errors.push(`pageerror: ${e.message}`);
  page.on('console', onConsole);
  page.on('pageerror', onErr);
  let timedOut = false;
  try {
    await page.goto(t.url, { waitUntil: 'networkidle', timeout: PAGE_TIMEOUT });
  } catch (e) {
    timedOut = true;
    errors.push(`goto-timeout: ${e.message.split('\n')[0]}`);
  }
  await page.waitForTimeout(SETTLE_MS);
  page.off('console', onConsole);
  page.off('pageerror', onErr);

  const filtered = errors.filter(
    (e) =>
      !e.includes('favicon') &&
      !/Failed to load resource: the server responded with a status of 404/.test(e)
  );
  const result = { ...t, errors: filtered, consoleCount, timedOut };
  results.push(result);
  const flag = result.errors.length > 0 ? 'X' : result.consoleCount > LOOP_THRESHOLD ? '!' : '.';
  process.stderr.write(`${flag}${i % 10 === 0 ? ` ${i}/${targets.length}\n` : ''}`);
}
process.stderr.write('\n');

await browser.close();

const bad = results.filter(
  (r) => r.errors.length > 0 || r.consoleCount > LOOP_THRESHOLD || r.timedOut
);
console.info(
  JSON.stringify(
    {
      total: results.length,
      withErrors: results.filter((r) => r.errors.length > 0).length,
      timedOut: results.filter((r) => r.timedOut).map((r) => r.id),
      loopSuspect: results
        .filter((r) => r.consoleCount > LOOP_THRESHOLD)
        .map((r) => ({ id: r.id, consoleCount: r.consoleCount })),
      bad,
    },
    null,
    2
  )
);

if (bad.length > 0) process.exit(1);
