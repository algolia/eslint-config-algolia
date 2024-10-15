/* eslint-disable import/no-commonjs, @typescript-eslint/no-var-requires */
const algolia = require('eslint-config-algolia/flat/base');
const algoliaJest = require('eslint-config-algolia/flat/jest');
const algoliaReact = require('eslint-config-algolia/flat/react');
const algoliaTypescript = require('eslint-config-algolia/flat/typescript');

module.exports = [
  ...algolia,
  ...algoliaTypescript,
  ...algoliaReact,
  ...algoliaJest,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
];
