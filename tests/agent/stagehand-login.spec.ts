import { test, expect } from '@playwright/test';
import { Stagehand } from '@browserbasehq/stagehand';
import { tags } from '../../config/constants';
import { env } from '../../config/env';

test(`${tags.agent} AI login flow`, async () => {
  const stagehand = new Stagehand({
    env: 'LOCAL',
  });

  await stagehand.init();

  const page = stagehand.context.pages()[0];

  await page.goto(env.baseUrl);

  await stagehand.act(
    'Log into the application with username standard_user and password secret_sauce'
  );

  expect(page.url()).toContain('/inventory');

  const productsVisible = await page.locator('text=Products').isVisible();

  expect(productsVisible).toBeTruthy();

  await stagehand.close();
});
