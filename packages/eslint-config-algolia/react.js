// eslint-disable-next-line import/no-commonjs
module.exports = {
  extends: ['plugin:react/recommended', './rules/react.js'],
  plugins: ['react', 'react-hooks'],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
