// eslint-disable-next-line import/no-commonjs
module.exports = {
  rules: {
    'react/no-danger': ['off'],
    'react/display-name': ['off'],
    'react/jsx-key': ['error'],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
