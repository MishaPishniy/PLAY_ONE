import 'dotenv/config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://qauto.forstudy.space',

    httpCredentials: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  
  },
});