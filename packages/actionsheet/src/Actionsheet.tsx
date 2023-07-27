import React, { forwardRef } from "react";
import { Platform } from "react-native";
import { useControllableState } from "@gluestack-ui/hooks";
import { Overlay } from "@gluestack-ui/overlay";
import { ActionsheetContext } from "./context";
import { StyleSheet } from "react-native";
import type { IActionsheetProps } from "./types";

export function Actionsheet<T>(StyledActionsheet: React.ComponentType<T>) {
  return forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        onOpen,
        closeOnOverlayClick = true,
        unmountOnExit = true,
        snapPoints = [50],
        // @ts-ignore
        _experimentalOverlay = true,
        ...props
      }: T & IActionsheetProps,
      ref?: any
    ) => {
      const overlayStyle = Platform.OS === "web" ? { position: "fixed" } : {};

      const [visible, setVisible] = useControllableState({
        value: isOpen,
        onChange: (val) => {
          if (val === false) {
            onClose && onClose();
          } else {
            onOpen && onOpen();
          }
        },
      });
      const [backdropVisible, setBackdropVisible] = useControllableState({
        value: isOpen,
      });
      const handleClose = React.useCallback(() => {
        setVisible(false);
      }, [setVisible]);

      const handleCloseBackdrop = React.useCallback(() => {
        setBackdropVisible(false);
      }, [setBackdropVisible]);

      const contextValue: any = React.useMemo(() => {
        return {
          handleClose,
          closeOnOverlayClick,
          visible,
          backdropVisible: backdropVisible,
          handleCloseBackdrop,
          snapPoints,
        };
      }, [
        handleClose,
        handleCloseBackdrop,
        closeOnOverlayClick,
        visible,
        backdropVisible,
        snapPoints,
      ]);

      if (!_experimentalOverlay) {
        return (
          <ActionsheetContext.Provider value={contextValue}>
            <StyledActionsheet
              ref={ref}
              style={[StyleSheet.absoluteFill]}
              {...(props as T)}
            >
              {children}
            </StyledActionsheet>
          </ActionsheetContext.Provider>
        );
      }

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          // @ts-ignore
          style={overlayStyle}
          unmountOnExit={unmountOnExit}
        >
          <ActionsheetContext.Provider value={contextValue}>
            <StyledActionsheet
              ref={ref}
              style={[StyleSheet.absoluteFill]}
              {...(props as T)}
            >
              {children}
            </StyledActionsheet>
          </ActionsheetContext.Provider>
        </Overlay>
      );
    }
  );
}
