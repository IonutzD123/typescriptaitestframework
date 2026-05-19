import { tags } from '../../config/constants';
import { test, expect } from '../../fixtures/base.fixture';

test(`${tags.ui} ${tags.smoke} login successfully`, async ({
  loggedInPage,
}) => {
  await expect(loggedInPage).toHaveURL(/inventory/);

  await expect(loggedInPage.getByText('Products')).toBeVisible();
});
