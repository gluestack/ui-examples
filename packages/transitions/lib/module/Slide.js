function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import React, { forwardRef, memo } from 'react';
import { Overlay } from '@gluestack-ui/overlay';
import PresenceTransition from './PresenceTransition';
import { View } from 'react-native';
const holderStyle = {
  top: {
    top: 0,
    right: 0,
    left: 0
  },
  right: {
    right: 0,
    top: 0,
    bottom: 0
  },
  bottom: {
    bottom: 0,
    right: 0,
    left: 0
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0
  }
};
export const Slide = /*#__PURE__*/memo( /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    in: visible,
    placement = 'bottom',
    overlay = true,
    duration = 500,
    ...resolvedProps
  } = props;
  const [containerOpacity, setContainerOpacity] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const provideSize = layoutSize => {
    if (placement === 'right' || placement === 'left') setSize(layoutSize.width);else setSize(layoutSize.height);
    setContainerOpacity(1);
  };
  const transition = {
    duration
  };
  const animationStyle = {
    top: {
      initial: {
        translateY: -size
      },
      animate: {
        translateY: 0,
        transition
      }
    },
    bottom: {
      initial: {
        translateY: size
      },
      animate: {
        translateY: 0,
        transition
      },
      exit: {
        translateY: size,
        transition
      }
    },
    left: {
      initial: {
        translateX: -size
      },
      animate: {
        translateX: 0,
        transition
      }
    },
    right: {
      initial: {
        translateX: size
      },
      animate: {
        translateX: 0,
        transition
      }
    }
  };
  const slideComponent = /*#__PURE__*/React.createElement(PresenceTransition, _extends({
    visible: visible
  }, animationStyle[placement], {
    style: [{
      position: 'absolute'
    }, holderStyle[placement], {
      height: '100%'
    }]
  }), /*#__PURE__*/React.createElement(View, _extends({}, resolvedProps, {
    opacity: containerOpacity,
    ref: ref,
    onLayout: e => provideSize(e.nativeEvent.layout)
  }), size ? children : null));
  if (overlay) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Overlay, {
      isKeyboardDismissable: false
    }, slideComponent));
  } else {
    return slideComponent;
  }
}));
export default Slide;
//# sourceMappingURL=Slide.js.map