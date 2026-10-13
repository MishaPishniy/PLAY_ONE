import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Test POM' , async ({page}) => {

    const loginPage = new LoginPage(page)

    await loginPage.open()

    await loginPage.enterUsername('standard_user')
    await loginPage.enterPassword('secret_sauce')
    await loginPage.clickLoginButton()

    await expect(page).toHaveURL(/inventory/);

})