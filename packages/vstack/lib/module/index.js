import { VStack as VStackMain } from './VStack';
export function createVStack(_ref) {
  let {
    Root,
    Spacer
  } = _ref;
  const VStack = VStackMain(Root, Spacer);
  VStack.displayName = 'VStack';
  return VStack;
}
//# sourceMappingURL=index.js.map