"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = Tooltip;
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("@gluestack-ui/hooks");
var _reactNativeAria = require("@gluestack-ui/react-native-aria");
var _context = require("./context");
var _utils = require("@react-native-aria/utils");
var _reactNative = require("react-native");
var _overlay = require("@gluestack-ui/overlay");
var _utils2 = require("@gluestack-ui/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Tooltip(StyledTooltip) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
    let {
      isOpen: isOpenProp,
      isDisabled,
      defaultIsOpen = false,
      onClose,
      onOpen,
      openDelay = 0,
      closeDelay = 0,
      placement = 'bottom',
      children,
      closeOnClick = true,
      trigger,
      crossOffset,
      offset = 10,
      shouldOverlapWithTrigger = false,
      shouldFlip = true,
      ...props
    } = _ref;
    const [isOpen, setIsOpen] = (0, _hooks.useControllableState)({
      value: isOpenProp,
      defaultValue: defaultIsOpen,
      onChange: value => {
        value ? onOpen && onOpen() : onClose && onClose();
      }
    });
    const handleOpen = _react.default.useCallback(() => {
      setIsOpen(true);
    }, [setIsOpen]);
    const handleClose = _react.default.useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);
    const enterTimeout = _react.default.useRef();
    const exitTimeout = _react.default.useRef();
    const openWithDelay = _react.default.useCallback(() => {
      if (!isDisabled) {
        enterTimeout.current = setTimeout(handleOpen, openDelay);
      }
    }, [isDisabled, handleOpen, openDelay]);
    const closeWithDelay = _react.default.useCallback(() => {
      if (enterTimeout.current) {
        clearTimeout(enterTimeout.current);
      }
      exitTimeout.current = setTimeout(handleClose, closeDelay);
    }, [closeDelay, handleClose]);
    const tooltipID = (0, _utils.useId)();
    _react.default.useEffect(() => () => {
      clearTimeout(enterTimeout.current);
      clearTimeout(exitTimeout.current);
    }, []);
    const updatedTrigger = reference => {
      return trigger({
        'ref': reference,
        'collapsable': false,
        'accessibilityDescribedBy': isOpen ? tooltipID : undefined,
        'onPress': (0, _utils2.composeEventHandlers)(
        // newChildren.props.onPress,
        () => {
          if (closeOnClick) {
            closeWithDelay();
          }
        }),
        'onFocus': (0, _utils2.composeEventHandlers)(
        // newChildren.props.onFocus,
        openWithDelay),
        'onBlur': (0, _utils2.composeEventHandlers)(
        // newChildren.props.onBlur,
        closeWithDelay),
        'onMouseEnter': (0, _utils2.composeEventHandlers)(
        // newChildren.props.onMouseEnter,
        openWithDelay),
        'onMouseLeave': (0, _utils2.composeEventHandlers)(
        // newChildren.props.onMouseLeave,
        closeWithDelay),
        // 'ref': mergeRefs([newChildren.ref, targetRef]),
        'aria-describedby': isOpen ? tooltipID : undefined
      }, {
        open: isOpen
      });
    };
    const targetRef = _react.default.useRef(null);
    (0, _reactNativeAria.useKeyboardDismissable)({
      enabled: isOpen,
      callback: () => setIsOpen(false)
    });
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
      isOpen: isOpen,
      onRequestClose: handleClose,
      unmountOnExit: true
    }, /*#__PURE__*/_react.default.createElement(_context.TooltipProvider, {
      value: {
        placement,
        targetRef,
        handleClose: handleClose,
        isOpen,
        crossOffset,
        offset,
        shouldOverlapWithTrigger,
        shouldFlip
      }
    }, /*#__PURE__*/_react.default.createElement(StyledTooltip, _extends({}, props, {
      ref: ref,
      accessibilityRole: _reactNative.Platform.OS === 'web' ? 'tooltip' : undefined,
      focussable: false,
      nativeID: tooltipID
    }), children))));
  });
}
//# sourceMappingURL=Tooltip.js.map