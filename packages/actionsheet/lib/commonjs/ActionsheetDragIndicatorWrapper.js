"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsheetDragIndicatorWrapper = ActionsheetDragIndicatorWrapper;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("@gluestack-ui/utils");
var _ActionsheetContentContext = require("./ActionsheetContentContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ActionsheetDragIndicatorWrapper(StyledActionsheetDragIndicatorWrapper) {
  return /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
    const {
      sheetHeight,
      pan,
      handleClose
    } = (0, _ActionsheetContentContext.useActionsheetContent)('ActionsheetContentContext');
    const handleCloseRef = _react.default.useRef(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleCloseCallback = _react.default.useCallback(() => {
      const handleCloseCurrent = handleCloseRef.current;
      //@ts-ignore
      return handleCloseCurrent();
    }, []);
    _react.default.useEffect(() => {
      handleCloseRef.current = handleClose;
    }, [handleClose]);
    const panResponder = _react.default.useRef(_reactNative.PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_evt, gestureState) => {
        return gestureState.dy > 15;
      },
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          _reactNative.Animated.event([null, {
            dy: pan.y
          }], {
            useNativeDriver: false
          })(e, gestureState);
        }
      },
      onPanResponderRelease: (_e, gestureState) => {
        // If sheet is dragged 1/4th of it's height, close it
        if (sheetHeight.current / 4 - gestureState.dy < 0) {
          _reactNative.Animated.timing(pan, {
            toValue: {
              x: 0,
              y: sheetHeight.current
            },
            duration: 150,
            useNativeDriver: true
          }).start(handleCloseCallback);
          setTimeout(() => {
            _reactNative.Animated.timing(pan, {
              toValue: {
                x: 0,
                y: 0
              },
              duration: 150,
              useNativeDriver: true
            }).start();
          }, 300);
        } else {
          _reactNative.Animated.spring(pan, {
            toValue: {
              x: 0,
              y: 0
            },
            overshootClamping: true,
            useNativeDriver: true
          }).start();
        }
      }
    })).current;
    const mergedRef = (0, _utils.mergeRefs)([ref, handleCloseRef]);
    return /*#__PURE__*/_react.default.createElement(StyledActionsheetDragIndicatorWrapper, _extends({}, panResponder.panHandlers, props, {
      ref: mergedRef
    }));
  });
}
//# sourceMappingURL=ActionsheetDragIndicatorWrapper.js.map