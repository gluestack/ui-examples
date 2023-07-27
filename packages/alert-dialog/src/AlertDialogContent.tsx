import React, { forwardRef } from "react";
import { AlertDialogContext } from "./Context";
import { Platform, AccessibilityInfo, findNodeHandle } from "react-native";
import { FocusScope } from "@react-native-aria/focus";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
import { useDialog } from "@react-native-aria/dialog";
import { mergeRefs } from "@gluestack-ui/utils";

const AlertDialogContent = (
  StyledAlertDialogContent: any,
  AnimatePresence?: any
) =>
  forwardRef(({ children, focusable = false, ...props }: any, ref?: any) => {
    const { handleClose, visible } = React.useContext(AlertDialogContext);

    const contentRef = React.useRef(null);

    const mergedRef = mergeRefs([contentRef, ref]);

    // @ts-ignore
    const { dialogProps } = useDialog({ ...props }, mergedRef);

    return (
      <FocusScope contain={visible}>
        <OverlayAnimatePresence
          visible={visible}
          AnimatePresence={AnimatePresence}
        >
          <StyledAlertDialogContent
            {...props}
            ref={mergedRef}
            onAccessibilityEscape={handleClose}
            exit={true}
            aria-modal="true"
            accessibilityRole={
              Platform.OS === "web" ? "alertdialog" : undefined
            }
            accessibilityViewIsModal
            focusable={Platform.OS === "web" ? focusable : undefined}
            {...dialogProps}
          >
            {children}
          </StyledAlertDialogContent>
        </OverlayAnimatePresence>
      </FocusScope>
    );
  });

export default AlertDialogContent;
