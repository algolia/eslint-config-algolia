/* eslint-disable import/no-commonjs */
const jestPlugin = require('eslint-plugin-jest');

const jestRules = require('../rules/jest');

module.exports = [
  {
    ...jestPlugin.configs['flat/recommended'],
  },
  {
    ...jestPlugin.configs['flat/style'],
  },
  jestRules,
];
