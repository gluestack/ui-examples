function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { TextAreaProvider } from './TextAreaContext';
import { useHover } from '@react-native-aria/interactions';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { mergeRefs } from '@gluestack-ui/utils';
import { useFocusRing } from '@react-native-aria/focus';
export const TextAreaRoot = StyledTextAreaRoot => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    isHovered = false,
    isFocused: isFocusedProp = false,
    isFocusVisible: isFocusVisibleProp,
    ...props
  } = _ref;
  const inputRef = React.useRef();
  const {
    isHovered: isHoveredProp
  } = useHover({}, inputRef);
  const {
    isFocusVisible
  } = useFocusRing();
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };
  const inputProps = useFormControlContext();
  return /*#__PURE__*/React.createElement(StyledTextAreaRoot, _extends({
    states: {
      hover: isHovered ? isHovered : isHoveredProp,
      focus: isFocusedProp ? isFocusedProp : isFocused,
      disabled: isDisabled || inputProps.isDisabled,
      invalid: isInvalid || inputProps.isInvalid,
      readonly: isReadOnly || inputProps.isReadOnly,
      required: isRequired || inputProps.isRequired,
      focusVisible: isFocusVisibleProp || isFocusVisible
    }
  }, props, {
    ref: mergeRefs([inputRef, ref])
  }), /*#__PURE__*/React.createElement(TextAreaProvider, {
    isDisabled: isDisabled || inputProps.isDisabled,
    isInvalid: isInvalid || inputProps.isInvalid,
    isFocused: isFocusedProp ? isFocusedProp : isFocused,
    isHovered: isHovered ? isHovered : isHoveredProp,
    isReadOnly: isReadOnly || inputProps.isReadOnly,
    isRequired: isRequired || inputProps.isRequired,
    inputRef: inputRef,
    handleFocus: handleFocus
  }, children));
});
//# sourceMappingURL=TextAreaRoot.js.map