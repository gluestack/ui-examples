"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = Switch;
var _react = _interopRequireWildcard(require("react"));
var _interactions = require("@react-native-aria/interactions");
var _toggle = require("@react-stately/toggle");
var _formControl = require("@gluestack-ui/form-control");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Switch(StyledSwitch) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
    let {
      disabled,
      isDisabled,
      isInvalid,
      defaultValue,
      accessibilityLabel,
      accessibilityHint,
      onToggle,
      value,
      onValueChange,
      ...props
    } = _ref2;
    const formControlContext = (0, _formControl.useFormControlContext)();
    const combinedProps = {
      ...formControlContext,
      ...props
    };
    const state = (0, _toggle.useToggleState)({
      defaultSelected: !(defaultValue === null || defaultValue === undefined) ? defaultValue : !(value === null || value === undefined) ? value : false
    });
    const checked = !(value === null || value === undefined) ? value : state.isSelected;
    const _ref = _react.default.useRef(null);
    const {
      isHovered
    } = (0, _interactions.useHover)({}, _ref);
    const mergedRef = (0, _utils.mergeRefs)([ref, _ref]);
    return /*#__PURE__*/_react.default.createElement(StyledSwitch, _extends({
      states: {
        hover: isHovered,
        disabled: disabled || isDisabled || combinedProps.isDisabled,
        invalid: isInvalid || combinedProps.isInvalid,
        checked: value || checked
      },
      accessibilityLabel: accessibilityLabel,
      accessibilityHint: accessibilityHint,
      disabled: disabled || isDisabled || combinedProps.isDisabled,
      onValueChange: val => {
        onValueChange && onValueChange(val);
        onToggle ? onToggle(val) : state.toggle();
      },
      value: value || checked
    }, combinedProps, {
      ref: mergedRef
    }));
  });
}
//# sourceMappingURL=Switch.js.map