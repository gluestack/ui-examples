function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { AlertDialogContext } from './Context';
import { Overlay } from '@gluestack-ui/overlay';
import { useControllableState, useKeyboardBottomInset } from '@gluestack-ui/hooks';
export const AlertDialog = StyledAlertDialog => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    isOpen,
    onClose,
    defaultIsOpen = false,
    initialFocusRef,
    finalFocusRef,
    avoidKeyboard = false,
    closeOnOverlayClick = true,
    isKeyboardDismissable = true,
    animationPreset = 'fade',
    unmountOnExit = true,
    ...props
  } = _ref;
  const bottomInset = useKeyboardBottomInset();
  const [visible, setVisible] = useControllableState({
    value: isOpen,
    defaultValue: defaultIsOpen,
    onChange: val => {
      if (!val) onClose && onClose();
    }
  });
  const avoidKeyboardSpacer = /*#__PURE__*/React.createElement(View, {
    style: {
      // @ts-ignore
      pointerEvents: 'box-none',
      width: '100%',
      height: avoidKeyboard ? bottomInset : undefined
    }
  });
  const handleClose = React.useCallback(() => setVisible(false), [setVisible]);
  const contextValue = React.useMemo(() => {
    return {
      handleClose,
      initialFocusRef,
      finalFocusRef,
      closeOnOverlayClick,
      avoidKeyboard,
      bottomInset,
      visible
    };
  }, [handleClose, initialFocusRef, closeOnOverlayClick, finalFocusRef, avoidKeyboard, bottomInset, visible]);
  return /*#__PURE__*/React.createElement(Overlay, {
    isOpen: visible,
    onRequestClose: handleClose,
    isKeyboardDismissable: isKeyboardDismissable,
    animationPreset: animationPreset,
    unmountOnExit: unmountOnExit
  }, /*#__PURE__*/React.createElement(AlertDialogContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(StyledAlertDialog, _extends({}, props, {
    ref: ref
  }), children, avoidKeyboard ? avoidKeyboardSpacer : null)));
});
//# sourceMappingURL=AlertDialog.js.map