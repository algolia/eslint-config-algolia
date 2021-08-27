// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    jest: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:jest/style', './rules/jest.js'],
  plugins: ['jest'],
};
