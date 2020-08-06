# scorer-ui-kit

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

### SVGs

To compile SVGs..

```bash
#npm run svgr
cd ./src
npx @svgr/cli ./Icons/stroked/svg --out-dir ./Icons/stroked/ --template ./Icons/stroked/SVGRtemplate.js --typescript
```

## Image Credits

Some stock photos were used as placeholders in this UI Kit. These were sourced through Unsplash.com and we give credit for the following photographs and their photographers.

Photo by [Van Thanh](https://unsplash.com/@vanthanh2608?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/cafe?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
