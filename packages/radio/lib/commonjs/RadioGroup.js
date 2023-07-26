"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _radio = require("@react-native-aria/radio");
var _radio2 = require("@react-stately/radio");
var _RadioGroupContext = require("./RadioGroupContext");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RadioGroup = StyledRadioGroup => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    isInvalid,
    ...props
  } = _ref;
  const formControlContext = (0, _formControl.useFormControlContext)();
  const state = (0, _radio2.useRadioGroupState)({
    ...props,
    validationState: isInvalid ? 'invalid' : 'valid'
  });
  const radioGroupState = (0, _radio.useRadioGroup)({
    ...formControlContext,
    ...props,
    'aria-label': props.accessibilityLabel
  }, state);
  const contextValue = _react.default.useMemo(() => {
    return {
      ...formControlContext,
      ...state
    };
  }, [formControlContext, state]);
  const radioGroupProps = _react.default.useMemo(() => radioGroupState.radioGroupProps,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return /*#__PURE__*/_react.default.createElement(_RadioGroupContext.RadioGroupProvider, {
    state: contextValue
  }, /*#__PURE__*/_react.default.createElement(StyledRadioGroup, _extends({}, radioGroupProps, props, {
    ref: ref
  }), children));
});
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map