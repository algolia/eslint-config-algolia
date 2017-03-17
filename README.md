# eslint-config-algolia

[![Version][version-svg]][package-url] [![Build Status][travis-svg]][travis-url] [![License][license-image]][license-url] [![Downloads][downloads-image]][downloads-url]

This is [Algolia](https://www.algolia.com/)'s [ESLint](http://eslint.org/) configuration.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Linting (ESLint)](#linting-eslint)
- [Formatting (Prettier)](#formatting-prettier)
- [Ignoring files](#ignoring-files)
- [Test](#test)
- [Release](#release)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Linting (ESLint)

We use linting as a way to ease our development mostly, getting info on a variable being global in your editor
is better than discovering it in production.

```sh
yarn add eslint-config-algolia babel-eslint eslint eslint-plugin-import eslint-plugin-jest eslint-config-prettier [eslint-plugin-react eslint-import-resolver-webpack] --dev
```

create an `.eslintrc.js` file:
```js
module.exports = {
  extends: ['algolia']
};
```

Then add [an editor plugin](http://eslint.org/docs/user-guide/integrations.html#editors) that will show you linting errors, do not activate
auto formatting fix, we use prettier for this.

## Formatting (Prettier)

Please add [Prettier](https://github.com/prettier/prettier) to your JavaScript project:

```sh
yarn add prettier lint-staged husky --dev
```

Then add this to your package.json:

```json
{
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.js": [
      "prettier --write --single-quote --trailing-comma es5",
      "git add"
    ]
  }
}
```

This will automatically reformat staged files.

Rules:
  - single-quote YES
  - trailing-comma YES

Add [an editor plugin](https://github.com/prettier/prettier#atom), configure the rules, done.

## Ignoring files

See "Ignoring Files and Directories" on [ESLint website](http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories).

## Test

We have a [sample-project](sample-project).

```sh
yarn test
```

## Release

```sh
npm run release
```

[version-svg]: https://img.shields.io/npm/v/eslint-config-algolia.svg?style=flat-square
[package-url]: https://npmjs.org/package/eslint-config-algolia
[travis-svg]: https://img.shields.io/travis/algolia/eslint-config-algolia/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/algolia/eslint-config-algolia
[license-image]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-algolia.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=eslint-config-algolia
