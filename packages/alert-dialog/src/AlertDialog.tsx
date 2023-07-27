//@ts-nocheck
import React, { forwardRef } from "react";
import { View } from "react-native";
import { AlertDialogContext } from "./Context";
import { Overlay } from "@gluestack-ui/overlay";
import type { IAlertDialogProps } from "./types";
import {
  useControllableState,
  useKeyboardBottomInset,
} from "@gluestack-ui/hooks";

export const AlertDialog = <T,>(StyledAlertDialog: React.ComponentType<T>) =>
  forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        closeOnOverlayClick = true,
        ...props
      }: T & IAlertDialogProps,
      ref?: any
    ) => {
      const bottomInset = useKeyboardBottomInset();

      const [visible, setVisible] = useControllableState({
        value: isOpen,
        onChange: (val: any) => {
          if (!val) onClose && onClose();
        },
      });
      const avoidKeyboardSpacer = (
        <View
          style={{
            // @ts-ignore
            pointerEvents: "box-none",
            width: "100%",
          }}
        />
      );

      const handleClose = React.useCallback(
        () => setVisible(false),
        [setVisible]
      );

      const contextValue = React.useMemo(() => {
        return {
          handleClose,

          closeOnOverlayClick,
          bottomInset,
          visible,
        };
      }, [handleClose, closeOnOverlayClick, bottomInset, visible]);

      return (
        <Overlay isOpen={visible} onRequestClose={handleClose}>
          <AlertDialogContext.Provider value={contextValue}>
            <StyledAlertDialog {...(props as T)} ref={ref}>
              {children}
            </StyledAlertDialog>
          </AlertDialogContext.Provider>
        </Overlay>
      );
    }
  );
