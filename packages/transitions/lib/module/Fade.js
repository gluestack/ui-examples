function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PresenceTransition from './PresenceTransition';
// import type { IFadeProps } from './types';

const Fade = (_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    in: animationState,
    // entryDuration,
    // exitDuration,
    ...resolvedProps
  } = props;

  // if (entryDuration) {
  //   resolvedProps.animate.transition.duration = entryDuration;
  // }
  // if (exitDuration) {
  //   resolvedProps.exit.transition.duration = exitDuration;
  // }

  return /*#__PURE__*/React.createElement(PresenceTransition, _extends({
    visible: animationState,
    ref: ref
  }, resolvedProps), children);
};
export default /*#__PURE__*/React.forwardRef(Fade);
//# sourceMappingURL=Fade.js.map