import { Spinner } from './Spinner';
export function createSpinner(_ref) {
  let {
    Root
  } = _ref;
  const SpinnerTemp = Spinner(Root);
  SpinnerTemp.displayName = 'Spinner';
  return SpinnerTemp;
}
//# sourceMappingURL=index.js.map