/**Updated version with migration guide https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-framework-api */

module.exports = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: [
    '../src/stories/Global/*.stories.tsx',
    '../src/stories/**/*.stories.tsx'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    'storybook-dark-mode',
  ],
  viteFinal: async (config) => {
    // Ensure single React instance
    config.resolve = config.resolve || {};
    config.resolve.dedupe = ['react', 'react-dom'];
    return config;
  },
}
