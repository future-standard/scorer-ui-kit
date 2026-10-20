import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

/**Updated version with migration guide https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-framework-api */

export default {
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  stories: ['../src/stories/Global/*.stories.tsx', '../src/stories/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-knobs'),
  ],
  typescript: {
    // react-docgen (the default) cannot resolve prop unions that ui-lib re-exports from '..', so
    // Controls would fall back to free-text inputs. The explicit include is required: the plugin
    // only documents files inside its tsconfig project, and the storybook tsconfig covers ./src only.
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      tsconfigPath: resolve(__dirname, 'tsconfig.docgen.json'),
      include: [
        resolve(__dirname, '../src/**/*.tsx'),
        resolve(__dirname, '../../ui-lib/src/**/*.tsx'),
      ],
    },
  },
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
    const existingAliases = Array.isArray(config.resolve.alias)
      ? config.resolve.alias
      : Object.entries(config.resolve.alias ?? {}).map(([find, replacement]) => ({
          find,
          replacement,
        }));
    config.resolve.alias = [
      // Stories render ui-lib source so that docgen sees the component props. The package's
      // `exports` point at dist, which docgen cannot read; the example app still consumes dist.
      {
        find: /^scorer-ui-kit$/,
        replacement: resolve(repoRoot, 'packages', 'ui-lib', 'src', 'index.tsx'),
      },
      ...existingAliases,
      { find: '@storybook/preview-api', replacement: resolve(sbCore, 'preview-api', 'index.cjs') },
      { find: '@storybook/manager-api', replacement: resolve(sbCore, 'manager-api', 'index.cjs') },
      { find: '@storybook/types', replacement: resolve(sbCore, 'types', 'index.cjs') },
    ];
    return config;
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
