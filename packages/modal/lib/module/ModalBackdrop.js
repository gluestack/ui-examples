function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
const ModalBackdrop = (StyledModalBackdrop, AnimatePresence) => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    closeOnOverlayClick,
    handleClose,
    visible
  } = React.useContext(ModalContext);
  return /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
    visible: visible,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/React.createElement(StyledModalBackdrop, _extends({
    ref: ref,
    exit: true,
    onPress: () => {
      closeOnOverlayClick && handleClose();
    }
  }, props), children));
});
export default ModalBackdrop;
//# sourceMappingURL=ModalBackdrop.js.map