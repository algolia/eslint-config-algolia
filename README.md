# eslint-config-algolia

[![Version][version-svg]][package-url] [![Build Status][travis-svg]][travis-url] [![License][license-image]][license-url] [![Downloads][downloads-image]][downloads-url]

This is [Algolia](https://www.algolia.com/)'s linting and formatting of
JavaScript projects (Vanilla, React, Vue) repository.

It explains to you how to setup your project to use it and never
worry again about indentation, curly spaces, let vs const etc...

This code style is only as useful as you activate travis for your project
so that it runs linting in your test phase and warns you.

Just **focus** on coding.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Setup your project](#setup-your-project)
  - [Base requirements](#base-requirements)
  - [Vanilla](#vanilla)
  - [Jest](#jest)
  - [React](#react)
  - [Flow (deprecated)](#flow-deprecated)
  - [Flow with React (deprecated)](#flow-with-react-deprecated)
  - [TypeScript](#typescript)
  - [TypeScript with React](#typescript-with-react)
  - [Vue](#vue)
  - [Node.js](#nodejs)
- [Existing codebase setup](#existing-codebase-setup)
- [Setup autofix in IDE](#setup-autofix-in-ide)
- [Ignoring files](#ignoring-files)
- [Contributing](#contributing)
  - [Test](#test)
  - [Release](#release)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Setup your project

### Base requirements

```sh
yarn add \
eslint @babel/eslint-parser prettier \
eslint-config-algolia eslint-config-prettier \
eslint-plugin-import eslint-plugin-prettier \
@eslint-community/eslint-plugin-eslint-comments eslint-plugin-jsdoc \
--dev
```

### Vanilla

**.eslintrc.js**
```js
module.exports = {
  extends: 'algolia'
};
```

**eslint.config.js**
```js
const algolia = require('eslint-config-algolia/flat/base');
module.exports = [
  ...algolia,
];
```

**package.json**
```json
{
  "scripts": {
    "test": "npm run lint",
    "lint": "eslint .",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

### Jest

We recommend using Jest as a test runner.

**terminal**
```sh
yarn add eslint-plugin-jest --dev
```

**.eslintrc.js**
```js
module.exports = {
  extends: ['algolia', 'algolia/jest']
};
```

**eslint.config.js**
```js
const algolia = require('eslint-config-algolia/flat/base');
const algoliaJest = require('eslint-config-algolia/flat/jest');
module.exports = [
  ...algolia,
  ...algoliaJest,
];
```

**package.json**
```json
{
  "scripts": {
    "test": "npm run lint",
    "lint": "eslint .",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

### React

**terminal**
```sh
yarn add eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y --dev
```

**.eslintrc.js**
```js
module.exports = {
  extends: ['algolia', 'algolia/react']
};
```

**eslint.config.js**
```js
const algolia = require('eslint-config-algolia/flat/base');
const algoliaReact = require('eslint-config-algolia/flat/react');
module.exports = [
  ...algolia,
  ...algoliaReact,
];
```

**package.json**
```json
{
  "scripts": {
    "test": "npm run lint",
    "lint": "eslint .",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

### Flow (deprecated)

**terminal**
```sh
yarn add eslint-plugin-flowtype --dev
```

**.eslintrc.js**
```js
module.exports = {
  extends: ['algolia', 'algolia/flowtype']
};
```

### Flow with React (deprecated)

**terminal**
```sh
yarn add eslint-plugin-flowtype eslint-plugin-react eslint-plugin-react-hooks --dev
```

**.eslintrc.js**
```js
module.exports = {
  extends: ['algolia', 'algolia/flowtype', 'algolia/react']
};
```

**package.json**
```json
{
  "scripts": {
    "test": "npm run lint",
    "lint": "eslint .",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

### TypeScript

**terminal**
```sh
yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript --dev
```

**.eslintrc.js**
```js
module.exports = {
  extends: ['algolia', 'algolia/typescript'],

  parserOptions: {
    project: '<path-to-tsconfig.json>',
  },
};
```

**eslint.config.js**
```js
const algolia = require('eslint-config-algolia/flat/base');
const algoliaTypescript = require('eslint-config-algolia/flat/typescript');
module.exports = [
  ...algolia,
  ...algoliaTypescript,
  {
    languageOptions: {
      parserOptions: {
        project: '<path-to-tsconfig.json>',
      },
    },
  },
];
```

**package.json**
```json
{
  "scripts": {
    "test": "npm run lint",
    "lint": "eslint --ext .js,.ts,.tsx .",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

You also need to make sure that all the files you want to lint are also included in `tsconfig.json` with the `include` property.

### TypeScript with React

**terminal**
```sh
yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y --dev
```

**.eslintrc.js**
```js
module.exports = {
  extends: ['algolia', 'algolia/react', 'algolia/typescript']
};
```
**Note**: Be sure to put the `algolia/typescript` configuration last so the parser is properly set for TypeScript files.

**eslint.config.js**
```js
const algolia = require('eslint-config-algolia/flat/base');
const algoliaReact = require('eslint-config-algolia/flat/react');
const algoliaTypescript = require('eslint-config-algolia/flat/typescript');
module.exports = [
  ...algolia,
  ...algoliaReact,
  ...algoliaTypescript,
];
```

**package.json**
```json
{
  "scripts": {
    "test": "npm run lint",
    "lint": "eslint --ext .js,.ts,.tsx .",
    "lint:fix": "npm run lint -- --fix"
  }
}
```


### Vue

**terminal**
```sh
yarn add eslint-plugin-vue --dev
```

**.eslintrc.js**
```js
module.exports = {
  extends: ['algolia', 'algolia/vue']
};
```

**eslint.config.js**
```js
const algolia = require('eslint-config-algolia/flat/base');
const algoliaVue = require('eslint-config-algolia/flat/vue');
module.exports = [
  ...algolia,
  ...algoliaVue,
];
```

**package.json**
```json
{
  "scripts": {
    "test": "npm run lint",
    "lint": "eslint --ext .js,.vue .",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

**VSCode**
```json
{
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    }
  ]
}
```

### Node.js

**package.json**
```json
{
  "scripts": {
    "test": "npm run lint",
    "lint": "eslint .",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

**.eslintrc.js**
```js
module.exports = {
  extends: 'algolia',
  rules: {
    'import/no-commonjs': 'off'
  },
};
```

**eslint.config.js**
```js
const algolia = require('eslint-config-algolia/flat/base');
module.exports = [
  ...algolia,
  {
    rules: {
      'import/no-commonjs': 'off'
    }
  },
];
```

## Existing codebase setup

If you have a lot of files already written and wants to now use
our linting tools, you might have a lot of errors. There's hope!

Just reformat all the files automatically and then manually fix remaining
errors.

**terminal**
```sh
npm run lint:fix
```

## Setup autofix in IDE

Don't overlook this part, autofixing on save is a huge productivity boost.

Use any [ESLint integration](http://eslint.org/docs/user-guide/integrations)
and activate "Fix on save" option.

Also activate "Lint HTML files" when dealing with `.vue` components.

## Ignoring files

See "Ignoring Files and Directories" on [ESLint website](http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories).

## Contributing

### Test

We have a [sample-project](packages/test).

```sh
yarn test
```

### Release

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
