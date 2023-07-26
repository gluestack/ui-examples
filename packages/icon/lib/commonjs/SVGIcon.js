"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _nbSvg = require("./nbSvg");
var _provider = require("@gluestack-ui/provider");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SVGIcon = (_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    StyledSvg
  } = _react.default.useContext(_provider.UIContext);
  const {
    focusable,
    stroke,
    color,
    size,
    ...resolvedProps
  } = props;
  const strokeHex = stroke || '';
  const colorHex = color || '';
  return /*#__PURE__*/_react.default.createElement(StyledSvg, _extends({}, resolvedProps, {
    size: size,
    color: colorHex,
    stroke: strokeHex,
    focusable: focusable,
    accessibilityRole: "image",
    ref: ref
  }), _react.default.Children.count(children) > 0 ? /*#__PURE__*/_react.default.createElement(_nbSvg.G, null, _react.default.Children.map(children, (child, i) => /*#__PURE__*/_react.default.createElement(ChildPath, _extends({
    key: (child === null || child === void 0 ? void 0 : child.key) ?? i,
    element: child
  }, child === null || child === void 0 ? void 0 : child.props)))) : null);
};
const ChildPath = _ref2 => {
  let {
    element,
    fill,
    stroke: pathStroke
  } = _ref2;
  const pathStrokeColor = pathStroke || '';
  const fillColor = fill || '';
  if (!element) {
    return null;
  }
  return /*#__PURE__*/_react.default.cloneElement(element, {
    fill: fillColor ? fillColor : 'currentColor',
    stroke: pathStrokeColor
  });
};
var _default = /*#__PURE__*/(0, _react.forwardRef)(SVGIcon);
exports.default = _default;
//# sourceMappingURL=SVGIcon.js.map