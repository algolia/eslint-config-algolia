/* eslint-disable import/no-commonjs, @typescript-eslint/no-var-requires */
const algolia = require('eslint-config-algolia/flat/base');
const algoliaJest = require('eslint-config-algolia/flat/jest');
const algoliaReact = require('eslint-config-algolia/flat/react');
const algoliaTypescript = require('eslint-config-algolia/flat/typescript');

module.exports = [
  ...algolia,
  ...algoliaReact,
  ...algoliaTypescript,
  ...algoliaJest,
  {
    rules: {
      // Re-enable when this is released: https://github.com/import-js/eslint-plugin-import/commit/186f248357437ef46889f3eab7fda8e6030ba874
      'import/no-named-as-default': 'off',
    },
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  },
];
