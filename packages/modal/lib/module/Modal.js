function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { useControllableState, useKeyboardBottomInset } from '@gluestack-ui/hooks';
import { ModalContext } from './Context';
import { Overlay } from '@gluestack-ui/overlay';
const Modal = StyledModal => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    isOpen,
    onClose,
    defaultIsOpen,
    initialFocusRef,
    finalFocusRef,
    avoidKeyboard,
    closeOnOverlayClick = true,
    isKeyboardDismissable = true,
    unmountOnExit = true,
    ...props
  } = _ref;
  const bottomInset = useKeyboardBottomInset();
  const {
    useRNModal,
    ...remainingProps
  } = props;
  const [visible, setVisible] = useControllableState({
    value: defaultIsOpen ?? isOpen,
    onChange: val => {
      if (!val) onClose && onClose();
    }
  });
  const handleClose = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);
  const avoidKeyboardSpacer = /*#__PURE__*/React.createElement(View, {
    style: {
      // @ts-ignore
      pointerEvents: 'box-none',
      width: '100%',
      height: avoidKeyboard ? bottomInset : undefined
    }
  });
  const contextValue = React.useMemo(() => {
    return {
      handleClose,
      initialFocusRef,
      finalFocusRef,
      closeOnOverlayClick,
      visible,
      avoidKeyboard,
      bottomInset
    };
  }, [handleClose, initialFocusRef, closeOnOverlayClick, finalFocusRef, avoidKeyboard, bottomInset, visible]);
  return /*#__PURE__*/React.createElement(Overlay, {
    isOpen: visible,
    onRequestClose: handleClose,
    isKeyboardDismissable: isKeyboardDismissable,
    useRNModal: useRNModal,
    unmountOnExit: unmountOnExit
  }, /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(StyledModal, _extends({}, remainingProps, {
    ref: ref
  }), children, avoidKeyboard ? avoidKeyboardSpacer : null)));
});
export default Modal;
//# sourceMappingURL=Modal.js.map