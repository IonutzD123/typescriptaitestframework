import { PostsClient } from '../../clients/PostsClient';
import { tags } from '../../config/constants';
import { expect, test } from '../../fixtures/base.fixture';
import { expectOkResponse, getJsonBody } from '../../utils/apiAssertions';

test(`${tags.api} ${tags.mock} get mocked post from Prism`, async ({ api }) => {
  const postsClient = new PostsClient(api);

  const response = await postsClient.getMockPostById(1);

  await expectOkResponse(response);

  const body = await getJsonBody<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>(response);

  expect(body.id).toBe(1);
  expect(body.title).toBe('mocked title');
});
