import { Stack as StackMain } from './Stack';
export function createStack(_ref) {
  let {
    Root,
    HSpacer,
    VSpacer
  } = _ref;
  const Stack = StackMain(Root, HSpacer, VSpacer);
  Stack.displayName = 'Stack';
  return Stack;
}
//# sourceMappingURL=index.js.map