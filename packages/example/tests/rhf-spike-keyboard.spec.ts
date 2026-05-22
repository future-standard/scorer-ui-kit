import { test, expect } from '@playwright/test';

// Tab order in the DOM:
// Name → Colour select → Email → Radio group (Mountain/Ocean) → Checkboxes → Submit
// No page.click() or page.fill() — keyboard-only interactions throughout.

test('keyboard-only: full form submission using tab, arrows, space, and enter', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  // Focus Name field
  await page.keyboard.press('Tab');
  await page.keyboard.type('Alice');

  // Focus Colour select; ArrowDown moves from placeholder to first real option (Red)
  await page.keyboard.press('Tab');
  await page.keyboard.press('ArrowDown');

  // Focus Email field
  await page.keyboard.press('Tab');
  await page.keyboard.type('alice@example.com');

  // Tab into radio group — Mountain gets focus (none checked yet)
  // ArrowDown moves to Ocean and checks it (standard browser radio-group navigation)
  await page.keyboard.press('Tab');
  await page.keyboard.press('ArrowDown');

  // Tab exits the checked-radio's group; Vanilla checkbox gets focus
  await page.keyboard.press('Tab');
  await page.keyboard.press('Space');

  // Tab past Chocolate and Strawberry checkboxes, then reach Submit
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');

  // Submit via Enter
  await page.keyboard.press('Enter');

  const submitted = page.getByTestId('submitted');
  await expect(submitted).toBeVisible();

  const text = await submitted.textContent();
  const payload = JSON.parse(text ?? '{}');
  expect(payload.name).toBe('Alice');
  expect(payload.email).toBe('alice@example.com');
  expect(payload.colour).toBe('red');
  expect(payload.preference).toBe('ocean');
  expect(payload.flavours).toContain('vanilla');
});
