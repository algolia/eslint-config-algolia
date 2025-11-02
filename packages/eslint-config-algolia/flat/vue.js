// We don't extends from the `base` preset because the Vue plugin needs
// to use the parser under `parserOptions`. By doing this we broke the import
// plugin in the `react` preset. For now we just recreate the same configuration
// until all the plugins behave the same.

/* eslint-disable import/no-commonjs */
const babelParser = require('@babel/eslint-parser');
const importPlugin = require('eslint-plugin-import');
const vuePlugin = require('eslint-plugin-vue');
const globals = require('globals');

const rules = require('../rules/vue');

module.exports = [
  ...vuePlugin.configs['flat/recommended'],
  rules,
  {
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      parser: babelParser, // allows both flowtype and static class properties
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
          jsx: true,
        },
      },
    },
    settings: {
      'import/extensions': ['.js'],
    },
  },
];
