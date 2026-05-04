import { test, expect } from '@mobilewright/test';

test('adds a new contact Test', async ({ screen }) => {
  await screen.getByRole('button', { name: 'Add' }).tap();

  await screen.getByTestId('First name').fill('Kranthi');
  await screen.getByTestId('Last name').fill('Test');
  await screen.getByTestId('Company').fill('KranthiCodeLab');

  await screen.getByRole('button', { name: 'Done' }).tap();

  await expect(screen.getByText('Kranthi Test')).toBeVisible();
});
