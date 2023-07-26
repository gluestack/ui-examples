function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useLink } from './useLink';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '@gluestack-ui/utils';
export const Link = StyledLink => /*#__PURE__*/forwardRef((_ref2, ref) => {
  let {
    children,
    href,
    onPress,
    isExternal,
    ...props
  } = _ref2;
  const _ref = React.useRef(null);
  const {
    isHovered
  } = useHover({}, _ref);
  const {
    linkProps
  } = useLink({
    href,
    onPress,
    isExternal,
    _ref
  });
  return /*#__PURE__*/React.createElement(StyledLink, _extends({
    states: {
      hover: isHovered
    }
  }, linkProps, props, {
    ref: mergeRefs([ref, _ref])
  }), children);
});
//# sourceMappingURL=Link.js.map