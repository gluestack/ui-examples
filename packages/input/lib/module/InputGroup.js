function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { InputProvider } from './InputContext';
import { useHover } from '@react-native-aria/interactions';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { mergeRefs } from '@gluestack-ui/utils';
import { useFocusRing } from '@react-native-aria/focus';
export const InputGroup = StyledInputRoot => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    isReadOnly,
    isDisabled,
    isInvalid,
    isRequired,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  } = _ref;
  const inputRef = React.useRef();
  const inputFieldRef = React.useRef(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };
  const inputProps = useFormControlContext();
  const {
    isHovered
  } = useHover({}, inputRef);
  const {
    isFocusVisible
  } = useFocusRing();
  const style = {};
  return /*#__PURE__*/React.createElement(StyledInputRoot, _extends({
    states: {
      hover: isHovered ? isHovered : isHoveredProp,
      focus: isFocusedProp ? isFocusedProp : isFocused,
      disabled: isDisabled || inputProps.isDisabled,
      invalid: isInvalid || inputProps.isInvalid,
      readonly: isReadOnly || inputProps.isReadOnly,
      required: isRequired || inputProps.isRequired,
      focusVisible: isFocusVisibleProp || isFocusVisible
    }
  }, props, style, {
    ref: mergeRefs([inputRef, ref])
  }), /*#__PURE__*/React.createElement(InputProvider, {
    isDisabled: isDisabled || inputProps.isDisabled,
    isInvalid: isInvalid || inputProps.isInvalid,
    isHovered: isHovered ? isHovered : isHoveredProp,
    isFocused: isFocusedProp ? isFocusedProp : isFocused,
    isFocusVisible: isFocusVisibleProp || isFocusVisible,
    isReadOnly: isReadOnly || inputProps.isReadOnly,
    isRequired: isRequired || inputProps.isRequired,
    inputRef: inputRef,
    handleFocus: handleFocus,
    setIsFocused: setIsFocused,
    inputFieldRef: inputFieldRef
  }, children));
});
//# sourceMappingURL=InputGroup.js.map