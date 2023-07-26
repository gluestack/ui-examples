function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
export function Spinner(StyledSpinner) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
    let {
      ...props
    } = _ref;
    return /*#__PURE__*/React.createElement(StyledSpinner, _extends({}, props, {
      ref: ref,
      accessible: true,
      accessibilityLabel: "loading"
    }));
  });
}
//# sourceMappingURL=Spinner.js.map