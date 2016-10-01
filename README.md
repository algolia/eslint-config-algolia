# eslint-config-algolia

[![Version][version-svg]][package-url] [![Build Status][travis-svg]][travis-url] [![License][license-image]][license-url] [![Downloads][downloads-image]][downloads-url]

This is [Algolia](https://www.algolia.com/)'s [ESLint](http://eslint.org/) configuration.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
- [Ignoring files](#ignoring-files)
- [Using as a global eslint config](#using-as-a-global-eslint-config)
- [Test](#test)
- [Release](#release)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

```sh
npm install eslint-config-algolia --save-dev
```

create an `.eslintrc.js` file:
```js
module.exports = {
  "extends": ["algolia"]
};
```

### Jasmine

We have a specific set of rules if you are using [Jasmine](https://jasmine.github.io/) (or [Jest](https://facebook.github.io/jest/)).

create an `.eslintrc.js` file:
```js
module.exports = {
  "extends": ["algolia", "algolia/jasmine"]
};
```

### Tips

If you are using [any editors plugin](http://eslint.org/docs/user-guide/integrations.html#editors) for ESLint then it will show you warnings/errors.

Also activate fix errors on save in your editor. ESLint is able to fix many errors for you given your ESLint configuration.

Now you can create an npm `lint` [script](https://docs.npmjs.com/files/package.json#scripts) that will run `eslint .` to lint all files.

## Ignoring files

See "Ignoring Files and Directories" on [ESLint website](http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories).

## Using as a global eslint config

You can have a `~/.eslintrc.js` config that will be used if your project has no `.eslintrc.js`.

Create a `~/.eslintrc.js` with:

```json
{
  "extends": "algolia"
}
```

Then:

```sh
cd ~
npm install eslint-config-algolia
```

## Test

We have a [sample-project](sample-project).

```sh
npm test
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
