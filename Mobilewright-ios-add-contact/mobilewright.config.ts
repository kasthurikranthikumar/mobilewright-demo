import { defineConfig } from 'mobilewright';

export default defineConfig({
  

  platform: 'ios',
  bundleId: 'com.apple.MobileAddressBook',
  deviceName: /iPhone 17 Pro/,

  testDir: './tests',
  reporter: 'html',
  timeout: 30_000,
});
