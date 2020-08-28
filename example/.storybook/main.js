module.exports = {
  stories: [
    '../src/stories/Global/*.stories.tsx',
    '../src/stories/**/*.stories.tsx'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    'storybook-dark-mode/register'
  ],
};
