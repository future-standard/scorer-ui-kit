/**Updated version with migration guide https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-framework-api */

const path = require('path');

module.exports = {
  framework: {
    name: "@storybook/react-webpack5",
  },
  stories: [
    '../src/stories/Global/*.stories.tsx',
    '../src/stories/**/*.stories.tsx'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    'storybook-dark-mode',
  ],
  webpackFinal: async (config) => {
    // Force all react imports to resolve to the single copy in storybook's node_modules
    // to prevent the "Cannot read properties of null (reading 'useState')" dual-React error.
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
    };
    return config;
  },
}
