"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroupContext = exports.CheckboxGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _checkbox = require("@react-native-aria/checkbox");
var _checkbox2 = require("@react-stately/checkbox");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CheckboxGroupContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.CheckboxGroupContext = CheckboxGroupContext;
const CheckboxGroup = StyledCheckboxGroup => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const state = (0, _checkbox2.useCheckboxGroupState)({
    ...props,
    validationState: props.isInvalid ? 'invalid' : 'valid'
  });
  const {
    groupProps
  } = (0, _checkbox.useCheckboxGroup)({
    'aria-label': props.accessibilityLabel,
    ...props
  },
  //@ts-ignore
  state);
  const formControlContext = (0, _formControl.useFormControlContext)();
  return /*#__PURE__*/_react.default.createElement(CheckboxGroupContext.Provider, {
    value: {
      state: {
        ...formControlContext,
        ...state
      }
    }
  }, /*#__PURE__*/_react.default.createElement(StyledCheckboxGroup, _extends({}, groupProps, props, {
    ref: ref
  }), children));
});
exports.CheckboxGroup = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map