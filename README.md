# scorer-ui-kit

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm ci # if you are missing or need to update node modules
npm start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm ci # if you are missing or need to update node modules
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

### SVGs

To compile SVGs..

```bash
#npm run svgr
cd ./src
npx @svgr/cli ./Icons/stroked/svg --svgo-config '{"plugins": [{"removeViewBox": false}]}' --out-dir ./Icons/stroked/ --template ./Icons/stroked/SVGRTemplate.js --typescript
```


## Icons

The icons used in this UI Kit are licensed from [Streamline Icons](https://streamlineicons.com/). We are able to provide a limited set in this kit with as per our license agreement. If you wish to extend the icons included in this kit yourself, we highly recommend checking those out if you want to keep a consistent style.

We tend to use the regular weighted icons and process them first to ungroup them. Then we use the above command to process them for inclusion in the UI Kit.


## Image Credits

Some stock photos were used as placeholders in this UI Kit. These were sourced through Unsplash.com and we give credit for the following photographs and their photographers.

Photo by [Van Thanh](https://unsplash.com/@vanthanh2608?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/cafe?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)


## License

The Scorer UI Kit is released under the MIT license.

Please note however that the icon set included in this software is included under license and remains property of Webalys LLC. These icons can be used only in the context of this open source project. For more information regarding this license, see [Streamline Icons Premium License](https://help.streamlineicons.com/license-premium).

## Release
1. Update the version in package.json and commit it. (this can done on a branch and then merged)
2. Add a release tag with the following format: vXX.XX.XX or vXX.XX.XX-beta.x(for beta) - this should match the package.json version
3. Push the tag to Github (this should cause the release)

```
git commit -m "Bump 1.5.2"
grep version package.json
#  "version": "1.5.2",
git tag v1.5.2
git push origin v1.5.2
```
