function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { ProgressProvider } from './ProgressContext';
const useProgress = _ref => {
  let {
    min,
    max,
    value
  } = _ref;
  const valueWidth = value < max && value > min ? (value - min) / (max - min) * 100 : value > min ? 100 : 0;
  return {
    'accessible': true,
    'role': 'progressbar',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': valueWidth,
    'aria-valuetext': `${valueWidth}%`,
    valueWidth,
    'accessibilityRole': 'progressbar',
    'accessibilityValueNow': valueWidth,
    'accessibilityValueMin': min,
    'accessibilityValueMax': max,
    'accessibilityValueText': `${valueWidth}%`
  };
};
export function Progress(StyledProgress) {
  return /*#__PURE__*/forwardRef((_ref2, ref) => {
    let {
      children,
      min = 0,
      max = 100,
      value = 0,
      ...props
    } = _ref2;
    const progressProps = useProgress({
      min,
      max,
      value
    });
    return /*#__PURE__*/React.createElement(StyledProgress, _extends({
      ref: ref
    }, progressProps, props), /*#__PURE__*/React.createElement(ProgressProvider, {
      min: min,
      max: max,
      valueWidth: progressProps.valueWidth
    }, children));
  });
}
//# sourceMappingURL=Progress.js.map