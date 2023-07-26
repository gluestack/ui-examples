function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useProgress } from './ProgressContext';
export function ProgressFilledTrack(StyledProgressFilledTrack) {
  return /*#__PURE__*/forwardRef(
  //@ts-ignore
  (_ref, ref) => {
    let {
      sx,
      ...props
    } = _ref;
    const {
      valueWidth
    } = useProgress('ProgressContext');
    let mysx = {};
    if (sx) {
      sx['w'] = `${valueWidth}%`;
      mysx = sx;
    } else {
      // @ts-ignore
      mysx['w'] = `${valueWidth}%`;
    }
    return /*#__PURE__*/React.createElement(StyledProgressFilledTrack, _extends({}, props, {
      sx: mysx,
      ref: ref
    }));
  });
}
//# sourceMappingURL=ProgressFilledTrack.js.map