#!/usr/bin/env node
// Sweeps every storybook story + example app route in headless chromium,
// records console.error / pageerror / goto-timeout / runaway-console-volume
// per page. Filters favicon 404s. Loop detection signals: page-load timeout,
// "Maximum update depth", or excessive console message count.

import { chromium } from 'playwright';

const STORYBOOK = process.env.STORYBOOK_URL || 'http://localhost:9009';
const EXAMPLE = process.env.EXAMPLE_URL || 'http://localhost:3000/scorer-ui-kit';
// PW_CHROMIUM_PATH semantics:
//   unset → try installed Google Chrome via Playwright's channel resolution,
//           fall back to bundled chromium if Chrome isn't installed
//   ""    → bundled chromium (CI default — pre-installed via `playwright install`)
//   path  → that exact binary
async function launchChromium() {
  const explicit = process.env.PW_CHROMIUM_PATH;
  if (explicit !== undefined) {
    return chromium.launch(explicit ? { executablePath: explicit } : {});
  }
  try {
    return await chromium.launch({ channel: 'chrome' });
  } catch {
    return chromium.launch();
  }
}
const PAGE_TIMEOUT = Number(process.env.PAGE_TIMEOUT_MS || 15000);
const SETTLE_MS = Number(process.env.SETTLE_MS || 500);
const LOOP_THRESHOLD = Number(process.env.LOOP_THRESHOLD || 500);

// The CI sweep targets a freshly-deployed GitHub Pages preview whose edge-CDN
// propagation can lag the deploy push by a minute or two. Retry the index.json
// fetch so a not-yet-served preview doesn't abort with empty stdout (which would
// make the CI consumer `JSON.parse('')` and fail with a cryptic error). Patient
// in CI; fast-fail locally so a typo'd URL / down storybook surfaces quickly.
const isCI = !!process.env.CI;
const INDEX_TRIES = Number(process.env.INDEX_FETCH_TRIES || (isCI ? 18 : 3));
const INDEX_DELAY_MS = Number(process.env.INDEX_FETCH_DELAY_MS || (isCI ? 10000 : 1500));

async function fetchStoryIndex(url) {
  for (let i = 0; i < INDEX_TRIES; i++) {
    try {
      const r = await fetch(url);
      if (r.ok) return await r.json();
      // fetch() does not reject on 404 — a not-yet-served preview lands here.
      console.error(`  ${url} → HTTP ${r.status} (try ${i + 1}/${INDEX_TRIES})`);
    } catch (e) {
      console.error(`  ${url} → ${e.message} (try ${i + 1}/${INDEX_TRIES})`);
    }
    if (i < INDEX_TRIES - 1) await new Promise((s) => setTimeout(s, INDEX_DELAY_MS));
  }
  return null;
}

const stories = await fetchStoryIndex(`${STORYBOOK}/index.json`);
if (!stories?.entries) {
  const msg = `Could not fetch ${STORYBOOK}/index.json after ${INDEX_TRIES} tries — is storybook running / preview served?`;
  console.error(msg);
  // Emit a VALID result carrying a failing entry: the CI consumer never parses
  // empty stdout, and the existing `.bad != 0` gate still fails the job (red,
  // not a false-green "0 pages swept").
  console.info(
    JSON.stringify(
      {
        total: 0,
        withErrors: 0,
        timedOut: [],
        loopSuspect: [],
        bad: [
          {
            id: 'storybook-index.json',
            kind: 'setup',
            errors: [msg],
            consoleCount: 0,
            timedOut: false,
          },
        ],
      },
      null,
      2
    )
  );
  process.exit(1);
}
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

const browser = await launchChromium();
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
