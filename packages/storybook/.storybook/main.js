/**Updated version with migration guide https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-framework-api */

module.exports = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: { lazyCompilation: true },
    },
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
    'storybook-dark-mode/register',
    'storybook-addon-jsx/register',
  ],
  // This is because of a typescript error that is probably fix in the next version of storybook
  // should try to delete when update
  // https://github.com/styleguidist/react-docgen-typescript/issues/356#issuecomment-857887751
  typescript: {
    reactDocgen: 'react-docgen',
  },

  // Up until version 7.0, it was possible to generate the default export of a CSF story by calling a function, or mixing in variables defined in other ES Modules. For instance:  //
  // To opt-out of the old behavior you can set the storyStoreV7 feature flag to false in main.js.
  features: {
    storyStoreV7: false,
  },
};