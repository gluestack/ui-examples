function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, memo } from 'react';
import { RadioProvider } from './RadioProvider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-native-aria/focus';
import { useHover } from '@react-native-aria/interactions';
import { useRadio } from '@react-native-aria/radio';
import { useRadioGroup } from './RadioGroupContext';
import { stableHash, composeEventHandlers } from '@gluestack-ui/utils';
import { useFormControlContext } from '@gluestack-ui/form-control';
const RadioComponent = /*#__PURE__*/memo( /*#__PURE__*/forwardRef((_ref2, ref) => {
  let {
    StyledRadio,
    inputProps,
    inputRef,
    combinedProps,
    isChecked: isCheckedProp,
    isDisabled: isDisabledProp,
    isFocusVisible: isFocusVisibleProp,
    isHovered: isHoveredProp,
    isInvalid: isInvalidProp,
    isReadOnly: isReadOnlyProp,
    isIndeterminate: isIndeterminateProp,
    isFocused: isFocusedProp,
    isPressed: isPressedProp,
    children,
    ...props
  } = _ref2;
  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...restProps
  } = combinedProps;
  const {
    disabled: isDisabled,
    checked: isChecked
  } = inputProps;
  const _ref = React.useRef(null);
  const {
    isHovered
  } = useHover({}, _ref);
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  const [isFocused, setFocused] = React.useState(isFocusedProp);
  const [isPressed, setPressed] = React.useState(isPressedProp);
  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    isFocusedProp ? setFocused(true) : setFocused(false);
  };
  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    isPressedProp ? setPressed(true) : setPressed(false);
  };
  return /*#__PURE__*/React.createElement(StyledRadio, _extends({}, props, restProps, {
    accessibilityRole: "label",
    ref: _ref,
    onMouseDown: handlePressIn,
    onMouseUp: handlePressOut,
    states: {
      readonly: isReadOnly,
      intermediate: isIndeterminate,
      checked: isChecked,
      focusVisible: isFocusVisible,
      disabled: isDisabled,
      invalid: isInvalid,
      hover: isHovered
    }
  }), /*#__PURE__*/React.createElement(RadioProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isFocusVisible: isFocusVisible || isFocusVisibleProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isFocused: isFocused || isFocusedProp,
    isPressed: isPressed || isPressedProp
  }, /*#__PURE__*/React.createElement(VisuallyHidden, null, /*#__PURE__*/React.createElement("input", _extends({}, inputProps, focusProps, {
    ref: ref,
    onFocus: (composeEventHandlers(handleFocus), focusProps.onFocus),
    onBlur: (composeEventHandlers(handleBlur), focusProps.onBlur)
  }))), children));
}));
const Radio = StyledRadio => /*#__PURE__*/forwardRef((_ref3, ref) => {
  var _contextCombinedProps;
  let {
    isFocusVisible: isFocusVisibleProp,
    isHovered: isHoveredProp,
    isIndeterminate: isIndeterminateProp,
    isFocused: isFocusedProp,
    isPressed: isPressedProp,
    isInvalid: isInvalidProp,
    children,
    ...props
  } = _ref3;
  const formControlContext = useFormControlContext();
  const contextState = useRadioGroup('RadioGroupContext');
  const combinedProps = {
    ...formControlContext,
    ...contextState,
    ...props
  };
  const inputRef = React.useRef(null);
  const radioState = useRadio({
    ...combinedProps,
    'aria-label': props['aria-label'] ?? props.accessibilityLabel,
    children
  }, contextState.state ?? {}, inputRef);
  const inputProps = React.useMemo(() => radioState.inputProps,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [radioState.inputProps.checked, radioState.inputProps.disabled]);
  const contextCombinedProps = React.useMemo(() => {
    return {
      ...combinedProps
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stableHash(combinedProps)]);
  if (!contextState) {
    console.error('Error: Radio must be wrapped inside a Radio.Group');
  }
  const isInvalid = (contextCombinedProps === null || contextCombinedProps === void 0 ? void 0 : (_contextCombinedProps = contextCombinedProps.state) === null || _contextCombinedProps === void 0 ? void 0 : _contextCombinedProps.validationState) === 'invalid' ? true : false;
  return /*#__PURE__*/React.createElement(RadioComponent, {
    StyledRadio: StyledRadio,
    inputProps: inputProps,
    combinedProps: contextCombinedProps,
    children: children,
    ref: ref,
    isFocusVisible: isFocusVisibleProp,
    isHovered: isHoveredProp,
    isIndeterminate: isIndeterminateProp,
    isFocused: isFocusedProp,
    isPressed: isPressedProp,
    isInvalid: isInvalid || isInvalidProp
  });
});
export { Radio };
//# sourceMappingURL=Radio.web.js.map