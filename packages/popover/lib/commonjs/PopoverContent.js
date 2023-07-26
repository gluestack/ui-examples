"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("@gluestack-ui/hooks");
var _PopoverContext = require("./PopoverContext");
var _reactNative = require("react-native");
var _utils = require("@gluestack-ui/utils");
var _overlays = require("@react-native-aria/overlays");
var _OverlayAnimatePresence = require("./OverlayAnimatePresence");
var _focus = require("@react-native-aria/focus");
var _dialog = require("@react-native-aria/dialog");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // import { usePopperContext } from '../../popper/src/PopperContext';
const PopoverContent = (StyledPopoverContent, AnimatePresence) => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    style,
    ...props
  } = _ref;
  const {
    value
  } = (0, _PopoverContext.usePopover)('PopoverContext');
  const {
    targetRef,
    initialFocusRef,
    finalFocusRef,
    popoverContentId,
    headerMounted,
    bodyMounted,
    bodyId,
    headerId,
    isOpen,
    placement,
    shouldOverlapWithTrigger,
    crossOffset,
    offset,
    trapFocus,
    handleClose,
    shouldFlip
  } = value;
  const contentRef = _react.default.useRef(null);
  _react.default.useEffect(() => {
    if (contentRef) {
      const reactTag = (0, _reactNative.findNodeHandle)(contentRef.current);
      if (reactTag) {
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [isOpen, contentRef]);
  const {
    dialogProps
  } = (0, _dialog.useDialog)({
    initialFocusRef,
    ...props
  }, contentRef);
  _react.default.useEffect(() => {
    const finalFocusRefCurrentVal = finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current;
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
    return () => {
      if (finalFocusRefCurrentVal) {
        finalFocusRefCurrentVal.focus();
      }
    };
  }, [finalFocusRef, initialFocusRef]);
  (0, _hooks.useKeyboardDismissable)({
    enabled: true,
    callback: handleClose
  });
  const accessibilityProps = _reactNative.Platform.OS === 'web' ? {
    'accessibilityRole': 'dialog',
    'aria-labelledby': headerMounted ? headerId : undefined,
    'aria-describedby': bodyMounted ? bodyId : undefined
  } : {};
  const overlayRef = _react.default.useRef(null);
  // const { x, y, reference, floating, strategy } = useFloating({
  //   placement: placement,
  //   middleware: [offset(10), flip(), shift()],
  //   ...floatingParams,
  // });
  const {
    overlayProps
  } = (0, _overlays.useOverlayPosition)({
    placement: placement,
    targetRef,
    overlayRef,
    crossOffset,
    offset,
    shouldOverlapWithTrigger,
    shouldFlip
  });
  const mergedRef = (0, _utils.mergeRefs)([ref, overlayRef, contentRef]);
  return /*#__PURE__*/_react.default.createElement(_focus.FocusScope, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
    visible: isOpen,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/_react.default.createElement(_PopoverContext.PopoverContentProvider, {
    value: value
  }, /*#__PURE__*/_react.default.createElement(StyledPopoverContent, _extends({
    nativeID: popoverContentId
  }, accessibilityProps, props, {
    ref: mergedRef,
    isOpen: isOpen,
    collapsable: false
  }, dialogProps, {
    focusable: _reactNative.Platform.OS === 'web' ? true : undefined,
    style: {
      position: 'absolute',
      ...(overlayProps === null || overlayProps === void 0 ? void 0 : overlayProps.style),
      ...style
    }
  }), children))));
});
var _default = PopoverContent;
exports.default = _default;
//# sourceMappingURL=PopoverContent.js.map