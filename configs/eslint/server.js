const base = require('./_base.js');

module.exports = {
  ...base,
  extends: ['airbnb-base', 'airbnb-typescript/base', ...base.extends],
};
