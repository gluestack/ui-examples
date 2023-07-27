import React, { forwardRef } from "react";
import { ModalContext } from "./Context";
import { useHover, usePress } from "@react-native-aria/interactions";
import { composeEventHandlers } from "@gluestack-ui/utils";
import { useFocusRing, useFocus } from "@react-native-aria/focus";

const ModalCloseButton = (StyledModalCloseButton: any) =>
  forwardRef((props: any, ref?: any) => {
    const { children, ...resolvedProps } = props;
    const { handleClose } = React.useContext(ModalContext);

    return (
      <StyledModalCloseButton
        accessibilityRole="button"
        ref={ref}
        onPress={handleClose}
        {...resolvedProps}
      >
        {children}
      </StyledModalCloseButton>
    );
  });

export default ModalCloseButton;
