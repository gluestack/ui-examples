function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { SliderContext } from './Context';
function SliderFilledTrack(StyledSliderFilledTrack) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
    let {
      style,
      ...props
    } = _ref;
    const {
      isReversed,
      state,
      trackLayout,
      orientation,
      sliderSize,
      isDisabled
    } = React.useContext(SliderContext);
    const getSliderTrackPosition = () => {
      if (orientation === 'vertical') {
        return isReversed ? trackLayout.height - trackLayout.height * state.getThumbPercent(0) : trackLayout.height * state.getThumbPercent(0);
      } else {
        return isReversed ? trackLayout.width - trackLayout.width * state.getThumbPercent(0) : trackLayout.width * state.getThumbPercent(0);
      }
    };
    const sliderTrackPosition = getSliderTrackPosition();
    const positionProps = orientation === 'vertical' ? {
      height: sliderTrackPosition,
      width: sliderSize
    } : {
      width: sliderTrackPosition,
      height: sliderSize
    };
    return /*#__PURE__*/React.createElement(StyledSliderFilledTrack, _extends({}, props, {
      ref: ref,
      style: {
        ...style,
        ...positionProps
      },
      states: {
        disabled: isDisabled
      },
      disabled: isDisabled
    }));
  });
}
export default SliderFilledTrack;
//# sourceMappingURL=SliderFilledTrack.js.map