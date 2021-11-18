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
    'storybook-dark-mode/register',
    'storybook-addon-jsx/register',
  ],
  // This is because of a typescript error that is probably fix in the next version of storybook
  // should try to delete when update
  // https://github.com/styleguidist/react-docgen-typescript/issues/356#issuecomment-857887751
  typescript: {
    reactDocgen: 'react-docgen',
  }
};
