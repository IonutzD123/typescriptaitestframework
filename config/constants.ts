import { mock } from 'node:test';

export const timeouts = {
  short: 5_000,
  medium: 15_000,
  long: 30_000,
};

export const tags = {
  smoke: '@smoke',
  regression: '@regression',
  ui: '@ui',
  api: '@api',
  mock: '@mock',
  schema: '@schema',
  ajv: '@ajv',
  contract: '@contract',
  agent: '@agent',
};
