function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useFocusRing } from '@react-native-aria/focus';
import React, { createContext, forwardRef } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useFocus, useHover, useIsPressed } from '@gluestack-ui/react-native-aria';
export const ButtonContext = /*#__PURE__*/createContext({});
export const Button = StyledButton => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    isDisabled,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  } = _ref;
  const {
    isFocusVisible,
    focusProps: focusRingProps
  } = useFocusRing();
  const {
    pressableProps,
    isPressed
  } = useIsPressed();
  const {
    isFocused,
    focusProps
  } = useFocus();
  const {
    isHovered,
    hoverProps
  } = useHover();
  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    ref: ref,
    accessibilityRole: (props === null || props === void 0 ? void 0 : props.accessibilityRole) || 'button',
    states: {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisibleProp || isFocusVisible
    },
    disabled: isDisabled
  }, props, {
    onPressIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressIn, pressableProps.onPressIn),
    onPressOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressOut, pressableProps.onPressOut)
    // @ts-ignore - web only
    ,
    onHoverIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)
    // ref={ref}
  }), children);
});
//# sourceMappingURL=Button.js.map