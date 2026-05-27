import { defineConfig, devices } from '@playwright/test';

// Uses a non-default port so it never reuses an unrelated dev server that happens to be on :3000.
const TEST_PORT = 3101;

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: `http://localhost:${TEST_PORT}`,
  },
  webServer: {
    command: `npm start -- --port ${TEST_PORT}`,
    url: `http://localhost:${TEST_PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: { VITE_BASE_PATH: '/' },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
