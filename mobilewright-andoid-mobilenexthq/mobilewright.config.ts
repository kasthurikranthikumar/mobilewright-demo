import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,

  platform: 'android',
  deviceId: '4A081FDAQ000J5',

  driver: {
    type: 'mobile-use',
    apiKey: 'mob_Ck8rdGERTFH6rPRJpZJAbWaNRkRsuSY843Jv',//https://app.mobilenexthq.com/dashboard/api-keys
  },
 
});
