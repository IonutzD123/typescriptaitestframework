import { test, expect } from '../../fixtures/base.fixture';
import Ajv from 'ajv';
import postJsonSchema from '../../schemas/post.json';
import { tags } from '../../config/constants';
import { PostsClient } from '../../clients/PostsClient';
import { expectOkResponse, getJsonBody } from '../../utils/apiAssertions';

test(`${tags.api} ${tags.ajv} get post by id and validate JSON schema with AJV`, async ({
  api,
}) => {
  const postsClient = new PostsClient(api);

  const response = await postsClient.getPostById(1);

  await expectOkResponse(response);

  const body = await getJsonBody(response);

  const ajv = new Ajv();
  const validate = ajv.compile(postJsonSchema);

  expect(validate(body)).toBeTruthy();
});
