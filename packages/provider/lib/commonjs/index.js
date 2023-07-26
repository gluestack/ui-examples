"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "UIContext", {
  enumerable: true,
  get: function () {
    return _Provider.UIContext;
  }
});
exports.createProvider = void 0;
var _Provider = require("./Provider");
const createProvider = _ref => {
  let {
    StyledProvider
  } = _ref;
  const Provider = (0, _Provider.Provider)({
    StyledProvider
  });
  Provider.displayName = 'Provider';
  return Provider;
};
exports.createProvider = createProvider;
//# sourceMappingURL=index.js.map