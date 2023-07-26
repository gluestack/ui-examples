"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyboardDismissHandlerManager = void 0;
exports.useBackHandler = useBackHandler;
exports.useKeyboardDismissable = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
let keyboardDismissHandlers = [];
const keyboardDismissHandlerManager = {
  push: handler => {
    keyboardDismissHandlers.push(handler);
    return () => {
      keyboardDismissHandlers = keyboardDismissHandlers.filter(h => h !== handler);
    };
  },
  length: () => keyboardDismissHandlers.length,
  pop: () => {
    return keyboardDismissHandlers.pop();
  }
};

/**
 * Handles attaching callback for Escape key listener on web and Back button listener on Android
 */
exports.keyboardDismissHandlerManager = keyboardDismissHandlerManager;
const useKeyboardDismissable = _ref => {
  let {
    enabled,
    callback
  } = _ref;
  _react.default.useEffect(() => {
    let cleanupFn = () => {};
    if (enabled) {
      cleanupFn = keyboardDismissHandlerManager.push(callback);
    } else {
      cleanupFn();
    }
    return () => {
      cleanupFn();
    };
  }, [enabled, callback]);
  useBackHandler({
    enabled,
    callback
  });
};
exports.useKeyboardDismissable = useKeyboardDismissable;
function useBackHandler(_ref2) {
  let {
    enabled,
    callback
  } = _ref2;
  (0, _react.useEffect)(() => {
    let backHandler = () => {
      callback();
      return true;
    };
    if (enabled) {
      _reactNative.BackHandler.addEventListener('hardwareBackPress', backHandler);
    } else {
      _reactNative.BackHandler.removeEventListener('hardwareBackPress', backHandler);
    }
    return () => _reactNative.BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, [enabled, callback]);
}
//# sourceMappingURL=useKeyboardDismisssable.js.map