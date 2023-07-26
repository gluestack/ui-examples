function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { combineContextAndProps } from '@gluestack-ui/utils';
import { useFormControlContext } from './useFormControl';
const FormControlError = StyledFormControlError => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);
  const {
    isInvalid,
    ...remainingProps
  } = combinedProps;
  React.useEffect(() => {
    remainingProps === null || remainingProps === void 0 ? void 0 : remainingProps.setHasFeedbackText(true);
    return () => {
      remainingProps === null || remainingProps === void 0 ? void 0 : remainingProps.setHasFeedbackText(false);
    };
  });
  return isInvalid && children ? /*#__PURE__*/React.createElement(StyledFormControlError, _extends({
    ref: ref
  }, remainingProps), children) : null;
});
export default FormControlError;
//# sourceMappingURL=FormControlError.js.map