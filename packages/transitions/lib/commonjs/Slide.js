"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slide = void 0;
var _react = _interopRequireWildcard(require("react"));
var _overlay = require("@gluestack-ui/overlay");
var _PresenceTransition = _interopRequireDefault(require("./PresenceTransition"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable @typescript-eslint/no-unused-vars */ // @ts-nocheck
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
const Slide = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
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
  const [containerOpacity, setContainerOpacity] = _react.default.useState(0);
  const [size, setSize] = _react.default.useState(0);
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
  const slideComponent = /*#__PURE__*/_react.default.createElement(_PresenceTransition.default, _extends({
    visible: visible
  }, animationStyle[placement], {
    style: [{
      position: 'absolute'
    }, holderStyle[placement], {
      height: '100%'
    }]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, resolvedProps, {
    opacity: containerOpacity,
    ref: ref,
    onLayout: e => provideSize(e.nativeEvent.layout)
  }), size ? children : null));
  if (overlay) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
      isKeyboardDismissable: false
    }, slideComponent));
  } else {
    return slideComponent;
  }
}));
exports.Slide = Slide;
var _default = Slide;
exports.default = _default;
//# sourceMappingURL=Slide.js.map