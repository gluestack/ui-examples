"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = void 0;
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("@gluestack-ui/hooks");
var _overlay = require("@gluestack-ui/overlay");
var _reactNative = require("react-native");
var _PopoverContext = require("./PopoverContext");
var _focus = require("@react-native-aria/focus");
var _PopoverContent = require("./PopoverContent");
var _MenuContext = require("../MenuContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Popover = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    state,
    onOpen,
    trigger,
    children,
    defaultIsOpen = false,
    initialFocusRef,
    finalFocusRef,
    useRNModal,
    trapFocus = true,
    placement = 'bottom',
    shouldOverlapWithTrigger = false,
    crossOffset,
    offset,
    triggerRef,
    AnimatePresence,
    shouldFlip,
    focusScope = true,
    StyledBackdrop,
    ...props
  } = _ref;
  const [isOpen, setIsOpen] = (0, _hooks.useControllableState)({
    value: state === null || state === void 0 ? void 0 : state.isOpen,
    defaultValue: defaultIsOpen,
    onChange: value => {
      value ? onOpen && onOpen() : state.close && state.close();
    }
  });
  const {
    onClose
  } = _react.default.useContext(_MenuContext.MenuContext);
  const [bodyMounted, setBodyMounted] = _react.default.useState(false);
  const [headerMounted, setHeaderMounted] = _react.default.useState(false);
  let idCounter = 0;
  function uniqueId() {
    let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    const id = ++idCounter;
    return prefix + id;
  }
  const id = uniqueId();
  const popoverContentId = `${id}-content`;
  const headerId = `${popoverContentId}-header`;
  const bodyId = `${popoverContentId}-body`;
  const handleOpen = _react.default.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const handleClose = _react.default.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const updatedTrigger = reference => {
    if (trigger) {
      return trigger({
        'ref': reference,
        'onPress': handleOpen,
        'aria-expanded': isOpen ? true : false,
        'aria-controls': isOpen ? popoverContentId : undefined,
        'aria-haspopup': true
      }, {
        open: isOpen
      });
    }
    return null;
  };
  const targetRefTemp = _react.default.useRef(null);
  const targetRef = triggerRef || targetRefTemp;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
    isOpen: isOpen,
    onRequestClose: handleClose,
    isKeyboardDismissable: true,
    useRNModal: useRNModal,
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement(_PopoverContext.PopoverProvider, {
    value: {
      onClose: handleClose,
      targetRef,
      strategy: 'absolute',
      handleClose: handleClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      bodyId,
      headerId,
      headerMounted,
      bodyMounted,
      setBodyMounted,
      setHeaderMounted,
      isOpen,
      placement,
      shouldOverlapWithTrigger,
      crossOffset,
      offset,
      shouldFlip
    }
  }, /*#__PURE__*/_react.default.createElement(StyledBackdrop, {
    onPress: onClose,
    focusable: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    "aria-hidden": true
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    ref: ref
  }, props), /*#__PURE__*/_react.default.createElement(FocusScopeComponent, {
    trapFocus: trapFocus,
    focusScope: focusScope
  }, /*#__PURE__*/_react.default.createElement(_PopoverContent.PopoverContent, {
    AnimatePresence: AnimatePresence
  }, children))))));
});
exports.Popover = Popover;
const FocusScopeComponent = _ref2 => {
  let {
    trapFocus,
    focusScope,
    children
  } = _ref2;
  if (focusScope) return /*#__PURE__*/_react.default.createElement(_focus.FocusScope, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, children);
  return children;
};
//# sourceMappingURL=Popover.js.map