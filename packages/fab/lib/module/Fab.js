function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useFocus, useHover, useIsPressed } from '@gluestack-ui/react-native-aria';
import { useFocusRing } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';
function Fab(StyledFab) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
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
    return /*#__PURE__*/React.createElement(StyledFab, _extends({
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
      onPressOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressOut, pressableProps.onPressOut),
      onHoverIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverIn, hoverProps.onHoverIn),
      onHoverOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverOut, hoverProps.onHoverOut),
      onFocus: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus),
      onBlur: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)
    }), children);
  });
}
export default Fab;
//# sourceMappingURL=Fab.js.map