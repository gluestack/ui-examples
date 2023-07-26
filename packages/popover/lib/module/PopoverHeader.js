function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { usePopoverContent } from './PopoverContext';
const PopoverHeader = StyledPopoverHeader => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    value
  } = usePopoverContent('PopoverContext');
  const {
    setHeaderMounted,
    headerId
  } = value;
  React.useEffect(() => {
    if (setHeaderMounted) {
      setHeaderMounted(true);
      return () => {
        setHeaderMounted(false);
      };
    } else {
      return () => {};
    }
  }, [setHeaderMounted]);
  return /*#__PURE__*/React.createElement(StyledPopoverHeader, _extends({
    nativeID: headerId,
    ref: ref
  }, props), children);
});
export default PopoverHeader;
//# sourceMappingURL=PopoverHeader.js.map