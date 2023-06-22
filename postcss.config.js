const postcss = require("postcss");

module.exports = {
  plugins: [postcss([require("cssnano"), require("postcss-combine-media-query")])],
};
