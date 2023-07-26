"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIcon = void 0;
var _react = _interopRequireWildcard(require("react"));
var _nbSvg = require("./nbSvg");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ChildPath = _ref => {
  let {
    element,
    fill,
    stroke: pathStroke
  } = _ref;
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
const createIcon = _ref2 => {
  let {
    Root,
    path,
    d,
    ...initialProps
  } = _ref2;
  const createdIcon = (props, ref) => {
    let children = path;
    if (d && (!path || Object.keys(path).length === 0)) {
      children = /*#__PURE__*/_react.default.createElement(_nbSvg.Path, {
        fill: "currentColor",
        d: d
      });
    }
    const finalProps = {
      ...initialProps,
      ...props
    };
    const {
      focusable,
      stroke,
      color,
      ...resolvedProps
    } = finalProps;
    let type = resolvedProps.type;
    if (type === undefined) {
      type = 'svg';
    }
    let colorProps = {};
    if (color) {
      colorProps = {
        ...colorProps,
        color: color
      };
    }
    if (stroke) {
      colorProps = {
        ...colorProps,
        color: stroke
      };
    }
    let sizeProps = {};
    if (type === 'font') {
      if (resolvedProps.sx) {
        var _resolvedProps$sx;
        sizeProps = {
          ...sizeProps,
          fontSize: resolvedProps === null || resolvedProps === void 0 ? void 0 : (_resolvedProps$sx = resolvedProps.sx) === null || _resolvedProps$sx === void 0 ? void 0 : _resolvedProps$sx.h
        };
      }
      if (resolvedProps.size) {
        // sizeProps = { ...sizeProps, fontSize: resolvedProps?.size };
      }
    }
    return /*#__PURE__*/_react.default.createElement(Root, _extends({}, resolvedProps, colorProps, {
      focusable: focusable,
      accessibilityRole: "image",
      ref: ref
    }, sizeProps), _react.default.Children.count(children) > 0 ? /*#__PURE__*/_react.default.createElement(_nbSvg.G, null, _react.default.Children.map(children, (child, i) => /*#__PURE__*/_react.default.createElement(ChildPath, _extends({
      key: (child === null || child === void 0 ? void 0 : child.key) ?? i,
      element: child
    }, child === null || child === void 0 ? void 0 : child.props)))) : null);
  };
  return /*#__PURE__*/(0, _react.forwardRef)(createdIcon);
};
exports.createIcon = createIcon;
//# sourceMappingURL=createIcon.js.map