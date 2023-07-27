import { useFocusRing, useFocus } from "@react-native-aria/focus";
import React, { forwardRef, createContext } from "react";
import { composeEventHandlers } from "@gluestack-ui/utils";
import { usePress, useHover } from "@react-native-aria/interactions";
import type { InterfaceActionsheetItemProps } from "./types";
export const ActionsheetContext = createContext<any>({});

export function ActionsheetItem<T>(
  StyledActionsheetItem: React.ComponentType<T>
) {
  return forwardRef(
    (
      {
        children,
        isDisabled,
        isHovered: isHoveredProp,
        isPressed: isPressedProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        ...props
      }: T & InterfaceActionsheetItemProps,
      ref?: any
    ) => {
      return (
        <StyledActionsheetItem
          ref={ref}
          disabled={isDisabled}
          {...(props as T)}
          states={{
            // @ts-ignore
            active: isPressedProp || isPressed || props?.states?.active,
            disabled: isDisabled,
          }}
        >
          {children}
        </StyledActionsheetItem>
      );
    }
  );
}
