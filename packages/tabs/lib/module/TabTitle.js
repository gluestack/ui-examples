function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo } from 'react';
import { forwardRef } from 'react';
export const TabTitle = StyledTabTitle => /*#__PURE__*/memo( /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledTabTitle, _extends({}, props, {
    ref: ref
  }));
}));
//# sourceMappingURL=TabTitle.js.map