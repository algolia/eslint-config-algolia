// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    experimentalObjectRestSpread: true,
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    './rules/base.js',

    // prettier is set at the end to override our own rules
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'jsdoc', '@stylistic'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],

    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
