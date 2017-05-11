// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint', // https://github.com/babel/babel-eslint#why-use-babel-eslint
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
    },
  },
  plugins: ['react', 'import', 'jest', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:jest/recommended',
    './rules.js',
    'prettier', // enforce prettier rules to pass after our rules, so it disables useless rules
    'prettier/react',
  ],
  settings: {
    'import/extensions': ['.js'],
  },
};
