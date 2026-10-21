import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(() => {
  const isWatch = process.argv.includes('--watch');
  const skipDts = isWatch || process.env.SKIP_DTS === 'true';
  return {
    plugins: [
      react(),
      ...(skipDts
        ? []
        : [
            dts({
              tsconfigPath: './tsconfig.build.json',
            }),
          ]),
    ],
    build: {
      // The watch build empties dist on every start; the example dev server then caches the
      // missing chunk and keeps failing to resolve it until its cache is cleared.
      emptyOutDir: !isWatch,
      lib: {
        entry: {
          index: resolve(import.meta.dirname, 'src/index.tsx'),
          hls: resolve(import.meta.dirname, 'src/LineUIHls/index.ts'),
        },
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => {
          if (format === 'es') return `${entryName}.modern.js`;
          return `${entryName}.js`;
        },
      },
      sourcemap: true,
      minify: false,
      rolldownOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'react-router',
          'react-router-dom',
          'styled-components',
          'date-fns',
          'date-fns/locale',
          /^date-fns\//,
          'immutability-helper',
          /^lodash\./,
          '@future-standard/icons',
          'hls.js',
        ],
        output: {
          assetFileNames: 'assets/[name][extname]',
        },
      },
    },
  };
});
