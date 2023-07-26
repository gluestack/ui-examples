import React from 'react';
function createContext(rootComponentName) {
  const Context = /*#__PURE__*/React.createContext(null);
  function Provider(props) {
    const {
      children,
      ...providerProps
    } = props;
    // Only re-memoize when prop values change
    const value = React.useMemo(() => providerProps,
    //  eslint-disable-next-line react-hooks/exhaustive-deps
    Object.values(providerProps));
    return /*#__PURE__*/React.createElement(Context.Provider, {
      value: value
    }, children);
  }
  function useContext(consumerName) {
    const context = React.useContext(Context);
    if (context === null) {
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return context;
  }
  Provider.displayName = rootComponentName + 'Provider';
  return [Provider, useContext];
}
export { createContext };

//implementation example

// const [PopperProvider, usePopperContext] =
//   createContext<PopperContext>("PopperContext");
//# sourceMappingURL=createContext.js.map