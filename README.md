# vite-eval-bundles-imported-css

This repository demonstrates an issue when importing CSS into JS files using `eval` bundled with [Vite](https://vitejs.dev).

## Reproduce

1. Clone the repository.
2. Install dependencies with `npm i`.
3. Build the files with [Vite](https://vitejs.dev) by running `npm run build`.

You'll find styles in `styles.css` were added to `dist/vite-eval-bundles-imported-css.es.js` and `dist/vite-eval-bundles-imported-css.umd.js` in addition to the separate `dist/styles.css` file.
