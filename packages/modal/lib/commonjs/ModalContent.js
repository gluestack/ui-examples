"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Context = require("./Context");
var _reactNative = require("react-native");
var _focus = require("@react-native-aria/focus");
var _OverlayAnimatePresence = require("./OverlayAnimatePresence");
var _dialog = require("@react-native-aria/dialog");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-native/no-inline-styles */
const ModalContent = (StyledModalContent, AnimatePresence) => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    focusable = false,
    ...props
  } = _ref;
  const {
    initialFocusRef,
    finalFocusRef,
    handleClose,
    visible
  } = _react.default.useContext(_Context.ModalContext);
  const contentRef = _react.default.useRef(null);
  const mergedRef = (0, _utils.mergeRefs)([contentRef, ref]);

  // @ts-ignore
  const {
    dialogProps
  } = (0, _dialog.useDialog)({
    ...props
  }, mergedRef);
  _react.default.useEffect(() => {
    if (contentRef) {
      const reactTag = (0, _reactNative.findNodeHandle)(contentRef.current);
      if (reactTag) {
        // Issue from react-native side
        // Hack for now, will fix this later
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
    if (visible) {
      if (initialFocusRef && initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current) {
        if (initialFocusRef.current.hasOwnProperty('focus')) {
          var _initialFocusRef$curr;
          initialFocusRef === null || initialFocusRef === void 0 ? void 0 : (_initialFocusRef$curr = initialFocusRef.current) === null || _initialFocusRef$curr === void 0 ? void 0 : _initialFocusRef$curr.focus();
        }
      }
    } else {
      if (finalFocusRef && finalFocusRef !== null && finalFocusRef !== void 0 && finalFocusRef.current) {
        if (finalFocusRef.current.hasOwnProperty('focus')) {
          var _finalFocusRef$curren;
          finalFocusRef === null || finalFocusRef === void 0 ? void 0 : (_finalFocusRef$curren = finalFocusRef.current) === null || _finalFocusRef$curren === void 0 ? void 0 : _finalFocusRef$curren.focus();
        }
      }
    }
  }, [initialFocusRef, finalFocusRef, visible]);
  return /*#__PURE__*/_react.default.createElement(_focus.FocusScope, {
    contain: visible,
    autoFocus: visible && !initialFocusRef,
    restoreFocus: visible && !finalFocusRef
  }, /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
    visible: visible,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/_react.default.createElement(StyledModalContent, _extends({}, props, {
    ref: mergedRef,
    onAccessibilityEscape: handleClose,
    "aria-modal": "true",
    accessibilityRole: _reactNative.Platform.OS === 'web' ? 'dialog' : undefined,
    accessibilityViewIsModal: true,
    focusable: _reactNative.Platform.OS === 'web' ? focusable : undefined
  }, dialogProps), children)));
});
var _default = ModalContent;
exports.default = _default;
//# sourceMappingURL=ModalContent.js.map