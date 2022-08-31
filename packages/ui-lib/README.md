# SCORER UI KIT LIBRARY

  SCORER UI KIT is a UI components library created in react for faster web applications development.

## Version 2

  Our default branch is Version 2 release but we keep a legacy branch available.
  This version provides dark mode, the newest components and tools as well as been up to date with npm dependencies.

  You can review online a React project example and test some of the components on storybook in the live page

  https://future-standard.github.io/scorer-ui-kit



## Development

If you want to run the project follow the next steps

- Clone repository
```
  git clone git@github.com:future-standard/scorer-ui-kit.git
```

- Install with npm version 8 node 16 or above from the root folder
```
  npm install
```

- Use npm dedupe to fix react-refresh difference between Storybook and Example project
```
  npm dedupe
```

- If you want to run the example project, run library workspace first and then the example workspace in a different terminal

```
  // Terminal 1

  npm start --workspace=packages/ui-lib
```

```
  // Terminal 2

  npm start --workspace=packages/example
```

- If you want to run the storybook

```
  // Terminal 3

  npm start --workspace=packages/storybook
```

## Enabling Dark and Light theme in your project
  You can read an example about how to configure dark and light theme in the Dark [Light Mode Usage document](../../dark_light_mode_usage.md)

### Contributing

This is an open source project, if you are interested in participating please contact [@atomworks](https://github.com/atomworks) or [@JoshLipps](https://github.com/JoshLipps).

Theres a list of issues and we recommend to pick one of the tagged Quick Wins as starter.

You can make a branch out the main, we don't have a strong preference in the naming of the branch but when submitting these changes please review the PR template.


## Icons

The icons used in this UI Kit are licensed from [Streamline Icons](https://streamlineicons.com/). We are able to provide a limited set in this kit with as per our license agreement. If you wish to extend the icons included in this kit yourself, we highly recommend checking those out if you want to keep a consistent style.

We tend to use the regular weighted icons and process them first to ungroup them. Then we use the above command to process them for inclusion in the UI Kit.


## Image Credits

Some stock photos were used as placeholders in this UI Kit. These were sourced through Unsplash.com and we give credit for the following photographs and their photographers.

Photo by [Van Thanh](https://unsplash.com/@vanthanh2608?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/cafe?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)


## License

The Scorer UI Kit is released under the [MIT license](../../LICENSE.md).

Please note however that the icon set included in this software is included under license and remains property of Webalys LLC. These icons can be used only in the context of this open source project. For more information regarding this license, see [Streamline Icons Premium License](https://help.streamlineicons.com/license-premium).

## Release
1. Update the version in package.json in this ui-lib folder and commit it. (this can done on a branch and then merged)
2. Add a release tag with the following format: vXX.XX.XX or vXX.XX.XX-beta.x(for beta) - this should match the package.json version
3. Push the tag to Github (this should cause the release)

```
// Updating to v1.5.2

  git commit -m "Bump 1.5.2"
  grep version package.json
  ~  "version": "1.5.2",
  git tag v1.5.2
  git push origin v1.5.2
```

