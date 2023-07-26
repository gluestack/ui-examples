function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
export function Divider(StyledDivider) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
    let {
      children,
      ...props
    } = _ref;
    const {
      orientation
    } = props;
    return /*#__PURE__*/React.createElement(StyledDivider, _extends({
      ref: ref
    }, props, {
      "aria-orientation": orientation
      //@ts-ignore web only role
      ,
      accessibilityRole: Platform.OS === 'web' ? 'separator' : undefined
    }), children);
  });
}
//# sourceMappingURL=Divider.js.map