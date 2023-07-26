"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectTrigger = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SelectContext = require("./SelectContext");
var _utils = require("@gluestack-ui/utils");
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SelectTrigger = StyledSelectTrigger => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    accessibilityLabel,
    ...props
  } = _ref;
  const {
    isDisabled,
    hoverRef,
    setIsOpen,
    onOpen,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isReadOnly
  } = _react.default.useContext(_SelectContext.SelectContext);
  return /*#__PURE__*/_react.default.createElement(StyledSelectTrigger, _extends({
    onPress: () => {
      if (!isReadOnly) {
        _reactNative.Keyboard.dismiss();
        setIsOpen(true);
        onOpen && onOpen();
      }
    },
    states: {
      focus: isFocused,
      focusvisible: isFocusVisible,
      hover: isHovered,
      disabled: isDisabled,
      invalid: isInvalid
    },
    disabled: isDisabled,
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "button",
    ref: (0, _utils.mergeRefs)([ref, hoverRef]),
    focusable: false
  }, props), children);
});
exports.SelectTrigger = SelectTrigger;
//# sourceMappingURL=SelectTrigger.js.map