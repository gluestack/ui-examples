function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { flattenChildren } from '@gluestack-ui/utils';
export function HStack(Root, Spacer) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
    let {
      children,
      reversed,
      space,
      ...props
    } = _ref;
    const getSpacedChildren = children => {
      let childrenArray = React.Children.toArray(flattenChildren(children));
      childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
      childrenArray = childrenArray.map((child, index) => {
        return /*#__PURE__*/React.createElement(React.Fragment, {
          key: child.key ?? `spaced-child-${index}`
        }, child, index < childrenArray.length - 1 && space &&
        /*#__PURE__*/
        //@ts-ignore
        React.createElement(Spacer, {
          size: space
        }));
      });
      return childrenArray;
    };
    return /*#__PURE__*/React.createElement(Root, _extends({
      ref: ref
    }, props), getSpacedChildren(children));
  });
}
//# sourceMappingURL=HStack.js.map