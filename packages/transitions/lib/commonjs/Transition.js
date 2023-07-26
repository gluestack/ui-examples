"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transition = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-hooks/exhaustive-deps */
const transformStylesMap = {
  translateY: true,
  translateX: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true
};
const defaultStyles = {
  opacity: 1,
  translateY: 0,
  translateX: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  rotate: '0deg'
};
const getAnimatedStyles = animateValue => (initial, to) => {
  const styles = {
    transform: []
  };
  for (let key in initial) {
    if (key === 'transition') {
      continue;
    }
    if (key in transformStylesMap) {
      var _styles$transform;
      (_styles$transform = styles.transform) === null || _styles$transform === void 0 ? void 0 : _styles$transform.push({
        [key]: animateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [initial[key], to[key]]
        })
      });
    } else {
      styles[key] = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [initial[key], to[key]]
      });
    }
  }
  return styles;
};
const defaultTransitionConfig = {
  type: 'timing',
  useNativeDriver: true,
  duration: 250,
  delay: 0
};
const Transition = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    onTransitionComplete,
    visible = false,
    initial,
    animate,
    exit,
    style,
    as,
    ...rest
  } = _ref;
  const animateValue = _react.default.useRef(new _reactNative.Animated.Value(0)).current;
  const Component = _react.default.useMemo(() => {
    if (as) {
      return _reactNative.Animated.createAnimatedComponent(as);
    }
    return _reactNative.Animated.View;
  }, [as]);
  const [animationState, setAnimationState] = _react.default.useState('');
  const prevVisible = _react.default.useRef(visible);
  _react.default.useEffect(() => {
    if (animationState === 'entering' || animationState === 'exiting') {
      const entryTransition = {
        ...defaultTransitionConfig,
        ...(animate === null || animate === void 0 ? void 0 : animate.transition)
      };
      const exitTransition = {
        ...defaultTransitionConfig,
        ...(exit === null || exit === void 0 ? void 0 : exit.transition)
      };
      const startAnimation = animationState === 'entering' ? 1 : 0;
      const transition = startAnimation ? entryTransition : exitTransition;
      _reactNative.Animated.sequence([
      // @ts-ignore - delay is present in defaultTransitionConfig
      _reactNative.Animated.delay(transition.delay),
      //@ts-ignore
      _reactNative.Animated[transition.type ?? 'timing'](animateValue, {
        toValue: startAnimation,
        useNativeDriver: true,
        ...transition
      })]).start(() => {
        if (animationState === 'entering') {
          setAnimationState('entered');
        } else if (animationState === 'exiting') {
          setAnimationState('exited');
        }
      });
      // });
    }

    if (animationState === 'exited') {
      onTransitionComplete && onTransitionComplete('exited');
    } else if (animationState === 'entered') {
      onTransitionComplete && onTransitionComplete('entered');
    }
    // if (animationState === 'entering') {
    //   //
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationState, onTransitionComplete]);
  _react.default.useEffect(() => {
    // if (!visible) {
    if (prevVisible.current !== visible && !visible) {
      setAnimationState('exiting');
    }
    if (visible) {
      setAnimationState('entering');
    }
    prevVisible.current = visible;
    // }
  }, [visible]);

  // If exit animation is present and state is exiting, we replace 'initial' with 'exit' animation

  //  const initialState = { ...defaultStyles, ...initial };
  const initialState = animationState === 'exited' && exit ? {
    ...defaultStyles,
    ...exit
  } : {
    ...defaultStyles,
    ...initial
  };
  // const initialState = { ...defaultStyles, ...initial };

  // initial =
  //   animationState === 'exited'
  //     ? { ...defaultStyles, ...exit }
  //     : { ...defaultStyles, ...initial };

  const animateState = {
    ...defaultStyles,
    ...animate
  };

  // const [initialState, setInitialState] = React.useState({
  //   ...defaultStyles,
  //   ...initial,
  // });
  // console.log('Initial state ', initial);

  // const [animateState] = React.useState({ ...defaultStyles, ...animate });
  const styles = _react.default.useMemo(() => {
    // console.log('display state here', initial);
    return [getAnimatedStyles(animateValue)(initialState, animateState), style];
  }, [animateValue, initial, animate, style]);
  return /*#__PURE__*/_react.default.createElement(Component
  // pointerEvents="box-none"
  , _extends({
    pointerEvents: !visible ? 'none' : 'box-none'
    // https://github.com/facebook/react-native/issues/23090#issuecomment-710803743
    // needsOffscreenAlphaCompositing
    // style={[styles]}
    ,
    style: [styles],
    ref: ref
  }, rest), children);
});
exports.Transition = Transition;
//# sourceMappingURL=Transition.js.map