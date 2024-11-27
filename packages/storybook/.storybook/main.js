/**Updated version with migration guide https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-framework-api */

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
    'storybook-addon-jsx/register',
  ]
}