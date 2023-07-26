import React from 'react';
type ReactChildArray = ReturnType<typeof React.Children.toArray>;
export declare function flattenChildren(children: JSX.Element[] | JSX.Element, keys?: (string | number)[]): ReactChildArray;
declare const getSpacedChildren: (children: JSX.Element[] | JSX.Element, space: undefined | number | string, SpacerComponent: any) => any;
export default getSpacedChildren;
//# sourceMappingURL=getSpacedChild.d.ts.map