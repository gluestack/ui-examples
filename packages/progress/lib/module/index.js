import { Progress as ProgressMain } from './Progress';
import { ProgressFilledTrack } from './ProgressFilledTrack';
export function createProgress(_ref) {
  let {
    Root,
    FilledTrack
  } = _ref;
  const Progress = ProgressMain(Root);
  Progress.FilledTrack = ProgressFilledTrack(FilledTrack);
  Progress.displayName = 'Progress';
  Progress.FilledTrack.displayName = 'Progress.FilledTrack';
  return Progress;
}
//# sourceMappingURL=index.js.map