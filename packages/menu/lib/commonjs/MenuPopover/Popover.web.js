"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = Popover;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _overlays = require("@react-aria/overlays");
var _MenuContext = require("../MenuContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Popover(_ref) {
  let {
    StyledBackdrop,
    ...props
  } = _ref;
  const ref = _react.default.useRef(null);
  const {
    state,
    children
  } = props;
  const {
    onClose
  } = _react.default.useContext(_MenuContext.MenuContext);
  const {
    popoverProps,
    underlayProps
  } = (0, _overlays.usePopover)({
    ...props,
    popoverRef: ref,
    isNonModal: true
  }, state);
  if (!state.isOpen) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_overlays.Overlay, null, /*#__PURE__*/_react.default.createElement(StyledBackdrop, _extends({}, underlayProps, {
    onPress: onClose,
    focusable: false,
    "aria-hidden": true
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, popoverProps, {
    ref: ref
  }), /*#__PURE__*/_react.default.createElement(_overlays.DismissButton, {
    onDismiss: state.close
  }), children, /*#__PURE__*/_react.default.createElement(_overlays.DismissButton, {
    onDismiss: state.close
  })));
}
//# sourceMappingURL=Popover.web.js.map