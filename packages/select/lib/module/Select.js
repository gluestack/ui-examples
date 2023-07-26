function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { useHover } from '@react-native-aria/interactions';
import { useControllableState } from '@gluestack-ui/hooks';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { useFocusRing } from '@react-native-aria/focus';
export const Select = StyledSelect => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    selectedValue: selectedOption,
    onValueChange,
    defaultValue,
    onClose,
    onOpen,
    closeOnOverlayClick,
    ...props
  } = _ref;
  const [isFocused, setIsFocused] = React.useState(false);
  const {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  const hoverRef = React.useRef(null);
  const {
    hoverProps,
    isHovered
  } = useHover({
    isDisabled
  }, hoverRef);
  const [value, setValue] = useControllableState({
    value: selectedOption,
    defaultValue,
    onChange: newValue => {
      onValueChange && onValueChange(newValue);
    }
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = React.useCallback(() => {
    setIsOpen(false);
    onClose && onClose();
  }, [onClose, setIsOpen]);
  const inputProps = useFormControlContext();
  const contextValue = React.useMemo(() => {
    return {
      isHovered: isHovered || isHoveredProp,
      isFocused: isFocused || isFocusedProp,
      isDisabled: isDisabled || inputProps.isDisabled,
      isInvalid: isInvalid || inputProps.isInvalid,
      isRequired: isRequired || inputProps.isRequired,
      isReadOnly: isReadOnly || inputProps.isReadOnly,
      hoverRef: hoverRef,
      hoverProps: hoverProps,
      isFocusVisible: isFocusVisibleProp || isFocusVisible,
      setIsOpen: setIsOpen,
      onOpen: onOpen,
      isOpen: isOpen,
      onValueChange: setValue,
      handleClose: handleClose,
      closeOnOverlayClick: closeOnOverlayClick,
      value: value,
      setFocused: setIsFocused,
      focusProps: focusProps,
      setvalue: setValue
    };
  }, [closeOnOverlayClick, handleClose, hoverProps, isDisabled, isFocusVisible, isFocusVisibleProp, isFocused, isFocusedProp, isHovered, isHoveredProp, isInvalid, isOpen, onOpen, setValue, value, setIsFocused, focusProps, isRequired, inputProps, isReadOnly]);
  return /*#__PURE__*/React.createElement(StyledSelect, _extends({
    ref: ref,
    accessibilityRole: "button",
    focusable: false
  }, props), /*#__PURE__*/React.createElement(SelectContext.Provider, {
    value: contextValue
  }, children));
});
//# sourceMappingURL=Select.js.map