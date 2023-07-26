"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = createContext;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createContext(rootComponentName) {
  const Context = /*#__PURE__*/_react.default.createContext(null);
  function Provider(props) {
    const {
      children,
      ...providerProps
    } = props;
    // Only re-memoize when prop values change
    const value = _react.default.useMemo(() => providerProps,
    //  eslint-disable-next-line react-hooks/exhaustive-deps
    Object.values(providerProps));
    return /*#__PURE__*/_react.default.createElement(Context.Provider, {
      value: value
    }, children);
  }
  function useContext(consumerName) {
    const context = _react.default.useContext(Context);
    if (context === null) {
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return context;
  }
  Provider.displayName = rootComponentName + 'Provider';
  return [Provider, useContext];
}

//implementation example

// const [PopperProvider, usePopperContext] =
//   createContext<PopperContext>("PopperContext");
//# sourceMappingURL=createContext.js.map