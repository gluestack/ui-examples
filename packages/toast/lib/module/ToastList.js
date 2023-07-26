/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ToastContext } from './Toast';
// @ts-ignore
import { Overlay } from '@gluestack-ui/overlay';
// @ts-ignore
import { PresenceTransition } from '@gluestack-ui/transitions';
import { SafeAreaView } from 'react-native';
import { View, Platform } from 'react-native';
import { useKeyboardBottomInset } from '@gluestack-ui/hooks';
const initialAnimationOffset = 24;
const transitionConfig = {
  'bottom': initialAnimationOffset,
  'top': -initialAnimationOffset,
  'top-right': -initialAnimationOffset,
  'top-left': -initialAnimationOffset,
  'bottom-left': initialAnimationOffset,
  'bottom-right': initialAnimationOffset
};
const toastPositionStyle = Platform.OS === 'web' ? 'fixed' : 'absolute';
const POSITIONS = {
  'top': {
    top: 0,
    left: 0,
    right: 0
  },
  'top-right': {
    top: 0,
    right: 0
  },
  'top-left': {
    top: 0,
    left: 0
  },
  'bottom': {
    bottom: 0,
    left: 0,
    right: 0
  },
  'bottom-left': {
    bottom: 0,
    left: 0
  },
  'bottom-right': {
    bottom: 0,
    right: 0
  }
};
export const ToastList = () => {
  const {
    toastInfo,
    visibleToasts,
    removeToast
  } = React.useContext(ToastContext);
  const bottomInset = useKeyboardBottomInset() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo);
  };
  let hasToastOnOverlay = false;
  getPositions().map(position => {
    var _toastInfo$position;
    if (((_toastInfo$position = toastInfo[position]) === null || _toastInfo$position === void 0 ? void 0 : _toastInfo$position.length) > 0) hasToastOnOverlay = true;
  });
  return getPositions().length > 0 ? /*#__PURE__*/React.createElement(Overlay, {
    isOpen: hasToastOnOverlay,
    isKeyboardDismissable: false
  }, getPositions().map(position => {
    if (Object.keys(POSITIONS).includes(position)) return /*#__PURE__*/React.createElement(View, {
      key: position,
      pointerEvents: "none",
      style: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        position: toastPositionStyle,
        //@ts-ignore
        ...POSITIONS[position]
      }
    },
    // @ts-ignore
    toastInfo[position].map(toast => {
      var _toast$config3;
      return /*#__PURE__*/React.createElement(PresenceTransition
      // {..._presenceTransition}
      , {
        key: toast.id,
        visible: visibleToasts[toast.id],
        onTransitionComplete: status => {
          if (status === 'exited') {
            var _toast$config, _toast$config2;
            removeToast(toast.id);
            ((_toast$config = toast.config) === null || _toast$config === void 0 ? void 0 : _toast$config.onCloseComplete) && ((_toast$config2 = toast.config) === null || _toast$config2 === void 0 ? void 0 : _toast$config2.onCloseComplete());
          }
        },
        initial: {
          opacity: 0,
          translateY: transitionConfig[position]
        }
      }, /*#__PURE__*/React.createElement(SafeAreaView, null, /*#__PURE__*/React.createElement(View, {
        style: {
          bottom: ['bottom', 'bottom-left', 'bottom-right'].includes(position) && (_toast$config3 = toast.config) !== null && _toast$config3 !== void 0 && _toast$config3.avoidKeyboard ? bottomInset : undefined
        }
      }, toast.component)));
    }));else return null;
  })) : null;
};
//# sourceMappingURL=ToastList.js.map