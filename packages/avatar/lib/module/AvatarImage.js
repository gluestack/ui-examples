function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
const AvatarImage = StyledAvatarImage => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    source,
    ...props
  } = _ref;
  const [error, setError] = React.useState(false);
  const getSource = () => {
    if (source) {
      if (source.hasOwnProperty('uri') && source.uri === null) {
        return source;
      } else if (!source.hasOwnProperty(source, 'uri')) {
        return source;
      }
    }
    return null;
  };
  const imageSource = getSource();
  return /*#__PURE__*/React.createElement(React.Fragment, null, imageSource && !error && /*#__PURE__*/React.createElement(StyledAvatarImage, _extends({
    ref: ref
  }, props, {
    source: source,
    onError: () => {
      setError(true);
    }
  })));
});
export default AvatarImage;
//# sourceMappingURL=AvatarImage.js.map