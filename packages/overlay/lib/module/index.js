import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { Modal, Platform } from 'react-native';
import { useKeyboardDismissable } from '@gluestack-ui/react-native-aria';
export const ExitAnimationContext = /*#__PURE__*/React.createContext({
  exited: true,
  setExited: _exited => {}
});
export { OverlayProvider } from '@react-native-aria/overlays';
const Overlay = _ref => {
  let {
    children,
    isOpen,
    useRNModal = false,
    useRNModalOnAndroid = false,
    isKeyboardDismissable = true,
    animationPreset = 'fade',
    onRequestClose,
    style,
    ref,
    unmountOnExit
  } = _ref;
  const [exited, setExited] = React.useState(!isOpen);
  useKeyboardDismissable({
    enabled: isOpen && isKeyboardDismissable,
    callback: onRequestClose ? onRequestClose : () => {}
  });
  const styleObj = {
    ...style
  };
  if (animationPreset === 'slide') {
    styleObj.overflow = 'hidden';
    styleObj.display = 'flex';
  } else {
    styleObj.display = exited && !isOpen ? 'none' : 'flex';
  }
  if (unmountOnExit && !isOpen && exited) {
    return null;
  }
  if (useRNModal || useRNModalOnAndroid && Platform.OS === 'android') {
    return /*#__PURE__*/React.createElement(ExitAnimationContext.Provider, {
      value: {
        exited,
        setExited
      }
    }, /*#__PURE__*/React.createElement(Modal, {
      statusBarTranslucent: true,
      transparent: true,
      visible: isOpen,
      onRequestClose: onRequestClose,
      animationType: animationPreset,
      ref: ref
    }, children));
  }
  return /*#__PURE__*/React.createElement(OverlayContainer, {
    style: {
      ...styleObj
    }
  }, /*#__PURE__*/React.createElement(ExitAnimationContext.Provider, {
    value: {
      exited,
      setExited
    }
  }, children));
};
Overlay.displayName = 'Overlay';
export { Overlay };
//# sourceMappingURL=index.js.map