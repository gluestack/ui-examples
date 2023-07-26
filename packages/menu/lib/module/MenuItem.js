function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useHover, useIsPressed, usePressed } from '@gluestack-ui/react-native-aria';
import { useFocusRing } from '@react-native-aria/focus';
import { useMenuItem } from '@react-native-aria/menu';
import { Platform } from 'react-native';
export function MenuItem(_ref) {
  let {
    StyledMenuItem,
    item,
    state,
    onAction,
    onClose,
    closeOnSelect
  } = _ref;
  // Get props for the menu item element
  const ref = React.useRef(null);
  const {
    menuItemProps
  } = useMenuItem({
    key: item.key,
    onAction,
    onClose,
    closeOnSelect,
    ...item.props
  }, state, ref);

  // Handle focus events so we can apply highlighted
  // style to the focused menu item

  const toggleSelection = useCallback(() => {
    if (Platform.OS === 'web') {
      state.selectionManager.toggleSelection(item.key);
    }
  }, [state.selectionManager, item.key]);
  const {
    focusProps: focusRingProps,
    isFocusVisible
  } = useFocusRing();
  const {
    pressableProps,
    isPressed
  } = useIsPressed();
  const {
    isHovered,
    hoverProps
  } = useHover();
  const isFocused = state.selectionManager.focusedKey === item.key;
  const {
    children,
    ...rest
  } = item.props;
  const {
    pressEvents
  } = usePressed(
  // @ts-ignore
  composeEventHandlers(composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onPressIn, pressableProps.onPressIn), composeEventHandlers(menuItemProps.onPressIn, toggleSelection)), composeEventHandlers(composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onPressOut, pressableProps.onPressOut), menuItemProps.onPressOut));
  return /*#__PURE__*/React.createElement(StyledMenuItem, _extends({}, menuItemProps, {
    ref: ref,
    states: {
      hover: isHovered,
      focus: isFocused,
      active: isPressed,
      focusvisible: isFocusVisible,
      selected: state.selectionManager.isSelected(item.key)
    }
  }, rest, pressEvents, {
    // @ts-ignore - web only
    onHoverIn: composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: composeEventHandlers(composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onFocus, focusRingProps.onFocus), menuItemProps === null || menuItemProps === void 0 ? void 0 : menuItemProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: composeEventHandlers(composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onBlur, focusRingProps.onBlur), menuItemProps === null || menuItemProps === void 0 ? void 0 : menuItemProps.onBlur)
  }), children);
}
//# sourceMappingURL=MenuItem.js.map