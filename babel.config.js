const myBabel = require("@gluestack-style/babel-plugin-styled-resolver");
const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
