"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _slider = require("@react-stately/slider");
var _hooks = require("@gluestack-ui/hooks");
var _Context = require("./Context");
var _slider2 = require("@react-native-aria/slider");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Slider(StyledSlider) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
    let {
      orientation,
      isReversed,
      thumbSize = 16,
      sliderTrackHeight = 8,
      children,
      ...props
    } = _ref;
    const formControlContext = (0, _formControl.useFormControlContext)();
    const {
      isDisabled,
      isReadOnly,
      ...newProps
    } = {
      ...formControlContext,
      ...props,
      'aria-label': props.accessibilityLabel ?? 'Slider'
    };
    if (typeof props.value === 'number') {
      //@ts-ignore - React Native Aria slider accepts array of values
      newProps.value = [props.value];
    }
    if (typeof props.defaultValue === 'number') {
      //@ts-ignore - React Native Aria slider accepts array of values
      newProps.defaultValue = [props.defaultValue];
    }
    props = newProps;
    const {
      onLayout,
      layout: trackLayout
    } = (0, _hooks.useLayout)();
    const updatedProps = Object.assign({}, props);
    if (isReadOnly || isDisabled) {
      updatedProps.isDisabled = true;
    }
    const state = (0, _slider.useSliderState)({
      ...updatedProps,
      //@ts-ignore
      numberFormatter: {
        format: e => e
      },
      minValue: props.minValue,
      maxValue: props.maxValue,
      onChange: val => {
        props.onChange && props.onChange(val[0]);
      },
      onChangeEnd: val => {
        props.onChangeEnd && props.onChangeEnd(val[0]);
      }
    });
    const {
      trackProps
    } = (0, _slider2.useSlider)(props, state, trackLayout);
    const contextValue = _react.default.useMemo(() => {
      return {
        trackLayout,
        state,
        orientation: orientation,
        isDisabled: isDisabled,
        isReversed: isReversed,
        trackProps,
        isReadOnly: isReadOnly,
        onTrackLayout: onLayout,
        thumbSize: thumbSize,
        sliderSize: sliderTrackHeight
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trackLayout, state, orientation, isDisabled, isReversed, isReadOnly, onLayout, thumbSize, sliderTrackHeight]);
    return /*#__PURE__*/_react.default.createElement(_Context.SliderContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/_react.default.createElement(StyledSlider, _extends({}, props, {
      ref: ref
    }), children));
  });
}
var _default = Slider;
exports.default = _default;
//# sourceMappingURL=Slider.js.map