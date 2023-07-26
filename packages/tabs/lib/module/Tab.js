function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useFocusRing } from '@react-native-aria/focus';
import React, { memo } from 'react';
import { forwardRef } from 'react';
import { useFocus, useHover, useIsPressed } from '@gluestack-ui/react-native-aria';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useTab } from './TabProvider';
export const Tab = StyledTab => /*#__PURE__*/memo( /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    value,
    children,
    ...props
  } = _ref;
  const {
    focusProps: focusRingProps,
    isFocusVisible
  } = useFocusRing();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  const [isActive, setIsActive] = React.useState(false);
  const {
    onChange,
    currentActiveTab
  } = useTab('TabContext');
  React.useEffect(() => {
    setIsActive(value === currentActiveTab);
  }, [value, currentActiveTab]);
  return /*#__PURE__*/React.createElement(StyledTab, _extends({
    accessibilityRole: "tab",
    ref: ref,
    states: {
      hover: isHovered,
      focus: isFocused,
      active: isActive,
      focusvisible: isFocusVisible
    }
  }, props, {
    onPressIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressIn, pressableProps.onPressIn),
    onPressOut: () => onChange(value)
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
  }), typeof children === 'function' ? children({
    hovered: isHovered,
    active: isActive,
    pressed: isPressed,
    focused: isFocused
  }) : children);
}));
//# sourceMappingURL=Tab.js.map