/* eslint-disable import/no-commonjs */
const jestPlugin = require('eslint-plugin-jest');
const globals = require('globals');

const jestRules = require('../rules/jest');

module.exports = [
  jestRules,
  {
    ...jestPlugin.configs['flat/recommended'],
    ...jestPlugin.configs['flat/style'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
