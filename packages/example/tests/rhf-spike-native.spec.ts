import { expect, test } from '@playwright/test';

test('submitting empty native form shows required errors', async ({ page }) => {
  await page.goto('/#/rhf-spike-native');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('alert').filter({ hasText: 'Name is required' })).toBeVisible();
  await expect(
    page.getByRole('alert').filter({ hasText: 'Favourite colour is required' })
  ).toBeVisible();
  await expect(page.getByRole('alert').filter({ hasText: 'Email is required' })).toBeVisible();
});

test('native name field aria wiring is correct when invalid', async ({ page }) => {
  await page.goto('/#/rhf-spike-native');
  await page.getByRole('button', { name: 'Submit' }).click();

  const nameError = page.getByRole('alert').filter({ hasText: 'Name is required' });
  await expect(nameError).toBeVisible();

  const nameInput = page.getByRole('textbox', { name: 'Name' });
  const errorId = await nameError.getAttribute('id');
  const describedBy = await nameInput.getAttribute('aria-describedby');
  expect(describedBy).toBe(errorId);
  await expect(nameInput).toHaveAttribute('aria-invalid', 'true');
});

test('native select field aria wiring is correct when invalid', async ({ page }) => {
  await page.goto('/#/rhf-spike-native');
  await page.getByRole('button', { name: 'Submit' }).click();

  const colourError = page.getByRole('alert').filter({ hasText: 'Favourite colour is required' });
  await expect(colourError).toBeVisible();

  const select = page.getByRole('combobox');
  const errorId = await colourError.getAttribute('id');
  const describedBy = await select.getAttribute('aria-describedby');
  expect(describedBy).toBe(errorId);
  await expect(select).toHaveAttribute('aria-invalid', 'true');
});

test('native email field shows hint until an error replaces it', async ({ page }) => {
  await page.goto('/#/rhf-spike-native');

  await expect(page.getByText('We never share your email.')).toBeVisible();

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('We never share your email.')).not.toBeVisible();
  await expect(page.getByRole('alert').filter({ hasText: 'Email is required' })).toBeVisible();
});

test('native email field validates pattern', async ({ page }) => {
  await page.goto('/#/rhf-spike-native');

  await page.getByRole('textbox', { name: 'Name' }).fill('Alice');
  await page.getByRole('textbox', { name: 'Email' }).fill('not-an-email');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(
    page.getByRole('alert').filter({ hasText: 'Enter a valid email address' })
  ).toBeVisible();
});

test('native happy-path submit records correct payload', async ({ page }) => {
  await page.goto('/#/rhf-spike-native');

  await page.getByRole('textbox', { name: 'Name' }).fill('Alice');
  await page.getByRole('combobox').selectOption('green');
  await page.getByRole('textbox', { name: 'Email' }).fill('alice@example.com');
  await page.getByRole('button', { name: 'Submit' }).click();

  const submitted = page.getByTestId('submitted');
  await expect(submitted).toBeVisible();
  const text = await submitted.textContent();
  const payload = JSON.parse(text ?? '{}');
  expect(payload.name).toBe('Alice');
  expect(payload.colour).toBe('green');
  expect(payload.email).toBe('alice@example.com');
});

test('native name field shows error on blur after touch without submit', async ({ page }) => {
  await page.goto('/#/rhf-spike-native');

  await page.getByRole('textbox', { name: 'Name' }).focus();
  await page.getByRole('textbox', { name: 'Name' }).blur();

  await expect(page.getByRole('alert').filter({ hasText: 'Name is required' })).toBeVisible();
});

test('native catalog entry links to the page', async ({ page }) => {
  await page.goto('/#/');

  const link = page.getByRole('link', { name: /React Hook Form \(Native\)/ });
  await expect(link).toBeVisible();
  await link.click();

  await expect(page.getByRole('heading', { name: 'React Hook Form (Native)' })).toBeVisible();
});
