// eslint-disable-next-line import/no-commonjs
module.exports = {
  // later we add vue-specific prettier extends here
  extends: ['plugin:vue/strongly-recommended', './rules/vue.js', './base.js'],
  plugins: ['vue'],
};
