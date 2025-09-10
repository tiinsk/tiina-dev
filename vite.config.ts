//import vercel from "vite-plugin-vercel";
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    // Add problematic npm packages here:
    // (read more about the issue: The error could be a CJS/ESM issue, see https://vike.dev/broken-npm-package)
    noExternal: ['styled-components'],
  },
  plugins: [
    vike(),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              fileName: false,
            },
          ],
        ],
      },
    }) /*vercel()*/,
  ],
  build: {
    target: 'es2022',
  },
});
