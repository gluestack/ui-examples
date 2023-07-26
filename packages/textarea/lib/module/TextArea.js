function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useTextArea } from './TextAreaContext';
export const TextArea = StyledTextArea => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    multiline = true,
    onKeyPress,
    ...props
  } = _ref;
  const {
    isDisabled,
    isReadOnly,
    isFocused,
    isInvalid,
    isRequired,
    isHovered,
    handleFocus
  } = useTextArea('TextAreaContext');
  return /*#__PURE__*/React.createElement(StyledTextArea, _extends({
    ref: ref
  }, props, {
    states: {
      focus: isFocused,
      disabled: isDisabled,
      invalid: isInvalid,
      readonly: isReadOnly,
      required: isRequired,
      hover: isHovered
    },
    editable: isDisabled || isReadOnly ? false : true,
    multiline: multiline,
    onKeyPress: e => {
      e.persist();
      onKeyPress && onKeyPress(e);
    },
    onFocus: e => {
      handleFocus(true, props !== null && props !== void 0 && props.onFocus ? () => props === null || props === void 0 ? void 0 : props.onFocus(e) : () => {});
    },
    onBlur: e => {
      handleFocus(false, props !== null && props !== void 0 && props.onBlur ? () => props === null || props === void 0 ? void 0 : props.onBlur(e) : () => {});
    }
  }), children);
});
//# sourceMappingURL=TextArea.js.map