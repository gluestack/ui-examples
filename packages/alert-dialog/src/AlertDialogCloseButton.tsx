import React, { forwardRef } from "react";
import { AlertDialogContext } from "./Context";
import { useHover, usePress } from "@react-native-aria/interactions";
import { composeEventHandlers } from "@gluestack-ui/utils";
import { useFocusRing, useFocus } from "@react-native-aria/focus";
// @ts-ignore

const AlertDialogCloseButton = (StyledAlertDialogCloseButton: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { ...resolvedProps } = props;
    const { handleClose } = React.useContext(AlertDialogContext);

    return (
      <StyledAlertDialogCloseButton
        accessibilityRole="button"
        ref={ref}
        {...resolvedProps}
      >
        {children}
      </StyledAlertDialogCloseButton>
    );
  });

export default AlertDialogCloseButton;
