// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint', // allows both flowtype and static class properties
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
    },
  },
  plugins: ['import', 'jest', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:jest/recommended',
    './rules/base.js',
    'prettier',
  ],
  settings: {
    'import/extensions': ['.js'],
  },
};
