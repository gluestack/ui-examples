function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { usePopoverContent } from './PopoverContext';
const PopoverBody = StyledPopoverBody => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    value
  } = usePopoverContent('PopoverContext');
  const {
    setBodyMounted,
    bodyId
  } = value;
  React.useEffect(() => {
    if (setBodyMounted) {
      setBodyMounted(true);
      return () => {
        setBodyMounted(false);
      };
    } else {
      return () => {};
    }
  }, [setBodyMounted]);
  return /*#__PURE__*/React.createElement(StyledPopoverBody, _extends({
    nativeID: bodyId,
    ref: ref
  }, props), children);
});
export default PopoverBody;
//# sourceMappingURL=PopoverBody.js.map