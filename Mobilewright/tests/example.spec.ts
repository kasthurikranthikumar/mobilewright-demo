// this is a skeleton test for mobilewright (see https://github.com/mobile-next/mobilewright/blob/main/README.md)
// for documentation see: https://mobilewright.dev/docs/
// for agent skill see: https://github.com/mobile-next/mobilewright-skill
import { test, expect } from '@mobilewright/test';
 

test.only('user can register', async ({ screen }) => {

  const username = screen.getByTestId('registerUsername');
  const password = screen.getByTestId('registerPassword');
  const button = screen.getByTestId('registerButton');

  await expect(username).toBeVisible({ timeout: 20000 });
  await username.tap();
  await username.fill('testUser');

  await expect(password).toBeVisible({ timeout: 20000 });
  await password.tap();       
  await password.fill('pass123');

  await button.tap();
 
  const successMessage = screen.getByTestId('successMessage');
  await expect(successMessage).toBeVisible({ timeout: 5000 });

 
}); 