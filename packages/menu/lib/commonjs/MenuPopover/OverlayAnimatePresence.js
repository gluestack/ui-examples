"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayAnimatePresence = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _overlay = require("@gluestack-ui/overlay");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react-hooks/exhaustive-deps */

const defaultTransitionConfig = {
  type: 'timing',
  useNativeDriver: true,
  duration: 0,
  delay: 0
};
const OverlayAnimatePresence = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    visible = false,
    AnimatePresence
  } = _ref;
  const animateValue = _react.default.useRef(new _reactNative.Animated.Value(0)).current;
  const [animationState, setAnimationState] = _react.default.useState('');
  const prevVisible = _react.default.useRef(visible);
  const {
    setExited
  } = _react.default.useContext(_overlay.ExitAnimationContext);
  _react.default.useEffect(() => {
    if (animationState === 'entering' || animationState === 'exiting') {
      const startAnimation = animationState === 'entering' ? 1 : 0;
      const transition = defaultTransitionConfig;
      if (AnimatePresence) {
        _reactNative.Animated.sequence([
        // @ts-ignore - delay is present in defaultTransitionConfig
        //@ts-ignore
        _reactNative.Animated[transition.type ?? 'timing'](animateValue, {
          toValue: startAnimation,
          useNativeDriver: true
        })]).start(() => {
          if (animationState === 'entering') {
            setAnimationState('entered');
          } else if (animationState === 'exiting') {
            setAnimationState('exited');
          }
        });
      }
    }
    if (animationState === 'exited') {
      setExited(true);
    } else if (animationState === 'entered') {
      setExited(false);
    }
  }, [animationState]);
  _react.default.useEffect(() => {
    if (prevVisible.current !== visible && !visible) {
      setAnimationState('exiting');
    }
    if (visible) {
      setAnimationState('entering');
    }
    prevVisible.current = visible;
  }, [visible]);
  if (!AnimatePresence) {
    return children;
  }
  return /*#__PURE__*/_react.default.createElement(AnimatePresence, {
    ref: ref
  }, visible ? children : null);
});
exports.OverlayAnimatePresence = OverlayAnimatePresence;
//# sourceMappingURL=OverlayAnimatePresence.js.map