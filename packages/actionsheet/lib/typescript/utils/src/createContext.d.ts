import React from 'react';
declare function createContext<ContextValueType extends object>(rootComponentName: string): readonly [{
    (props: ContextValueType & {
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
}, (consumerName: string) => ContextValueType];
export { createContext };
//# sourceMappingURL=createContext.d.ts.map