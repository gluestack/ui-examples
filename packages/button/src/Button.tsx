import { useFocusRing, useFocus } from "@react-native-aria/focus";
import React, { createContext, forwardRef } from "react";
import { composeEventHandlers } from "@gluestack-ui/utils";
import { useHover, usePress } from "@react-native-aria/interactions";

import type { IButtonProps } from "./types";

export const ButtonContext = createContext<any>({});

export const Button = <T,>(StyledButton: React.ComponentType<T>) =>
  forwardRef(({ children, ...props }: T & IButtonProps, ref?: any) => {
    return (
      <StyledButton
        ref={ref}
        accessibilityRole={props?.accessibilityRole || "button"}
        {...(props as T)}
      >
        {children}
      </StyledButton>
    );
  });
