// We don't extends from the `base` preset because the Vue plugin needs
// to use the parser under `parserOptions`. By doing this we broke the import
// plugin in the `react` preset. For now we just recreate the same configuration
// until all the plugins behave the same.

// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint', // allows both flowtype and static class properties
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    'plugin:import/errors',
    './rules/base.js',
    'prettier',
    './rules/vue.js',
  ],
  plugins: ['import', 'prettier', 'vue'],
  settings: {
    'import/extensions': ['.js'],
  },
};
