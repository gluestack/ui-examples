import React, { forwardRef } from 'react';
import { Animated, PanResponder } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
import { useActionsheetContent } from './ActionsheetContentContext';

export function ActionsheetDragIndicatorWrapper<T>(
  StyledActionsheetDragIndicatorWrapper: React.ComponentType<T>
) {
  return forwardRef((props: T, ref?: any) => {
    const { pan, handleClose, contentSheetHeight, handleCloseBackdrop } =
      useActionsheetContent('ActionsheetContentContext');

    const handleCloseRef = React.useRef(null);

    const panResponder = React.useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (_evt, gestureState) => {
          return gestureState.dy > 15;
        },
        onPanResponderMove: (e, gestureState) => {
          if (gestureState.dy > 0) {
            Animated.event([null, { dy: pan.y }], {
              useNativeDriver: false,
            })(e, gestureState);
          }
        },
        onPanResponderRelease: (_e, gestureState) => {
          if (contentSheetHeight.current / 4 < gestureState.dy) {
            handleCloseBackdrop();
            Animated.timing(pan, {
              toValue: { x: 0, y: contentSheetHeight.current },
              duration: 200,
              useNativeDriver: true,
            }).start(handleClose);
          } else {
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              overshootClamping: true,
              useNativeDriver: true,
            }).start();
          }
        },
      })
    ).current;

    const mergedRef = mergeRefs([ref, handleCloseRef]);

    return (
      <StyledActionsheetDragIndicatorWrapper
        {...panResponder.panHandlers}
        {...(props as T)}
        ref={mergedRef}
      />
    );
  });
}
