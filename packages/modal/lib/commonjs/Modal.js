"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _hooks = require("@gluestack-ui/hooks");
var _Context = require("./Context");
var _overlay = require("@gluestack-ui/overlay");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-native/no-inline-styles */
const Modal = StyledModal => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    isOpen,
    onClose,
    defaultIsOpen,
    initialFocusRef,
    finalFocusRef,
    avoidKeyboard,
    closeOnOverlayClick = true,
    isKeyboardDismissable = true,
    unmountOnExit = true,
    ...props
  } = _ref;
  const bottomInset = (0, _hooks.useKeyboardBottomInset)();
  const {
    useRNModal,
    ...remainingProps
  } = props;
  const [visible, setVisible] = (0, _hooks.useControllableState)({
    value: defaultIsOpen ?? isOpen,
    onChange: val => {
      if (!val) onClose && onClose();
    }
  });
  const handleClose = _react.default.useCallback(() => {
    setVisible(false);
  }, [setVisible]);
  const avoidKeyboardSpacer = /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      // @ts-ignore
      pointerEvents: 'box-none',
      width: '100%',
      height: avoidKeyboard ? bottomInset : undefined
    }
  });
  const contextValue = _react.default.useMemo(() => {
    return {
      handleClose,
      initialFocusRef,
      finalFocusRef,
      closeOnOverlayClick,
      visible,
      avoidKeyboard,
      bottomInset
    };
  }, [handleClose, initialFocusRef, closeOnOverlayClick, finalFocusRef, avoidKeyboard, bottomInset, visible]);
  return /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
    isOpen: visible,
    onRequestClose: handleClose,
    isKeyboardDismissable: isKeyboardDismissable,
    useRNModal: useRNModal,
    unmountOnExit: unmountOnExit
  }, /*#__PURE__*/_react.default.createElement(_Context.ModalContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(StyledModal, _extends({}, remainingProps, {
    ref: ref
  }), children, avoidKeyboard ? avoidKeyboardSpacer : null)));
});
var _default = Modal;
exports.default = _default;
//# sourceMappingURL=Modal.js.map