import { Spinner } from "./Spinner";

export function createSpinner<SpinnerProps>({
  Root,
}: {
  Root: React.ComponentType<SpinnerProps>;
}) {
  const SpinnerTemp = Root;
  SpinnerTemp.displayName = "Spinner";
  return SpinnerTemp;
}
