function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo, useMemo } from 'react';
import { forwardRef } from 'react';
export const TabPanels = StyledTabPanels => /*#__PURE__*/memo( /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  let tabIndex = 0;
  const modiefiedTabPanels = useMemo(() => React.Children.toArray(children).map(child => {
    return /*#__PURE__*/React.cloneElement(child, {
      key: child.key ?? `tabpanel-${tabIndex}`,
      value: `tab-${tabIndex++}`,
      ...(child === null || child === void 0 ? void 0 : child.props)
    });
  }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [children]);
  return /*#__PURE__*/React.createElement(StyledTabPanels, _extends({}, props, {
    ref: ref
  }), modiefiedTabPanels);
}));
//# sourceMappingURL=TabPanels.js.map