// eslint-disable-next-line import/no-commonjs
module.exports = {
  rules: {
    'jest/consistent-test-it': ['error'],
    'jest/max-nested-describe': ['error', { max: 3 }],
    'jest/no-alias-methods': ['error'],
    'jest/no-duplicate-hooks': ['error'],
    'jest/no-test-return-statement': ['warn'],
    'jest/prefer-hooks-on-top': ['error'],
    'jest/prefer-spy-on': ['error'],
    'jest/require-to-throw-message': ['error'],
    'jest/require-top-level-describe': ['error'],
  },
};
