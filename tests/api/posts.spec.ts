import { tags } from '../../config/constants';
import { test, expect } from '../../fixtures/base.fixture';
import { postSchema } from '../../schemas/post.schema';
import { PostsClient } from '../../clients/PostsClient';
import { expectOkResponse, getJsonBody } from '../../utils/apiAssertions';

test(`${tags.api} ${tags.schema} get post by id and validate schema`, async ({
  api,
}) => {
  const postsClient = new PostsClient(api);

  const response = await postsClient.getPostById(1);

  await expectOkResponse(response);

  const body = await getJsonBody(response);

  const parsed = postSchema.parse(body);

  expect(parsed.id).toBe(1);
});
