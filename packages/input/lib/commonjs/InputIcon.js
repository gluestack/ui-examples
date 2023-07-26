"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputIcon = void 0;
var _react = _interopRequireWildcard(require("react"));
var _InputContext = require("./InputContext");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const InputIcon = StyledInputIcon => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    inputFieldRef,
    isDisabled
  } = (0, _InputContext.useInput)('InputContext');
  const handleFocus = () => {
    var _inputFieldRef$curren;
    inputFieldRef === null || inputFieldRef === void 0 ? void 0 : (_inputFieldRef$curren = inputFieldRef.current) === null || _inputFieldRef$curren === void 0 ? void 0 : _inputFieldRef$curren.focus();
  };
  const inputProps = (0, _formControl.useFormControl)({
    isDisabled: props.isDisabled
  });
  return /*#__PURE__*/_react.default.createElement(StyledInputIcon, _extends({
    states: {
      disabled: isDisabled || inputProps.isDisabled
    },
    onPress: handleFocus,
    accessibilityElementsHidden: true,
    focusable: false,
    ref: ref
  }, props), children);
});
exports.InputIcon = InputIcon;
//# sourceMappingURL=InputIcon.js.map