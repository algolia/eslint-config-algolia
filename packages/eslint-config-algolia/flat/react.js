/* eslint-disable import/no-commonjs */
const babelParser = require('@babel/eslint-parser');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

const rules = require('../rules/react');

module.exports = [
  reactPlugin.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },

    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
      },
    },
  },
  rules,
];
