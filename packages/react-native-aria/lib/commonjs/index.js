"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "keyboardDismissHandlerManager", {
  enumerable: true,
  get: function () {
    return _useKeyboardDismisssable.keyboardDismissHandlerManager;
  }
});
Object.defineProperty(exports, "useBackHandler", {
  enumerable: true,
  get: function () {
    return _useKeyboardDismisssable.useBackHandler;
  }
});
exports.useIsPressed = exports.useHover = exports.useFocus = void 0;
Object.defineProperty(exports, "useKeyboardDismissable", {
  enumerable: true,
  get: function () {
    return _useKeyboardDismisssable.useKeyboardDismissable;
  }
});
exports.usePressed = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _useKeyboardDismisssable = require("./useKeyboardDismisssable");
const useHover = () => {
  const [isHovered, setHovered] = (0, _react.useState)(false);
  return {
    hoverProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false)
    },
    isHovered
  };
};
exports.useHover = useHover;
const useFocus = () => {
  const [isFocused, setFocused] = (0, _react.useState)(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    },
    isFocused
  };
};
exports.useFocus = useFocus;
const useIsPressed = () => {
  const [isPressed, setIsPressed] = (0, _react.useState)(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false)
    },
    isPressed
  };
};
exports.useIsPressed = useIsPressed;
const usePressed = (onPressIn, onPressOut) => {
  if (_reactNative.Platform.OS === 'web') {
    return {
      pressEvents: {
        onMouseDown: onPressIn,
        onMouseUp: onPressOut,
        onTouchStart: onPressIn,
        onTouchEnd: onPressOut
      }
    };
  }
  return {
    pressEvents: {
      onPressIn,
      onPressOut
    }
  };
};
exports.usePressed = usePressed;
//# sourceMappingURL=index.js.map