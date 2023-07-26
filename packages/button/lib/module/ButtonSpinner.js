function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
export const ButtonSpinner = StyledButtonSpinner => /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement(StyledButtonSpinner, _extends({}, props, {
    accessible: true,
    accessibilityLabel: "loading",
    ref: ref
  }));
});
//# sourceMappingURL=ButtonSpinner.js.map