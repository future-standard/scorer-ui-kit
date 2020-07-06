module.exports = {
  stories: [
    // '../src/stories/Forms/*.stories.js',
    '../src/stories/**/*.stories.js'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    // 'storybook-addon-styled-component-theme/dist/register',
    '@storybook/addon-knobs/register'
  ],
};
