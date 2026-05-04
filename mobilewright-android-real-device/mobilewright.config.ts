import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',

  platform: 'android',
 
  deviceName: 'ZA222RXP4J', 
  
  timeout: 60000,
});
