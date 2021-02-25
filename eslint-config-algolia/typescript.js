// eslint-disable-next-line import/no-commonjs
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  extends: [
    './base.js',
    './rules/typescript.js',
    'prettier/@typescript-eslint',
  ],
};
