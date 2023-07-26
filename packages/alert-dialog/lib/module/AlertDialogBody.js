function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
const AlertDialogBody = StyledAlertDialogBody => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledAlertDialogBody, _extends({
    ref: ref
  }, props));
});
export default AlertDialogBody;
//# sourceMappingURL=AlertDialogBody.js.map