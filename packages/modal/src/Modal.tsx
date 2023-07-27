/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import React, { forwardRef } from "react";
import { View } from "react-native";
import {
  useControllableState,
  useKeyboardBottomInset,
} from "@gluestack-ui/hooks";
import { ModalContext } from "./Context";
import { Overlay } from "@gluestack-ui/overlay";

const Modal = (StyledModal: any) =>
  forwardRef(({ children, isOpen, onClose, ...props }: any, ref?: any) => {
    const bottomInset = useKeyboardBottomInset();

    const { useRNModal, ...remainingProps } = props;

    const [visible, setVisible] = useControllableState({
      value: isOpen,
      onChange: (val) => {
        if (!val) onClose && onClose();
      },
    });

    const handleClose = React.useCallback(() => {
      setVisible(false);
    }, [setVisible]);

    const avoidKeyboardSpacer = (
      <View
        style={{
          // @ts-ignore
          pointerEvents: "box-none",
          width: "100%",
        }}
      />
    );

    const contextValue = React.useMemo(() => {
      return {
        handleClose,
        closeOnOverlayClick: true,
        visible,
        bottomInset,
      };
    }, [handleClose, bottomInset, visible]);

    return (
      <Overlay
        isOpen={visible}
        onRequestClose={handleClose}
        useRNModal={useRNModal}
      >
        <ModalContext.Provider value={contextValue}>
          <StyledModal {...remainingProps} ref={ref}>
            {children}
          </StyledModal>
        </ModalContext.Provider>
      </Overlay>
    );
  });

export default Modal;
