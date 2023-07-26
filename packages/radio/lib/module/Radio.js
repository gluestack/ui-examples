function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, memo } from 'react';
import { useFocusRing } from '@react-native-aria/focus';
import { RadioProvider } from './RadioProvider';
import { useRadio } from '@react-native-aria/radio';
import { useRadioGroup } from './RadioGroupContext';
import { useFocus, useIsPressed, useHover } from '@gluestack-ui/react-native-aria';
import { stableHash, composeEventHandlers } from '@gluestack-ui/utils';
import { useFormControlContext } from '@gluestack-ui/form-control';
const RadioComponent = /*#__PURE__*/memo( /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    StyledRadio,
    inputProps,
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
    _onPress,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    children,
    ...props
  } = _ref;
  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...restProps
  } = combinedProps;
  const {
    hoverProps,
    isHovered
  } = useHover();
  const {
    pressableProps,
    isPressed
  } = useIsPressed();
  const {
    focusProps,
    isFocused
  } = useFocus();
  const {
    disabled: isDisabled,
    checked: isChecked
  } = inputProps;
  const {
    focusProps: focusRingProps,
    isFocusVisible
  } = useFocusRing();
  return /*#__PURE__*/React.createElement(StyledRadio, _extends({
    disabled: isDisabled || isDisabledProp
  }, pressableProps, restProps, inputProps, props, {
    ref: ref,
    accessibilityRole: "radio",
    onPressIn: composeEventHandlers(onPressIn, pressableProps.onPressIn),
    onPressOut: composeEventHandlers(onPressOut, pressableProps.onPressOut)
    // @ts-ignore - web only
    ,
    onHoverIn: composeEventHandlers(onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: composeEventHandlers(onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: composeEventHandlers(composeEventHandlers(onFocus, focusProps.onFocus), focusRingProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: composeEventHandlers(composeEventHandlers(onBlur, focusProps.onBlur), focusRingProps.onBlur),
    states: {
      readonly: isReadOnly || isReadOnlyProp,
      intermediate: isIndeterminate || isIndeterminateProp,
      checked: isChecked || isCheckedProp,
      focusVisible: isFocusVisible || isFocusVisibleProp,
      disabled: isDisabled || isDisabledProp,
      invalid: isInvalid || isInvalidProp,
      hover: isHovered || isHoveredProp,
      focus: isFocused || isFocusedProp,
      active: isPressed || isPressedProp
    }
  }), /*#__PURE__*/React.createElement(RadioProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isFocusVisible: isFocused || isFocusVisibleProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isFocused: isFocused || isFocusedProp,
    isPressed: isPressed || isPressedProp
  }, children));
}));
const Radio = StyledRadio => /*#__PURE__*/forwardRef((_ref2, ref) => {
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
  } = _ref2;
  const formControlContext = useFormControlContext();
  const contextState = useRadioGroup('RadioGroupContext');
  const combinedProps = {
    ...formControlContext,
    ...contextState,
    ...props
  };
  const inputRef = React.useRef(null);
  const {
    inputProps
  } = useRadio({
    ...combinedProps,
    'aria-label': props['aria-label'] ?? props.accessibilityLabel,
    children
  }, contextState.state ?? {}, inputRef);
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
//# sourceMappingURL=Radio.js.map