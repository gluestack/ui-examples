function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
export const SelectDragIndicator = StyledSelectDragIndicator => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  if (Platform.OS === 'web') {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(StyledSelectDragIndicator, _extends({}, props, {
    ref: ref
  }), children);
});
//# sourceMappingURL=SelectDragIndicator.js.map