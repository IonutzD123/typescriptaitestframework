export const env = {
  baseUrl: process.env.BASE_URL || '',
  apiBaseUrl: process.env.API_BASE_URL || '',
  mockApiUrl: process.env.MOCK_API_URL || '',
  isCI: process.env.CI === 'true',
};
