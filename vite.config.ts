//import vercel from "vite-plugin-vercel";
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { cjsInterop } from 'vite-plugin-cjs-interop';

export default defineConfig({
  ssr: {
    // Add problematic npm packages here:
    // (read more about the issue: The error could be a CJS/ESM issue, see https://vike.dev/broken-npm-package)
    noExternal: ['styled-components'],
  },
  plugins: [
    cjsInterop({
      // Add broken npm package here
      dependencies: [
        // Apply patch to root import:
        //   import someImport from 'some-package'
        '@mdi/react',

        // Apply patch to all sub imports:
        //   import someImport from 'some-package/path'
        //   import someImport from 'some-package/sub/path'
        //   ...
      ],
    }),
    checker({
      // check TypeScript types during development and build
      typescript: true,
    }),
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
