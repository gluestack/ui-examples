function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { G } from './nbSvg';
import { UIContext } from '@gluestack-ui/provider';
const SVGIcon = (_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    StyledSvg
  } = React.useContext(UIContext);
  const {
    focusable,
    stroke,
    color,
    size,
    ...resolvedProps
  } = props;
  const strokeHex = stroke || '';
  const colorHex = color || '';
  return /*#__PURE__*/React.createElement(StyledSvg, _extends({}, resolvedProps, {
    size: size,
    color: colorHex,
    stroke: strokeHex,
    focusable: focusable,
    accessibilityRole: "image",
    ref: ref
  }), React.Children.count(children) > 0 ? /*#__PURE__*/React.createElement(G, null, React.Children.map(children, (child, i) => /*#__PURE__*/React.createElement(ChildPath, _extends({
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
  return /*#__PURE__*/React.cloneElement(element, {
    fill: fillColor ? fillColor : 'currentColor',
    stroke: pathStrokeColor
  });
};
export default /*#__PURE__*/forwardRef(SVGIcon);
//# sourceMappingURL=SVGIcon.js.map