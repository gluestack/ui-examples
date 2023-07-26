"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _SelectContext = require("./SelectContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SelectItem = (StyledSelectItem, StyledSelectItemText) => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    // isDisabled,
    // isFocused,
    // isFocusVisible,
    // isHovered,
    // isInvalid,
    label,
    value,
    ...props
  } = _ref;
  const {
    onValueChange,
    handleClose,
    value: activeValue
  } = _react.default.useContext(_SelectContext.SelectPortalContext);
  if (_reactNative.Platform.OS !== 'web') {
    return /*#__PURE__*/_react.default.createElement(StyledSelectItem, _extends({
      ref: ref,
      onPress: () => {
        if (!props.isDisabled) {
          onValueChange(value);
          handleClose();
        }
      },
      states: {
        active: activeValue === value
      }
    }, props), /*#__PURE__*/_react.default.createElement(StyledSelectItemText, null, label));
  }
  return /*#__PURE__*/_react.default.createElement("option", {
    value: value,
    disabled: props.isDisabled,
    ref: ref
  }, label);
});
exports.SelectItem = SelectItem;
//# sourceMappingURL=SelectItem.js.map