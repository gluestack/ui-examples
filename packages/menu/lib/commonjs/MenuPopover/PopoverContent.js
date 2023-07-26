"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("@gluestack-ui/hooks");
var _PopoverContext = require("./PopoverContext");
var _reactNative = require("react-native");
var _utils = require("@gluestack-ui/utils");
var _overlays = require("@react-native-aria/overlays");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PopoverContent = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
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
    onClose,
    initialFocusRef,
    finalFocusRef,
    popoverContentId,
    placement,
    shouldOverlapWithTrigger,
    crossOffset,
    offset,
    shouldFlip,
    isOpen
  } = value;
  const contentRef = _react.default.useRef(null);
  _react.default.useEffect(() => {
    if (contentRef) {
      const reactTag = (0, _reactNative.findNodeHandle)(contentRef.current);
      if (reactTag) {
        _reactNative.AccessibilityInfo.isScreenReaderEnabled().then(enabled => {
          if (enabled) {
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          }
        });
      }
    }
  }, [isOpen, contentRef]);
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
    callback: onClose
  });
  const overlayRef = _react.default.useRef(null);
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    nativeID: popoverContentId
  }, props, {
    ref: mergedRef,
    collapsable: false
    // eslint-disable-next-line react-native/no-inline-styles
    ,
    style: {
      position: 'absolute',
      ...(overlayProps === null || overlayProps === void 0 ? void 0 : overlayProps.style),
      ...style
    },
    accessible: true
  }), children);
});
exports.PopoverContent = PopoverContent;
//# sourceMappingURL=PopoverContent.js.map