import { APIRequestContext } from '@playwright/test';
import { env } from '../config/env';

export class PostsClient {
  constructor(private api: APIRequestContext) {}

  async getPostById(id: number) {
    return this.api.get(`${env.apiBaseUrl}/posts/${id}`);
  }

  async getMockPostById(id: number) {
    return this.api.get(`${env.mockApiUrl}/posts/${id}`);
  }
}
