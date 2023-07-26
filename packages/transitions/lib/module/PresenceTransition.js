function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
// @ts-ignore
import { ExitAnimationContext } from '@gluestack-ui/overlay';
// import { ExitAnimationContext } from '../../primitives/Overlay/ExitAnimationContext';
import { Transition } from './Transition';
// import type { IPresenceTransitionProps } from './types';
// import { useHasResponsiveProps } from '../../@gluestack-ui/hooks/useHasResponsiveProps';

const PresenceTransition = (_ref, ref) => {
  let {
    visible = false,
    onTransitionComplete,
    ...rest
  } = _ref;
  // const [animationExited, setAnimationExited] = React.useState(!visible);

  const {
    setExited
  } = React.useContext(ExitAnimationContext);
  return /*#__PURE__*/React.createElement(Transition, _extends({
    visible: visible,
    onTransitionComplete: state => {
      if (state === 'exited') {
        setExited(true);
      } else {
        setExited(false);
      }
      onTransitionComplete && onTransitionComplete(state);
    }
  }, rest, {
    ref: ref
  }));
};
export default /*#__PURE__*/forwardRef(PresenceTransition);
//# sourceMappingURL=PresenceTransition.js.map