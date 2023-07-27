function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { forwardRef, createContext } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { usePress, useHover } from '@react-native-aria/interactions';
export const ActionsheetContext = /*#__PURE__*/createContext({});
export function ActionsheetItem(StyledActionsheetItem) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
    var _props$states;
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
      pressProps,
      isPressed
    } = usePress({
      isDisabled
    });
    const {
      isFocused,
      focusProps
    } = useFocus();
    const {
      isHovered,
      hoverProps
    } = useHover();
    return /*#__PURE__*/React.createElement(StyledActionsheetItem, _extends({
      ref: ref,
      disabled: isDisabled,
      onPressIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressIn, pressProps.onPressIn),
      onPressOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressOut, pressProps.onPressOut)
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
    }, props, {
      states: {
        hover: isHoveredProp || isHovered,
        focus: isFocusedProp || isFocused,
        // @ts-ignore
        active: isPressedProp || isPressed || (props === null || props === void 0 ? void 0 : (_props$states = props.states) === null || _props$states === void 0 ? void 0 : _props$states.active),
        disabled: isDisabled,
        focusVisible: isFocusVisibleProp || isFocusVisible
      }
    }), children);
  });
}
//# sourceMappingURL=ActionsheetItem.js.map