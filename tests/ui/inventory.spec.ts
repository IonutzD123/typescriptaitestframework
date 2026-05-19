import { tags } from '../../config/constants';
import { test, expect } from '../../fixtures/base.fixture';

test(`${tags.ui} ${tags.smoke} logged in user can see inventory page`, async ({
  loggedInPage,
}) => {
  await expect(loggedInPage.locator('.inventory_list')).toBeVisible();
});
