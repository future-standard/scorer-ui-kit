import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: false,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return 'index.modern.js';
        return 'index.js';
      },
    },
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-router',
        'react-router-dom',
        'react-use-websocket',
        'styled-components',
        'date-fns',
        'date-fns/locale',
        /^date-fns\//,
        'immutability-helper',
        /^lodash\./,
        '@future-standard/icons',
      ],
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
