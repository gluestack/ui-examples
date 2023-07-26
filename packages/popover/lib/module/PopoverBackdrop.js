function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { usePopover } from './PopoverContext';
const PopoverBackdrop = (StyledPopoverBackdrop, AnimatePresence) => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    value
  } = usePopover('PopperContext');
  const {
    handleClose
  } = value;
  return /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
    visible: value === null || value === void 0 ? void 0 : value.isOpen,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/React.createElement(StyledPopoverBackdrop, _extends({
    ref: ref
  }, props, {
    onPress: handleClose,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    "aria-hidden": true
  }), children));
});
export default PopoverBackdrop;
//# sourceMappingURL=PopoverBackdrop.js.map