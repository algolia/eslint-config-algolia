/* eslint-disable import/no-commonjs */
const eslintJs = require('@eslint/js');
const commentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments');
const stylisticPlugin = require('@stylistic/eslint-plugin');
const importPlugin = require('eslint-plugin-import');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const globals = require('globals');

const rules = require('../rules/base');

// Remove legacy properties
delete rules.overrides;

module.exports = [
  eslintJs.configs.recommended,
  rules,
  // prettier is set after to override our own rules
  eslintPluginPrettierRecommended,
  {
    plugins: {
      '@stylistic': stylisticPlugin,
      '@eslint-community/eslint-comments': commentsPlugin,
      import: importPlugin,
      jsdoc: jsdocPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          impliedStrict: true,
        },
      },
    },
    settings: {
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],

      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    // enable the rule specifically for TypeScript files
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'jsdoc/no-types': ['error'],
    },
  },
];
