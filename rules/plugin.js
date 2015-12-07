module.exports = {
  parser: 'babel-eslint',
  plugins: ['algolia'],
  rules: {
    'algolia/relative-require': 2,
    // Don't force ES6 yet
    // ES6 projects should override these
    'algolia/force-import-root': 0, // Recommended 2
    'algolia/no-require': 0, // Recommended 1
    'algolia/no-module-exports': 0 // Recommended 2
  }
};
