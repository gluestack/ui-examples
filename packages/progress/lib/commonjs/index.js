"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProgress = createProgress;
var _Progress = require("./Progress");
var _ProgressFilledTrack = require("./ProgressFilledTrack");
function createProgress(_ref) {
  let {
    Root,
    FilledTrack
  } = _ref;
  const Progress = (0, _Progress.Progress)(Root);
  Progress.FilledTrack = (0, _ProgressFilledTrack.ProgressFilledTrack)(FilledTrack);
  Progress.displayName = 'Progress';
  Progress.FilledTrack.displayName = 'Progress.FilledTrack';
  return Progress;
}
//# sourceMappingURL=index.js.map