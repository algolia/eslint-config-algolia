// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    jest: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  plugins: ['jest'],
  rules: {
    'consistent-test-it': ['error'],
    'max-nested-describe': ['error', { max: 3 }],
    'no-alias-methods': ['error'],
    'no-duplicate-hooks': ['error'],
    'no-test-return-statement': ['warn'],
    'prefer-hooks-on-top': ['error'],
    'prefer-spy-on': ['error'],
    'require-to-throw-message': ['error'],
    'require-top-level-describe': ['error'],
  },
};
