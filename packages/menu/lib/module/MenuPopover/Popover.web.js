function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { View } from 'react-native';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import { MenuContext } from '../MenuContext';
export function Popover(_ref) {
  let {
    StyledBackdrop,
    ...props
  } = _ref;
  const ref = React.useRef(null);
  const {
    state,
    children
  } = props;
  const {
    onClose
  } = React.useContext(MenuContext);
  const {
    popoverProps,
    underlayProps
  } = usePopover({
    ...props,
    popoverRef: ref,
    isNonModal: true
  }, state);
  if (!state.isOpen) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement(StyledBackdrop, _extends({}, underlayProps, {
    onPress: onClose,
    focusable: false,
    "aria-hidden": true
  })), /*#__PURE__*/React.createElement(View, _extends({}, popoverProps, {
    ref: ref
  }), /*#__PURE__*/React.createElement(DismissButton, {
    onDismiss: state.close
  }), children, /*#__PURE__*/React.createElement(DismissButton, {
    onDismiss: state.close
  })));
}
//# sourceMappingURL=Popover.web.js.map