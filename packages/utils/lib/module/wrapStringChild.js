import React from 'react';
export const wrapStringChild = (children, StyledBoxText) => {
  return React.Children.map(children, child => {
    var _child$props, _child$props2;
    return typeof child === 'string' || typeof child === 'number' || (child === null || child === void 0 ? void 0 : child.type) === React.Fragment && (typeof ((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.children) === 'string' || typeof ((_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.children) === 'number') ? /*#__PURE__*/React.createElement(StyledBoxText, null, child) : child;
  });
};
//# sourceMappingURL=wrapStringChild.js.map