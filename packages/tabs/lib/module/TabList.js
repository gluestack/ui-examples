function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo, useMemo } from 'react';
import { forwardRef } from 'react';
export const TabList = StyledTabList => /*#__PURE__*/memo( /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  let tabIndex = 0;
  const modifiedTabList = useMemo(() => React.Children.toArray(children).map(tab => {
    return /*#__PURE__*/React.cloneElement(tab, {
      key: tab.key ?? `tab-${tabIndex}`,
      value: `tab-${tabIndex++}`,
      ...(tab === null || tab === void 0 ? void 0 : tab.props)
    });
  }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [children]);
  return /*#__PURE__*/React.createElement(StyledTabList, _extends({
    accessibilityRole: "tablist"
  }, props, {
    ref: ref
  }), modifiedTabList);
}));
//# sourceMappingURL=TabList.js.map