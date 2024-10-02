/* eslint-disable import/no-commonjs */
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');

const rules = require('../rules/typescript');

// Remove legacy properties
delete rules.plugins;
delete rules.overrides;

module.exports = [
  rules,
  {
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      import: importPlugin,
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
  },
  // Mixed codebase issues
  {
    // enable the rule specifically for TypeScript files
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
          // allowExpressions: true,
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    },
  },
];
