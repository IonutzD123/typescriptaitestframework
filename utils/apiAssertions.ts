import { expect, APIResponse } from '@playwright/test';

export async function expectOkResponse(response: APIResponse) {
  expect(response.ok()).toBeTruthy();
}

export async function expectStatus(response: APIResponse, status: number) {
  expect(response.status()).toBe(status);
}

export async function getJsonBody<T>(response: APIResponse): Promise<T> {
  return response.json() as Promise<T>;
}
