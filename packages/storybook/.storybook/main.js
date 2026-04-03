const {
  dirname,
  join
} = require("node:path");

/**Updated version with migration guide https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-framework-api */

module.exports = {
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
    const { resolve } = require('node:path');
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
