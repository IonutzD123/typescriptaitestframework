import path from 'path';
import { test, expect } from '@playwright/test';
import { MatchersV3, PactV3 } from '@pact-foundation/pact';
import { tags } from '../../config/constants';

const provider = new PactV3({
  consumer: 'PlaywrightConsumer',
  provider: 'JsonPlaceholderProvider',
  dir: path.resolve(process.cwd(), 'pacts'),
});

const { like } = MatchersV3;

test(`${tags.contract} posts API contract`, async () => {
  provider
    .given('post with ID 1 exists')
    .uponReceiving('a request for post 1')
    .withRequest({
      method: 'GET',
      path: '/posts/1',
    })
    .willRespondWith({
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        userId: like(1),
        id: like(1),
        title: like('example title'),
        body: like('example body'),
      },
    });

  await provider.executeTest(async (mockServer) => {
    const response = await fetch(`${mockServer.url}/posts/1`);

    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.id).toBe(1);
  });
});
