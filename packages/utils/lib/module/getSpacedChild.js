import React from 'react';
// Thanks @gregberge for code and @nandorojo for suggestion.
// Original source: https://github.com/gregberge/react-flatten-children
export function flattenChildren(children) {
  let keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const childrenArray = React.Children.toArray(children);
  return childrenArray.reduce((flatChildren, child, index) => {
    if (child.type === React.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children, keys.concat(child.key || index)));
    }
    if ( /*#__PURE__*/React.isValidElement(child)) {
      flatChildren.push( /*#__PURE__*/React.cloneElement(child, {
        key: keys.concat(String(child.key || index)).join('.')
      }));
    } else {
      flatChildren.push(child);
    }
    return flatChildren;
  }, []);
}
const getSpacedChildren = (children, space, SpacerComponent) => {
  let childrenArray = React.Children.toArray(flattenChildren(children));
  childrenArray = childrenArray.map((child, index) => {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: child.key ?? `spaced-child-${index}`
    }, child, index < childrenArray.length - 1 && space && /*#__PURE__*/React.createElement(SpacerComponent, {
      size: space
    }));
  });
  return childrenArray;
};
export default getSpacedChildren;
//# sourceMappingURL=getSpacedChild.js.map