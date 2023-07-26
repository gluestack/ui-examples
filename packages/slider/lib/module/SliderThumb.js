function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useSliderThumb } from '@react-native-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SliderContext } from './Context';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '@gluestack-ui/utils';
function SliderThumb(StyledSliderThumb, StyledSliderThumbInteraction) {
  return /*#__PURE__*/forwardRef((_ref2, ref) => {
    let {
      children,
      onFocus,
      onBlur,
      scaleOnPressed = 1,
      style,
      ...props
    } = _ref2;
    const [isPressed, setIsPressed] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const handleFocus = (focusState, callback) => {
      setIsFocused(focusState);
      callback();
    };
    const _ref = React.useRef(null);
    const {
      isHovered
    } = useHover({}, _ref);
    const {
      state,
      trackLayout,
      orientation,
      thumbSize,
      isDisabled
    } = React.useContext(SliderContext);
    const inputRef = React.useRef(null);
    const {
      thumbProps,
      inputProps
    } = useSliderThumb({
      index: 0,
      trackLayout,
      inputRef,
      orientation
    }, state);
    React.useEffect(() => {
      setIsPressed(state.isThumbDragging(0));
    }, [state]);
    const thumbStyles = {
      bottom: orientation === 'vertical' ? `${state.getThumbPercent(0) * 100}%` : undefined,
      left: orientation !== 'vertical' ? `${state.getThumbPercent(0) * 100}%` : undefined,
      transform: orientation === 'vertical' ? [{
        translateY: parseInt(thumbSize) / 2
      }] : [{
        translateX: -parseInt(thumbSize) / 2
      }]
    };
    thumbStyles.transform.push({
      scale: state.isThumbDragging(0) ? scaleOnPressed : 1
    });
    return /*#__PURE__*/React.createElement(StyledSliderThumb, _extends({
      states: {
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        disabled: isDisabled
      },
      disabled: isDisabled
    }, thumbProps, {
      style: {
        ...style,
        ...thumbStyles
      },
      onFocus: e => {
        handleFocus(true, onFocus ? () => onFocus(e) : () => {});
      },
      onBlur: e => {
        handleFocus(false, onBlur ? () => onBlur(e) : () => {});
      }
      // {...(isReadOnly && _readOnly)}
      // {...(isDisabled && _disabled)}
      ,
      ref: mergeRefs([_ref, ref])
    }, props), /*#__PURE__*/React.createElement(StyledSliderThumbInteraction, {
      states: {
        hover: isHovered,
        focus: isFocused,
        active: isPressed
      }
    }, children, Platform.OS === 'web' && /*#__PURE__*/React.createElement(VisuallyHidden, null, /*#__PURE__*/React.createElement("input", _extends({
      ref: inputRef
    }, inputProps)))));
  });
}
export default SliderThumb;
//# sourceMappingURL=SliderThumb.js.map