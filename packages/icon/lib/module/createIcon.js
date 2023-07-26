function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Path, G } from './nbSvg';
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
  return /*#__PURE__*/React.cloneElement(element, {
    fill: fillColor ? fillColor : 'currentColor',
    stroke: pathStrokeColor
  });
};
export const createIcon = _ref2 => {
  let {
    Root,
    path,
    d,
    ...initialProps
  } = _ref2;
  const createdIcon = (props, ref) => {
    let children = path;
    if (d && (!path || Object.keys(path).length === 0)) {
      children = /*#__PURE__*/React.createElement(Path, {
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
    return /*#__PURE__*/React.createElement(Root, _extends({}, resolvedProps, colorProps, {
      focusable: focusable,
      accessibilityRole: "image",
      ref: ref
    }, sizeProps), React.Children.count(children) > 0 ? /*#__PURE__*/React.createElement(G, null, React.Children.map(children, (child, i) => /*#__PURE__*/React.createElement(ChildPath, _extends({
      key: (child === null || child === void 0 ? void 0 : child.key) ?? i,
      element: child
    }, child === null || child === void 0 ? void 0 : child.props)))) : null);
  };
  return /*#__PURE__*/forwardRef(createdIcon);
};
//# sourceMappingURL=createIcon.js.map