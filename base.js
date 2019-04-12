// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint', // allows both flowtype and static class properties
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    './rules/base.js',
    'prettier',
  ],
  plugins: ['import', 'prettier'],
  settings: {
    'import/extensions': ['.js'],
  },
};
