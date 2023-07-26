function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useInput } from './InputContext';
import { useFormControl } from '@gluestack-ui/form-control';
export const InputIcon = StyledInputIcon => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    inputFieldRef,
    isDisabled
  } = useInput('InputContext');
  const handleFocus = () => {
    var _inputFieldRef$curren;
    inputFieldRef === null || inputFieldRef === void 0 ? void 0 : (_inputFieldRef$curren = inputFieldRef.current) === null || _inputFieldRef$curren === void 0 ? void 0 : _inputFieldRef$curren.focus();
  };
  const inputProps = useFormControl({
    isDisabled: props.isDisabled
  });
  return /*#__PURE__*/React.createElement(StyledInputIcon, _extends({
    states: {
      disabled: isDisabled || inputProps.isDisabled
    },
    onPress: handleFocus,
    accessibilityElementsHidden: true,
    focusable: false,
    ref: ref
  }, props), children);
});
//# sourceMappingURL=InputIcon.js.map