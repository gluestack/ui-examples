function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useControllableState } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import { ActionsheetContext } from './context';
import { StyleSheet } from 'react-native';
export function Actionsheet(StyledActionsheet) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
    let {
      children,
      isOpen,
      onClose,
      onOpen,
      defaultIsOpen = false,
      trapFocus = true,
      closeOnOverlayClick = true,
      isKeyboardDismissable = true,
      useRNModal,
      initialFocusRef,
      finalFocusRef,
      unmountOnExit = true,
      ...props
    } = _ref;
    const overlayStyle = Platform.OS === 'web' ? {
      position: 'fixed'
    } : {};
    const [visible, setVisible] = useControllableState({
      value: isOpen,
      defaultValue: defaultIsOpen,
      onChange: val => {
        if (!val) {
          onClose && onClose();
        } else {
          onOpen && onOpen();
        }
      }
    });
    const handleClose = React.useCallback(() => {
      setVisible(false);
    }, [setVisible]);
    const contextValue = React.useMemo(() => {
      return {
        handleClose,
        closeOnOverlayClick,
        visible,
        trapFocus,
        initialFocusRef,
        finalFocusRef
      };
    }, [handleClose, closeOnOverlayClick, visible, trapFocus, initialFocusRef, finalFocusRef]);
    return /*#__PURE__*/React.createElement(Overlay, {
      isOpen: visible,
      onRequestClose: handleClose,
      isKeyboardDismissable: isKeyboardDismissable,
      useRNModal: useRNModal
      // @ts-ignore
      ,
      style: overlayStyle,
      unmountOnExit: unmountOnExit
    }, /*#__PURE__*/React.createElement(ActionsheetContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(StyledActionsheet, _extends({
      ref: ref,
      style: [StyleSheet.absoluteFill]
    }, props), children)));
  });
}
//# sourceMappingURL=Actionsheet.js.map