function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { flattenChildren } from '@gluestack-ui/utils';
export const ButtonGroup = (StyledButtonGroup, StyledButtonGroupHSpacer, StyledButtonGroupVSpacer) => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    space,
    direction = 'row',
    isAttached,
    isDisabled,
    children,
    reversed,
    ...props
  } = _ref;
  let computedChildren;
  let childrenArray = React.Children.toArray(flattenChildren(children));
  childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
  if (childrenArray) {
    computedChildren = childrenArray.map((child, index) => {
      if (typeof child === 'string' || typeof child === 'number') {
        return child;
      }
      const attachedStyles = {};
      if (index === 0) {
        if (direction === 'column') {
          attachedStyles.borderBottomLeftRadius = 0;
          attachedStyles.borderBottomRightRadius = 0;
        } else {
          attachedStyles.borderTopRightRadius = 0;
          attachedStyles.borderBottomRightRadius = 0;
        }
      } else if (index === (children === null || children === void 0 ? void 0 : children.length) - 1) {
        if (direction === 'column') {
          attachedStyles.borderTopLeftRadius = 0;
          attachedStyles.borderTopRightRadius = 0;
        } else {
          attachedStyles.borderTopLeftRadius = 0;
          attachedStyles.borderBottomLeftRadius = 0;
        }
      } else {
        attachedStyles.borderRadius = 0;
      }
      const childProps = {
        isDisabled,
        ...child.props,
        style: {
          ...(isAttached ? attachedStyles : {}),
          ...child.props.style
        }
      };
      const clonedChild = /*#__PURE__*/React.cloneElement(child, {
        ...childProps
      });
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: child.key ?? `spaced-child-${index}`
      }, clonedChild, index < childrenArray.length - 1 && (direction === 'column' ? /*#__PURE__*/React.createElement(StyledButtonGroupVSpacer, {
        space: !isAttached ? space : 0
      }) : /*#__PURE__*/React.createElement(StyledButtonGroupHSpacer, {
        space: !isAttached ? space : 0
      })));
    });
  }
  if (computedChildren) return /*#__PURE__*/React.createElement(StyledButtonGroup, _extends({
    flexDirection: direction
  }, props, {
    ref: ref
  }), computedChildren);
  return null;
});
//# sourceMappingURL=ButtonGroup.js.map