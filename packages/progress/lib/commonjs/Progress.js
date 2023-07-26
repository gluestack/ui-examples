"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Progress = Progress;
var _react = _interopRequireWildcard(require("react"));
var _ProgressContext = require("./ProgressContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
function Progress(StyledProgress) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
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
    return /*#__PURE__*/_react.default.createElement(StyledProgress, _extends({
      ref: ref
    }, progressProps, props), /*#__PURE__*/_react.default.createElement(_ProgressContext.ProgressProvider, {
      min: min,
      max: max,
      valueWidth: progressProps.valueWidth
    }, children));
  });
}
//# sourceMappingURL=Progress.js.map