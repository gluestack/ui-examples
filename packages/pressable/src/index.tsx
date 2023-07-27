import { default as PressableMain } from "./Pressable";

export function createPressable<PressableProps>({
  Root,
}: {
  Root: React.ComponentType<PressableProps>;
}) {
  const Pressable = Root;

  Pressable.displayName = "Pressable";
  return Pressable;
}
