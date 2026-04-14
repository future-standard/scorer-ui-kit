import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

/**Updated version with migration guide https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-framework-api */

export default {
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  stories: [
    '../src/stories/Global/*.stories.tsx',
    '../src/stories/**/*.stories.tsx'
  ],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-knobs")],
  viteFinal: async (config) => {
    // Ensure single React instance
    config.resolve = config.resolve || {};
    config.resolve.dedupe = ['react', 'react-dom'];
    // react-router-dom v7 has unguarded process.env.NODE_ENV refs in dev mode
    config.define = {
      ...config.define,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    };
    // Alias legacy @storybook/* packages that addon-knobs still imports.
    // resolve from repo root since the workspace storybook may be a symlink without core/
    const repoRoot = resolve(__dirname, '..', '..', '..');
    const sbCore = resolve(repoRoot, 'node_modules', 'storybook', 'core');
    config.resolve.alias = {
      ...config.resolve.alias,
      '@storybook/preview-api': resolve(sbCore, 'preview-api', 'index.cjs'),
      '@storybook/manager-api': resolve(sbCore, 'manager-api', 'index.cjs'),
      '@storybook/types': resolve(sbCore, 'types', 'index.cjs'),
    };
    return config;
  },
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
