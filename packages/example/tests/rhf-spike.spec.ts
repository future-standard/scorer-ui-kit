import { test, expect } from '@playwright/test';

test('submitting empty form shows both required errors', async ({ page }) => {
  await page.goto('/#/rhf-spike');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('alert').filter({ hasText: 'Name is required' })).toBeVisible();
  await expect(page.getByRole('alert').filter({ hasText: 'Email is required' })).toBeVisible();
});

test('name field aria wiring is correct when invalid', async ({ page }) => {
  await page.goto('/#/rhf-spike');
  await page.getByRole('button', { name: 'Submit' }).click();

  const nameError = page.getByRole('alert').filter({ hasText: 'Name is required' });
  await expect(nameError).toBeVisible();

  const nameInput = page.getByRole('textbox', { name: 'Name' });
  const errorId = await nameError.getAttribute('id');
  const describedBy = await nameInput.getAttribute('aria-describedby');
  expect(describedBy).toBe(errorId);
});

test('submitting with name filled but no colour shows colour required error', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  await page.getByRole('textbox', { name: 'Name' }).fill('Alice');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('alert').filter({ hasText: 'Favourite colour is required' })).toBeVisible();
});

test('selecting a colour after error clears the colour error', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  await page.getByRole('textbox', { name: 'Name' }).fill('Alice');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('alert').filter({ hasText: 'Favourite colour is required' })).toBeVisible();

  await page.getByRole('combobox').selectOption('red');

  await expect(page.getByRole('alert').filter({ hasText: 'Favourite colour is required' })).not.toBeVisible();
});

test('email field aria wiring is correct when invalid', async ({ page }) => {
  await page.goto('/#/rhf-spike');
  await page.getByRole('button', { name: 'Submit' }).click();

  const emailError = page.getByRole('alert').filter({ hasText: 'Email is required' });
  await expect(emailError).toBeVisible();

  const emailInput = page.getByRole('textbox', { name: 'Email' });
  const errorId = await emailError.getAttribute('id');
  const describedBy = await emailInput.getAttribute('aria-describedby');
  expect(describedBy).toBe(errorId);
});

test('valid name and invalid email shows only email format error', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  await page.getByRole('textbox', { name: 'Name' }).fill('Alice');
  await page.getByRole('textbox', { name: 'Email' }).fill('not-an-email');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('alert').filter({ hasText: 'Enter a valid email address' })).toBeVisible();
  await expect(page.getByRole('alert').filter({ hasText: 'Name is required' })).not.toBeVisible();
});

test('radio group renders with visible legend and both options', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  await expect(page.getByText('Mountain or ocean')).toBeVisible();
  await expect(page.getByLabel('Mountain')).toBeVisible();
  await expect(page.getByLabel('Ocean')).toBeVisible();
});

test('selecting a radio option and submitting a valid form raises no error', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  await page.getByRole('textbox', { name: 'Name' }).fill('Alice');
  await page.getByRole('textbox', { name: 'Email' }).fill('alice@example.com');
  await page.getByRole('combobox').selectOption('red');
  await page.getByLabel('Mountain').click();
  await page.getByLabel('Vanilla').click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('alert')).not.toBeVisible();
});

test('radio group can be interacted with via the mouse', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  await page.getByLabel('Mountain').click();
  await expect(page.getByLabel('Mountain')).toBeChecked();

  await page.getByLabel('Ocean').click();
  await expect(page.getByLabel('Ocean')).toBeChecked();
  await expect(page.getByLabel('Mountain')).not.toBeChecked();
});

test('submitting with no flavours checked shows group-level flavour error', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  await page.getByRole('textbox', { name: 'Name' }).fill('Alice');
  await page.getByRole('textbox', { name: 'Email' }).fill('alice@example.com');
  await page.getByRole('combobox').selectOption('red');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('alert').filter({ hasText: 'Pick at least one flavour' })).toBeVisible();
});

test('checking one flavour and submitting valid form shows no flavour error', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  await page.getByRole('textbox', { name: 'Name' }).fill('Alice');
  await page.getByRole('textbox', { name: 'Email' }).fill('alice@example.com');
  await page.getByRole('combobox').selectOption('red');
  await page.getByLabel('Vanilla').click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('alert').filter({ hasText: 'Pick at least one flavour' })).not.toBeVisible();
});

test('happy-path submit records correct payload', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  await page.getByRole('textbox', { name: 'Name' }).fill('Alice');
  await page.getByRole('textbox', { name: 'Email' }).fill('alice@example.com');
  await page.getByRole('combobox').selectOption('red');
  await page.getByLabel('Vanilla').click();
  await page.getByRole('button', { name: 'Submit' }).click();

  const submitted = page.getByTestId('submitted');
  await expect(submitted).toBeVisible();
  const text = await submitted.textContent();
  const payload = JSON.parse(text ?? '{}');
  expect(payload.name).toBe('Alice');
  expect(payload.email).toBe('alice@example.com');
  expect(payload.colour).toBe('red');
  expect(payload.flavours).toEqual(['vanilla']);
});

test('name field shows error on blur after touch without submit', async ({ page }) => {
  await page.goto('/#/rhf-spike');

  await page.getByRole('textbox', { name: 'Name' }).focus();
  await page.getByRole('textbox', { name: 'Name' }).blur();

  await expect(page.getByRole('alert').filter({ hasText: 'Name is required' })).toBeVisible();
});
