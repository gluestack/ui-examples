import { Provider as MainProvider, UIContext } from './Provider';
export const createProvider = _ref => {
  let {
    StyledProvider
  } = _ref;
  const Provider = MainProvider({
    StyledProvider
  });
  Provider.displayName = 'Provider';
  return Provider;
};
export { UIContext };
//# sourceMappingURL=index.js.map