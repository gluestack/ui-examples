function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { combineContextAndProps } from '@gluestack-ui/utils';
import { useFormControlContext } from './useFormControl';
const FormControlHelper = StyledFormControlHelper => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);
  React.useEffect(() => {
    combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.setHasHelpText(true);
    return () => {
      combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.setHasHelpText(false);
    };
  });
  return /*#__PURE__*/React.createElement(StyledFormControlHelper, _extends({
    ref: ref
  }, combinedProps, {
    nativeID: combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.labelId
  }), children);
});
export default FormControlHelper;
//# sourceMappingURL=FormControlHelper.js.map