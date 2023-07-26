function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useFormControl } from '@gluestack-ui/form-control';
import { useInput } from './InputContext';
import { mergeRefs } from '@gluestack-ui/utils';
export const Input = StyledInput => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    onKeyPress,
    type = 'text',
    accessibilityLabel = 'Input Field',
    accessibilityHint,
    accessibilityRole = 'text',
    ...props
  } = _ref;
  const {
    isDisabled,
    isReadOnly,
    isFocused,
    isInvalid,
    setIsFocused,
    isHovered,
    isFocusVisible,
    inputFieldRef,
    isRequired
  } = useInput('InputContext');
  const inputProps = useFormControl({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    nativeID: props.nativeID
  });
  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };
  const mergedref = mergeRefs([ref, inputFieldRef]);
  return /*#__PURE__*/React.createElement(StyledInput, _extends({}, props, {
    states: {
      focus: isFocused,
      invalid: isInvalid,
      readonly: isReadOnly,
      required: isRequired,
      hover: isHovered,
      focusVisible: isFocusVisible,
      disabled: isDisabled || inputProps.isDisabled
    },
    disabled: isDisabled || inputProps.isDisabled,
    secureTextEntry: type === 'password',
    accessible: true,
    accessibilityLabel: accessibilityLabel,
    accessibilityHint: accessibilityHint,
    accessibilityRole: accessibilityRole,
    accessibilityRequired: isRequired || inputProps.isRequired,
    accessibilityInvalid: isInvalid || inputProps.isInvalid,
    accessibilityState: {
      invalid: isInvalid || inputProps.isInvalid,
      disabled: isDisabled || inputProps.isDisabled,
      selected: isFocused
    },
    accessibilityElementsHidden: isDisabled,
    editable: isDisabled || isReadOnly ? false : true,
    onKeyPress: e => {
      e.persist();
      onKeyPress && onKeyPress(e);
    },
    onFocus: e => {
      handleFocus(true, props !== null && props !== void 0 && props.onFocus ? () => props === null || props === void 0 ? void 0 : props.onFocus(e) : () => {});
    },
    onBlur: e => {
      handleFocus(false, props !== null && props !== void 0 && props.onBlur ? () => props === null || props === void 0 ? void 0 : props.onBlur(e) : () => {});
    },
    ref: mergedref
  }), children);
});
//# sourceMappingURL=Input.js.map