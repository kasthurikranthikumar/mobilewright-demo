import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,

  platform: 'android',
  deviceId: '45210DLAQ001VZ',

  driver: {
    type: 'mobile-use',
    apiKey: 'mob_BFUb7xHSukbnsmV1EiMHUXtxewk9VLHtzL4m',//https://app.mobilenexthq.com/dashboard/api-keys
  },
 
});
