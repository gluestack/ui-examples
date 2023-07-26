"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _context = require("./context");
var _ActionsheetContentContext = require("./ActionsheetContentContext");
var _OverlayAnimatePresence = require("./OverlayAnimatePresence");
var _focus = require("@react-native-aria/focus");
var _utils = require("@gluestack-ui/utils");
var _dialog = require("@react-native-aria/dialog");
var _overlays = require("@react-native-aria/overlays");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-native/no-inline-styles */
function ActionsheetContent(StyledActionsheetContent, AnimatePresence) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
    let {
      children,
      focusable = true,
      ...props
    } = _ref;
    const {
      visible,
      handleClose,
      trapFocus,
      initialFocusRef,
      finalFocusRef
    } = _react.default.useContext(_context.ActionsheetContext);
    (0, _overlays.usePreventScroll)();
    const pan = _react.default.useRef(new _reactNative.Animated.ValueXY()).current;
    const sheetHeight = _react.default.useRef(0);
    const [contentSheetHeight, setContentSheetHeight] = _react.default.useState(0);
    const [animatedViewSheetHeight, setAnimatedViewSheetHeight] = _react.default.useState(0);
    const windowHeight = _reactNative.Dimensions.get('window').height;
    const animationDefaultConfig = {
      type: 'timing',
      duration: 300
    };
    const handleCloseCallback = _react.default.useCallback(handleClose, [_context.ActionsheetContext, handleClose]);
    const contentSheetAnimatePosition = _react.default.useMemo(() => animatedViewSheetHeight - contentSheetHeight, [animatedViewSheetHeight, contentSheetHeight]);
    const contentRef = _react.default.useRef(null);
    _react.default.useEffect(() => {
      if (contentRef) {
        const reactTag = (0, _reactNative.findNodeHandle)(contentRef.current);
        if (reactTag) {
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
        }
      }
    }, [visible, contentRef]);
    _react.default.useEffect(() => {
      const finalRefVal = finalFocusRef ? finalFocusRef.current : null;
      if (visible) {
        if (initialFocusRef && initialFocusRef.current) {
          initialFocusRef.current.focus();
        }
      } else {
        if (finalRefVal) {
          finalRefVal.focus();
        }
      }
    }, [initialFocusRef, finalFocusRef, visible]);
    const {
      dialogProps
    } = (0, _dialog.useDialog)({
      ...props
    }, contentRef);
    const mergedRef = (0, _utils.mergeRefs)([ref, contentRef]);
    return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
      style: {
        transform: [{
          translateY: pan.y
        }],
        width: '100%',
        height: '100%'
      },
      onLayout: event => {
        const {
          height
        } = event.nativeEvent.layout;
        sheetHeight.current = height;
        setAnimatedViewSheetHeight(height);
      },
      pointerEvents: "box-none"
    }, /*#__PURE__*/_react.default.createElement(_focus.FocusScope, {
      contain: trapFocus,
      autoFocus: visible && !initialFocusRef,
      restoreFocus: visible && !finalFocusRef
    }, /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
      visible: visible,
      AnimatePresence: AnimatePresence
    }, /*#__PURE__*/_react.default.createElement(StyledActionsheetContent, _extends({
      initial: {
        y: windowHeight
      },
      animate: {
        y: contentSheetAnimatePosition
      },
      exit: {
        y: windowHeight
      },
      transition: animationDefaultConfig
    }, props, {
      ref: mergedRef,
      focusable: _reactNative.Platform.OS === 'web' ? focusable : undefined
    }, dialogProps, {
      onLayout: event => {
        const {
          height
        } = event.nativeEvent.layout;
        setContentSheetHeight(height);
      }
    }), /*#__PURE__*/_react.default.createElement(_ActionsheetContentContext.ActionsheetContentProvider, {
      sheetHeight: sheetHeight,
      pan: pan,
      handleClose: handleCloseCallback
    }, children)))));
  });
}
var _default = ActionsheetContent;
exports.default = _default;
//# sourceMappingURL=ActionsheetContent.js.map