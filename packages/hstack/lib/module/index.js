import { HStack as HStackMain } from './HStack';
export function createHStack(_ref) {
  let {
    Root,
    Spacer
  } = _ref;
  const HStack = HStackMain(Root, Spacer);
  HStack.displayName = 'HStack';
  return HStack;
}
//# sourceMappingURL=index.js.map