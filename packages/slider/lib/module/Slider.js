function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useSliderState } from '@react-stately/slider';
import { useLayout } from '@gluestack-ui/hooks';
import { SliderContext } from './Context';
import { useSlider } from '@react-native-aria/slider';
import { useFormControlContext } from '@gluestack-ui/form-control';
function Slider(StyledSlider) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
    let {
      orientation,
      isReversed,
      thumbSize = 16,
      sliderTrackHeight = 8,
      children,
      ...props
    } = _ref;
    const formControlContext = useFormControlContext();
    const {
      isDisabled,
      isReadOnly,
      ...newProps
    } = {
      ...formControlContext,
      ...props,
      'aria-label': props.accessibilityLabel ?? 'Slider'
    };
    if (typeof props.value === 'number') {
      //@ts-ignore - React Native Aria slider accepts array of values
      newProps.value = [props.value];
    }
    if (typeof props.defaultValue === 'number') {
      //@ts-ignore - React Native Aria slider accepts array of values
      newProps.defaultValue = [props.defaultValue];
    }
    props = newProps;
    const {
      onLayout,
      layout: trackLayout
    } = useLayout();
    const updatedProps = Object.assign({}, props);
    if (isReadOnly || isDisabled) {
      updatedProps.isDisabled = true;
    }
    const state = useSliderState({
      ...updatedProps,
      //@ts-ignore
      numberFormatter: {
        format: e => e
      },
      minValue: props.minValue,
      maxValue: props.maxValue,
      onChange: val => {
        props.onChange && props.onChange(val[0]);
      },
      onChangeEnd: val => {
        props.onChangeEnd && props.onChangeEnd(val[0]);
      }
    });
    const {
      trackProps
    } = useSlider(props, state, trackLayout);
    const contextValue = React.useMemo(() => {
      return {
        trackLayout,
        state,
        orientation: orientation,
        isDisabled: isDisabled,
        isReversed: isReversed,
        trackProps,
        isReadOnly: isReadOnly,
        onTrackLayout: onLayout,
        thumbSize: thumbSize,
        sliderSize: sliderTrackHeight
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trackLayout, state, orientation, isDisabled, isReversed, isReadOnly, onLayout, thumbSize, sliderTrackHeight]);
    return /*#__PURE__*/React.createElement(SliderContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(StyledSlider, _extends({}, props, {
      ref: ref
    }), children));
  });
}
export default Slider;
//# sourceMappingURL=Slider.js.map