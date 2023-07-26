function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { Keyboard } from 'react-native';
export const SelectTrigger = StyledSelectTrigger => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    accessibilityLabel,
    ...props
  } = _ref;
  const {
    isDisabled,
    hoverRef,
    setIsOpen,
    onOpen,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isReadOnly
  } = React.useContext(SelectContext);
  return /*#__PURE__*/React.createElement(StyledSelectTrigger, _extends({
    onPress: () => {
      if (!isReadOnly) {
        Keyboard.dismiss();
        setIsOpen(true);
        onOpen && onOpen();
      }
    },
    states: {
      focus: isFocused,
      focusvisible: isFocusVisible,
      hover: isHovered,
      disabled: isDisabled,
      invalid: isInvalid
    },
    disabled: isDisabled,
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "button",
    ref: mergeRefs([ref, hoverRef]),
    focusable: false
  }, props), children);
});
//# sourceMappingURL=SelectTrigger.js.map