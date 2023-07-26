"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SelectContext = require("./SelectContext");
var _interactions = require("@react-native-aria/interactions");
var _hooks = require("@gluestack-ui/hooks");
var _formControl = require("@gluestack-ui/form-control");
var _focus = require("@react-native-aria/focus");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Select = StyledSelect => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    selectedValue: selectedOption,
    onValueChange,
    defaultValue,
    onClose,
    onOpen,
    closeOnOverlayClick,
    ...props
  } = _ref;
  const [isFocused, setIsFocused] = _react.default.useState(false);
  const {
    isFocusVisible,
    focusProps
  } = (0, _focus.useFocusRing)();
  const hoverRef = _react.default.useRef(null);
  const {
    hoverProps,
    isHovered
  } = (0, _interactions.useHover)({
    isDisabled
  }, hoverRef);
  const [value, setValue] = (0, _hooks.useControllableState)({
    value: selectedOption,
    defaultValue,
    onChange: newValue => {
      onValueChange && onValueChange(newValue);
    }
  });
  const [isOpen, setIsOpen] = _react.default.useState(false);
  const handleClose = _react.default.useCallback(() => {
    setIsOpen(false);
    onClose && onClose();
  }, [onClose, setIsOpen]);
  const inputProps = (0, _formControl.useFormControlContext)();
  const contextValue = _react.default.useMemo(() => {
    return {
      isHovered: isHovered || isHoveredProp,
      isFocused: isFocused || isFocusedProp,
      isDisabled: isDisabled || inputProps.isDisabled,
      isInvalid: isInvalid || inputProps.isInvalid,
      isRequired: isRequired || inputProps.isRequired,
      isReadOnly: isReadOnly || inputProps.isReadOnly,
      hoverRef: hoverRef,
      hoverProps: hoverProps,
      isFocusVisible: isFocusVisibleProp || isFocusVisible,
      setIsOpen: setIsOpen,
      onOpen: onOpen,
      isOpen: isOpen,
      onValueChange: setValue,
      handleClose: handleClose,
      closeOnOverlayClick: closeOnOverlayClick,
      value: value,
      setFocused: setIsFocused,
      focusProps: focusProps,
      setvalue: setValue
    };
  }, [closeOnOverlayClick, handleClose, hoverProps, isDisabled, isFocusVisible, isFocusVisibleProp, isFocused, isFocusedProp, isHovered, isHoveredProp, isInvalid, isOpen, onOpen, setValue, value, setIsFocused, focusProps, isRequired, inputProps, isReadOnly]);
  return /*#__PURE__*/_react.default.createElement(StyledSelect, _extends({
    ref: ref,
    accessibilityRole: "button",
    focusable: false
  }, props), /*#__PURE__*/_react.default.createElement(_SelectContext.SelectContext.Provider, {
    value: contextValue
  }, children));
});
exports.Select = Select;
//# sourceMappingURL=Select.js.map