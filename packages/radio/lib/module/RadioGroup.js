function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useRadioGroup } from '@react-native-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { RadioGroupProvider } from './RadioGroupContext';
import { useFormControlContext } from '@gluestack-ui/form-control';
export const RadioGroup = StyledRadioGroup => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    isInvalid,
    ...props
  } = _ref;
  const formControlContext = useFormControlContext();
  const state = useRadioGroupState({
    ...props,
    validationState: isInvalid ? 'invalid' : 'valid'
  });
  const radioGroupState = useRadioGroup({
    ...formControlContext,
    ...props,
    'aria-label': props.accessibilityLabel
  }, state);
  const contextValue = React.useMemo(() => {
    return {
      ...formControlContext,
      ...state
    };
  }, [formControlContext, state]);
  const radioGroupProps = React.useMemo(() => radioGroupState.radioGroupProps,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return /*#__PURE__*/React.createElement(RadioGroupProvider, {
    state: contextValue
  }, /*#__PURE__*/React.createElement(StyledRadioGroup, _extends({}, radioGroupProps, props, {
    ref: ref
  }), children));
});
//# sourceMappingURL=RadioGroup.js.map