import { test, expect } from '@mobilewright/test';

test('search calculator on play store', async ({ screen, device }) => {
  await device.openUrl('market://search?q=calculator&c=apps');
  await expect(screen.getByText('calculator')).toBeVisible();
});
