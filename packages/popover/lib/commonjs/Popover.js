"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = void 0;
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("@gluestack-ui/hooks");
var _overlay = require("@gluestack-ui/overlay");
var _PopoverContext = require("./PopoverContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // import { useOverlayPosition } from '@react-native-aria/overlays';
const Popover = StyledPopover => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    onOpen,
    trigger,
    onClose,
    isOpen: isOpenProp,
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
    isKeyboardDismissable = true,
    shouldFlip,
    ...props
  } = _ref;
  const [isOpen, setIsOpen] = (0, _hooks.useControllableState)({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: value => {
      value ? onOpen && onOpen() : onClose && onClose();
    }
  });
  const [bodyMounted, setBodyMounted] = _react.default.useState(false);
  const [headerMounted, setHeaderMounted] = _react.default.useState(false);
  var idCounter = 0;
  function uniqueId() {
    let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var id = ++idCounter;
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
    return trigger({
      'ref': reference,
      'onPress': handleOpen,
      'aria-expanded': isOpen ? true : false,
      'aria-controls': isOpen ? popoverContentId : undefined,
      'aria-haspopup': true
    }, {
      open: isOpen
    });
  };

  // let floatingParams: any = {};

  // if (Platform.OS === 'web') {
  //   floatingParams = { whileElementsMounted: autoUpdate };
  // }

  const targetRef = _react.default.useRef(null);
  const contextValue = _react.default.useMemo(() => {
    return {
      targetRef,
      strategy: 'absolute',
      handleClose,
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
      trapFocus,
      shouldFlip
    };
  }, [targetRef, handleClose, initialFocusRef, finalFocusRef, popoverContentId, bodyId, headerId, headerMounted, bodyMounted, setBodyMounted, setHeaderMounted, isOpen, placement, shouldOverlapWithTrigger, crossOffset, offset, trapFocus, shouldFlip]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
    isOpen: isOpen,
    onRequestClose: handleClose,
    isKeyboardDismissable: isKeyboardDismissable,
    useRNModal: useRNModal,
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement(_PopoverContext.PopoverProvider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(StyledPopover, _extends({
    ref: ref
  }, props), children))));
});
exports.Popover = Popover;
//# sourceMappingURL=Popover.js.map