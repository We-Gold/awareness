import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch";
import fonts from 'astro-fonts-next'

// https://astro.build/config
export default defineConfig({
  site: "https://We-Gold.github.io",
  base: "/awareness",
  integrations: [
    fonts({ url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap' }),
    prefetch(), 
  ],
  experimental: {
    integrations: true,
  },
});