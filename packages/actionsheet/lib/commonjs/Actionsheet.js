"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actionsheet = Actionsheet;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _hooks = require("@gluestack-ui/hooks");
var _overlay = require("@gluestack-ui/overlay");
var _context = require("./context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Actionsheet(StyledActionsheet) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
    let {
      children,
      isOpen,
      onClose,
      onOpen,
      defaultIsOpen = false,
      trapFocus = true,
      closeOnOverlayClick = true,
      isKeyboardDismissable = true,
      useRNModal,
      initialFocusRef,
      finalFocusRef,
      unmountOnExit = true,
      ...props
    } = _ref;
    const overlayStyle = _reactNative.Platform.OS === 'web' ? {
      position: 'fixed'
    } : {};
    const [visible, setVisible] = (0, _hooks.useControllableState)({
      value: isOpen,
      defaultValue: defaultIsOpen,
      onChange: val => {
        if (!val) {
          onClose && onClose();
        } else {
          onOpen && onOpen();
        }
      }
    });
    const handleClose = _react.default.useCallback(() => {
      setVisible(false);
    }, [setVisible]);
    const contextValue = _react.default.useMemo(() => {
      return {
        handleClose,
        closeOnOverlayClick,
        visible,
        trapFocus,
        initialFocusRef,
        finalFocusRef
      };
    }, [handleClose, closeOnOverlayClick, visible, trapFocus, initialFocusRef, finalFocusRef]);
    return /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
      isOpen: visible,
      onRequestClose: handleClose,
      isKeyboardDismissable: isKeyboardDismissable,
      useRNModal: useRNModal
      // @ts-ignore
      ,
      style: overlayStyle,
      unmountOnExit: unmountOnExit
    }, /*#__PURE__*/_react.default.createElement(_context.ActionsheetContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/_react.default.createElement(StyledActionsheet, _extends({
      ref: ref,
      style: [_reactNative.StyleSheet.absoluteFill]
    }, props), children)));
  });
}
//# sourceMappingURL=Actionsheet.js.map