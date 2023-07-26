function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
const getFirstCharacters = str => {
  const words = str.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      result += words[i].charAt(0);
    }
    if (result.length >= 2) {
      break;
    }
  }
  return result.toUpperCase();
};
export const AvatarFallbackText = StyledAvatarFallbackText => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  let fallbackText = '';
  if (typeof children === 'string') {
    fallbackText = getFirstCharacters(children);
  }
  return /*#__PURE__*/React.createElement(StyledAvatarFallbackText, _extends({
    ref: ref
  }, props), fallbackText);
});
//# sourceMappingURL=AvatarFallbackText.js.map