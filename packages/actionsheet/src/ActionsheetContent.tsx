/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from "react";
import {
  Animated,
  Dimensions,
  findNodeHandle,
  AccessibilityInfo,
  Platform,
} from "react-native";
import { ActionsheetContext } from "./context";
import { ActionsheetContentProvider } from "./ActionsheetContentContext";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
import { FocusScope } from "@react-native-aria/focus";
import { mergeRefs } from "@gluestack-ui/utils";
import { useDialog } from "@react-native-aria/dialog";
import type { IActionsheetContentProps } from "./types";
import { usePreventScroll } from "@react-native-aria/overlays";
const windowHeight = Dimensions.get("window").height;
function ActionsheetContent<T>(
  StyledActionsheetContent: React.ComponentType<T>,
  AnimatePresence?: any
) {
  return forwardRef(
    (
      { children, focusable = true, ...props }: T & IActionsheetContentProps,
      ref?: any
    ) => {
      const {
        visible,
        handleClose,
        trapFocus,
        initialFocusRef,
        handleCloseBackdrop,
        finalFocusRef,
        snapPoints,
      } = React.useContext(ActionsheetContext);

      usePreventScroll();

      const pan = React.useRef(new Animated.ValueXY()).current;
      const contentSheetHeight = React.useRef(0);

      const animationDefaultConfig = {
        type: "timing",
        duration: 200,
      };

      const handleCloseCallback = React.useCallback(handleClose, [
        ActionsheetContext,
        handleClose,
      ]);

      const contentSheetAnimatePosition = React.useMemo(
        () => windowHeight - snapPoints[0] * windowHeight * 0.01,
        [snapPoints]
      );

      const contentRef = React.useRef(null);

      const { dialogProps } = useDialog({ ...props }, contentRef);

      const mergedRef = mergeRefs([ref, contentRef]);

      return (
        <Animated.View
          style={{
            transform: [{ translateY: pan.y }],
            width: "100%",
            height: "100%",
          }}
          pointerEvents="box-none"
        >
          <FocusScope
            contain={trapFocus}
            autoFocus={visible && !initialFocusRef}
            restoreFocus={visible && !finalFocusRef}
          >
            <OverlayAnimatePresence
              visible={visible}
              AnimatePresence={AnimatePresence}
            >
              <StyledActionsheetContent
                initial={{
                  y: windowHeight,
                }}
                animate={{
                  y: contentSheetAnimatePosition,
                }}
                exit={{
                  y: windowHeight,
                }}
                transition={animationDefaultConfig}
                {...(props as T)}
                ref={mergedRef}
                focusable={Platform.OS === "web" ? focusable : undefined}
                {...dialogProps}
              >
                <ActionsheetContentProvider
                  contentSheetHeight={contentSheetHeight}
                  pan={pan}
                  handleClose={handleCloseCallback}
                  handleCloseBackdrop={handleCloseBackdrop}
                  snapPoints={snapPoints}
                >
                  {children}
                </ActionsheetContentProvider>
              </StyledActionsheetContent>
            </OverlayAnimatePresence>
          </FocusScope>
        </Animated.View>
      );
    }
  );
}

export default ActionsheetContent;
