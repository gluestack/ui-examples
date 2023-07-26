"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLink = void 0;
Object.defineProperty(exports, "useLink", {
  enumerable: true,
  get: function () {
    return _useLink.useLink;
  }
});
var _Link = require("./Link");
var _useLink = require("./useLink");
const createLink = _ref => {
  let {
    Root
  } = _ref;
  const Link = (0, _Link.Link)(Root);
  Link.displayName = 'Link';
  return Link;
};
exports.createLink = createLink;
//# sourceMappingURL=index.js.map