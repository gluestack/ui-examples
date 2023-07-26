function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { SliderContext } from './Context';
function SliderTrack(StyledSliderTrack) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
    let {
      children,
      style,
      ...props
    } = _ref;
    const {
      orientation,
      trackProps,
      onTrackLayout,
      sliderSize,
      isDisabled
    } = React.useContext(SliderContext);
    const positionProps = {
      height: orientation ? '100%' : sliderSize,
      width: !orientation ? '100%' : sliderSize
    };
    return /*#__PURE__*/React.createElement(StyledSliderTrack, _extends({
      onLayout: onTrackLayout,
      ref: ref
    }, trackProps, {
      style: {
        ...style,
        ...positionProps
      }
    }, props, {
      isDisabled: isDisabled,
      states: {
        disabled: isDisabled
      },
      disabled: isDisabled
    }), children);
  });
}
export default SliderTrack;
//# sourceMappingURL=SliderTrack.js.map