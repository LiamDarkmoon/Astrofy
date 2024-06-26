import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vercelServerless from '@astrojs/vercel/serverless';

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react(), auth()],
  output: 'server',
  adapter: vercelServerless({
    maxDuration: 10,
    edgeMiddleware: true,
    imageService: true
  })
});