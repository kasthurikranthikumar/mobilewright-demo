import { test, expect } from '@mobilewright/test';
import { execFileSync } from 'child_process';

const DEVICE = 'ZA222RXP4J';
const launch = () => execFileSync('adb', [
  '-s', DEVICE, 'shell', 'am', 'start',
  '-n', 'com.google.android.calculator/com.android.calculator2.Calculator'
], { stdio: 'ignore' });

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

test.beforeEach(async ({ screen }) => {
  launch();
  await sleep(1500);
  await screen.getByLabel('clear').tap();
});

test('2 + 3 = 5', async ({ screen }) => {
  await screen.getByLabel('2').tap();
  await screen.getByLabel('plus').tap();
  await screen.getByLabel('3').tap();
  await screen.getByLabel('equals').tap();
  await expect(screen.getByLabel('No result')).not.toBeVisible();
});

test('9 - 4 = 5', async ({ screen }) => {
  await screen.getByLabel('9').tap();
  await screen.getByLabel('minus').tap();
  await screen.getByLabel('4').tap();
  await screen.getByLabel('equals').tap();
  await expect(screen.getByLabel('No result')).not.toBeVisible();
});

test('6 × 7 = 42', async ({ screen }) => {
  await screen.getByLabel('6').tap();
  await screen.getByLabel('multiply').tap();
  await screen.getByLabel('7').tap();
  await screen.getByLabel('equals').tap();
  await expect(screen.getByLabel('No result')).not.toBeVisible();
});
