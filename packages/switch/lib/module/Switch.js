function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useHover } from '@react-native-aria/interactions';
import { useToggleState } from '@react-stately/toggle';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { mergeRefs } from '@gluestack-ui/utils';
export function Switch(StyledSwitch) {
  return /*#__PURE__*/forwardRef((_ref2, ref) => {
    let {
      disabled,
      isDisabled,
      isInvalid,
      defaultValue,
      accessibilityLabel,
      accessibilityHint,
      onToggle,
      value,
      onValueChange,
      ...props
    } = _ref2;
    const formControlContext = useFormControlContext();
    const combinedProps = {
      ...formControlContext,
      ...props
    };
    const state = useToggleState({
      defaultSelected: !(defaultValue === null || defaultValue === undefined) ? defaultValue : !(value === null || value === undefined) ? value : false
    });
    const checked = !(value === null || value === undefined) ? value : state.isSelected;
    const _ref = React.useRef(null);
    const {
      isHovered
    } = useHover({}, _ref);
    const mergedRef = mergeRefs([ref, _ref]);
    return /*#__PURE__*/React.createElement(StyledSwitch, _extends({
      states: {
        hover: isHovered,
        disabled: disabled || isDisabled || combinedProps.isDisabled,
        invalid: isInvalid || combinedProps.isInvalid,
        checked: value || checked
      },
      accessibilityLabel: accessibilityLabel,
      accessibilityHint: accessibilityHint,
      disabled: disabled || isDisabled || combinedProps.isDisabled,
      onValueChange: val => {
        onValueChange && onValueChange(val);
        onToggle ? onToggle(val) : state.toggle();
      },
      value: value || checked
    }, combinedProps, {
      ref: mergedRef
    }));
  });
}
//# sourceMappingURL=Switch.js.map