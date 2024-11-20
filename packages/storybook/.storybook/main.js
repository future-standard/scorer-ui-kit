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
    // '@mihkeleidast/storybook-addon-source' is a temporary replacement for 'storybook-addon-jsx',
    '@mihkeleidast/storybook-addon-source' /// https://github.com/dhis2/ui/pull/1607
  ]
}