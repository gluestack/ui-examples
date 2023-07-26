"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastList = void 0;
var _react = _interopRequireDefault(require("react"));
var _Toast = require("./Toast");
var _overlay = require("@gluestack-ui/overlay");
var _transitions = require("@gluestack-ui/transitions");
var _reactNative = require("react-native");
var _hooks = require("@gluestack-ui/hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable react-native/no-inline-styles */

// @ts-ignore

// @ts-ignore

const initialAnimationOffset = 24;
const transitionConfig = {
  'bottom': initialAnimationOffset,
  'top': -initialAnimationOffset,
  'top-right': -initialAnimationOffset,
  'top-left': -initialAnimationOffset,
  'bottom-left': initialAnimationOffset,
  'bottom-right': initialAnimationOffset
};
const toastPositionStyle = _reactNative.Platform.OS === 'web' ? 'fixed' : 'absolute';
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
const ToastList = () => {
  const {
    toastInfo,
    visibleToasts,
    removeToast
  } = _react.default.useContext(_Toast.ToastContext);
  const bottomInset = (0, _hooks.useKeyboardBottomInset)() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo);
  };
  let hasToastOnOverlay = false;
  getPositions().map(position => {
    var _toastInfo$position;
    if (((_toastInfo$position = toastInfo[position]) === null || _toastInfo$position === void 0 ? void 0 : _toastInfo$position.length) > 0) hasToastOnOverlay = true;
  });
  return getPositions().length > 0 ? /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
    isOpen: hasToastOnOverlay,
    isKeyboardDismissable: false
  }, getPositions().map(position => {
    if (Object.keys(POSITIONS).includes(position)) return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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
      return /*#__PURE__*/_react.default.createElement(_transitions.PresenceTransition
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
      }, /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: {
          bottom: ['bottom', 'bottom-left', 'bottom-right'].includes(position) && (_toast$config3 = toast.config) !== null && _toast$config3 !== void 0 && _toast$config3.avoidKeyboard ? bottomInset : undefined
        }
      }, toast.component)));
    }));else return null;
  })) : null;
};
exports.ToastList = ToastList;
//# sourceMappingURL=ToastList.js.map