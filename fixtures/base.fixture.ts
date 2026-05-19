import {
  test as base,
  expect,
  Page,
  APIRequestContext,
} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../data/users';

type TestFixtures = {
  loggedInPage: Page;
  api: APIRequestContext;
};

export const test = base.extend<TestFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.assertLoggedIn();

    await use(page);
  },

  api: async ({ request }, use) => {
    await use(request);
  },
});

export { expect };
