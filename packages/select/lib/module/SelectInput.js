function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
export const SelectInput = StyledSelectInput => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    placeholder,
    ...props
  } = _ref;
  const {
    setValue,
    value,
    isDisabled
  } = React.useContext(SelectContext);
  return /*#__PURE__*/React.createElement(StyledSelectInput, _extends({
    ref: ref,
    states: {
      disabled: isDisabled
    },
    disabled: isDisabled,
    "aria-hidden": true,
    editable: false,
    focusable: false,
    importantForAccessibility: "no",
    placeholder: placeholder,
    value: value ? value : '',
    pointerEvents: "none",
    onChangeText: text => setValue(text)
  }, props));
});
//# sourceMappingURL=SelectInput.js.map