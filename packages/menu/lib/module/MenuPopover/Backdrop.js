function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useContext } from 'react';
import { MenuContext } from '../MenuContext';
export const MenuBackdrop = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    StyledBackdrop,
    ...props
  } = _ref;
  const {
    onClose
  } = useContext(MenuContext);
  return /*#__PURE__*/React.createElement(StyledBackdrop, _extends({}, props, {
    ref: ref,
    onPress: onClose,
    style: {
      backgroundColor: 'red'
    }
  }), children);
});
MenuBackdrop.displayName = 'MenuBackdrop';
export default MenuBackdrop;
//# sourceMappingURL=Backdrop.js.map