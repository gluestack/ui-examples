"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSpinner = createSpinner;
var _Spinner = require("./Spinner");
function createSpinner(_ref) {
  let {
    Root
  } = _ref;
  const SpinnerTemp = (0, _Spinner.Spinner)(Root);
  SpinnerTemp.displayName = 'Spinner';
  return SpinnerTemp;
}
//# sourceMappingURL=index.js.map