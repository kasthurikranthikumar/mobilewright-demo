import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',

  platform: 'ios',
  bundleId: 'dev.DemoApp',
  deviceName: /iPhone 17 Pro/,
  installApps: './builds/DemoApp.app',
  timeout: 30_000,
});
