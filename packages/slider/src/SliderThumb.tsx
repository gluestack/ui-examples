import React, { forwardRef, useEffect } from 'react';
import { Platform } from 'react-native';
import { useSliderThumb } from '@react-native-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SliderContext } from './Context';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '@gluestack-ui/utils';
import type { ISliderThumbProps } from './types';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';

function SliderThumb<StyledSliderThumb, StyledSliderThumbInteraction>(
  StyledSliderThumb: React.ComponentType<StyledSliderThumb>,
  StyledSliderThumbInteraction: React.ComponentType<StyledSliderThumbInteraction>
) {
  return forwardRef(
    (
      {
        children,
        scaleOnPressed = 1,
        style,
        ...props
      }: StyledSliderThumbInteraction &
        StyledSliderThumbInteraction &
        ISliderThumbProps & { children?: any; style?: any },
      ref?: any
    ) => {
      const [thumbSize, setThumbSize] = React.useState({
        height: 0,
        width: 0,
      });

      const _ref = React.useRef(null);
      const { isHovered } = useHover({}, _ref);

      const {
        state,
        trackLayout,
        orientation,
        isDisabled,
        isReversed,
        isPressed,
        setIsHovered,
        setIsPressed,
        setIsFocused,
        setIsFocusVisible,
      } = React.useContext(SliderContext);

      const inputRef = React.useRef(null);
      const { thumbProps, inputProps } = useSliderThumb(
        {
          index: 0,
          trackLayout,
          inputRef,
          orientation: orientation,
        },
        state
      );
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { isFocused, focusProps } = useFocus();

      const thumbStyles: any = {
        bottom: isReversed
          ? orientation === 'vertical'
            ? `${state.getThumbPercent(0) * 100}%`
            : undefined
          : orientation === 'vertical'
          ? `${state.getThumbPercent(0) * 100}%`
          : undefined,
        left: isReversed
          ? orientation !== 'vertical'
            ? `${state.getThumbPercent(0) * 100}%`
            : undefined
          : orientation !== 'vertical'
          ? `${state.getThumbPercent(0) * 100}%`
          : undefined,
        transform:
          orientation === 'vertical'
            ? [{ translateY: thumbSize?.height / 2 }]
            : [{ translateX: -thumbSize?.height / 2 }],
      };

      thumbStyles?.transform?.push({
        scale: state.isThumbDragging(0) ? scaleOnPressed : 1,
      });

      useEffect(() => {
        setIsPressed(state.isThumbDragging(0));
      }, [state, setIsPressed, isPressed]);

      useEffect(() => {
        setIsFocused(isFocused);
      }, [isFocused, setIsFocused]);

      useEffect(() => {
        setIsFocusVisible(isFocusVisible);
      }, [isFocusVisible, setIsFocusVisible]);

      useEffect(() => {
        setIsHovered(isHovered);
      }, [isHovered, setIsHovered]);

      return (
        <StyledSliderThumb
          onLayout={(layout: any) => {
            setThumbSize({
              height: layout?.nativeEvent?.layout?.height,
              width: layout?.nativeEvent?.layout?.width,
            });
          }}
          states={{
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisible,
          }}
          disabled={isDisabled}
          {...thumbProps}
          style={{
            ...style,
            ...thumbStyles,
          }}
          // @ts-ignore - web only
          onFocus={composeEventHandlers(
            composeEventHandlers(props?.onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          )}
          // @ts-ignore - web only
          onBlur={composeEventHandlers(
            composeEventHandlers(props?.onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          )}
          ref={mergeRefs([_ref, ref])}
          {...props}
        >
          {/* @ts-ignore */}
          <StyledSliderThumbInteraction
            states={{
              hover: isHovered,
              focus: isFocused,
              focusVisible: isFocusVisible,
              disabled: isDisabled,
              active: isPressed,
            }}
          >
            {children}
            {Platform.OS === 'web' && (
              <VisuallyHidden>
                <input ref={inputRef} {...inputProps} />
              </VisuallyHidden>
            )}
          </StyledSliderThumbInteraction>
        </StyledSliderThumb>
      );
    }
  );
}
export default SliderThumb;
