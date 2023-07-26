"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _slider = require("@react-native-aria/slider");
var _visuallyHidden = require("@react-aria/visually-hidden");
var _Context = require("./Context");
var _interactions = require("@react-native-aria/interactions");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SliderThumb(StyledSliderThumb, StyledSliderThumbInteraction) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
    let {
      children,
      onFocus,
      onBlur,
      scaleOnPressed = 1,
      style,
      ...props
    } = _ref2;
    const [isPressed, setIsPressed] = _react.default.useState(false);
    const [isFocused, setIsFocused] = _react.default.useState(false);
    const handleFocus = (focusState, callback) => {
      setIsFocused(focusState);
      callback();
    };
    const _ref = _react.default.useRef(null);
    const {
      isHovered
    } = (0, _interactions.useHover)({}, _ref);
    const {
      state,
      trackLayout,
      orientation,
      thumbSize,
      isDisabled
    } = _react.default.useContext(_Context.SliderContext);
    const inputRef = _react.default.useRef(null);
    const {
      thumbProps,
      inputProps
    } = (0, _slider.useSliderThumb)({
      index: 0,
      trackLayout,
      inputRef,
      orientation
    }, state);
    _react.default.useEffect(() => {
      setIsPressed(state.isThumbDragging(0));
    }, [state]);
    const thumbStyles = {
      bottom: orientation === 'vertical' ? `${state.getThumbPercent(0) * 100}%` : undefined,
      left: orientation !== 'vertical' ? `${state.getThumbPercent(0) * 100}%` : undefined,
      transform: orientation === 'vertical' ? [{
        translateY: parseInt(thumbSize) / 2
      }] : [{
        translateX: -parseInt(thumbSize) / 2
      }]
    };
    thumbStyles.transform.push({
      scale: state.isThumbDragging(0) ? scaleOnPressed : 1
    });
    return /*#__PURE__*/_react.default.createElement(StyledSliderThumb, _extends({
      states: {
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        disabled: isDisabled
      },
      disabled: isDisabled
    }, thumbProps, {
      style: {
        ...style,
        ...thumbStyles
      },
      onFocus: e => {
        handleFocus(true, onFocus ? () => onFocus(e) : () => {});
      },
      onBlur: e => {
        handleFocus(false, onBlur ? () => onBlur(e) : () => {});
      }
      // {...(isReadOnly && _readOnly)}
      // {...(isDisabled && _disabled)}
      ,
      ref: (0, _utils.mergeRefs)([_ref, ref])
    }, props), /*#__PURE__*/_react.default.createElement(StyledSliderThumbInteraction, {
      states: {
        hover: isHovered,
        focus: isFocused,
        active: isPressed
      }
    }, children, _reactNative.Platform.OS === 'web' && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, /*#__PURE__*/_react.default.createElement("input", _extends({
      ref: inputRef
    }, inputProps)))));
  });
}
var _default = SliderThumb;
exports.default = _default;
//# sourceMappingURL=SliderThumb.js.map