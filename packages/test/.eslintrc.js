// eslint-disable-next-line import/no-commonjs
module.exports = {
  extends: ['algolia', 'algolia/react', 'algolia/typescript', 'algolia/jest'],

  parserOptions: {
    project: 'tsconfig.json',
  },
};
