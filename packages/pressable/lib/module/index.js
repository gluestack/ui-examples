import { default as PressableMain } from './Pressable';
export function createPressable(_ref) {
  let {
    Root
  } = _ref;
  const Pressable = PressableMain(Root);
  Pressable.displayName = 'Pressable';
  return Pressable;
}
//# sourceMappingURL=index.js.map