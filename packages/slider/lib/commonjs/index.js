"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SliderContext", {
  enumerable: true,
  get: function () {
    return _Context.SliderContext;
  }
});
exports.createSlider = createSlider;
var _Slider = _interopRequireDefault(require("./Slider"));
var _SliderThumb = _interopRequireDefault(require("./SliderThumb"));
var _SliderTrack = _interopRequireDefault(require("./SliderTrack"));
var _SliderFilledTrack = _interopRequireDefault(require("./SliderFilledTrack"));
var _Context = require("./Context");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createSlider(_ref) {
  let {
    Root,
    ThumbInteraction,
    Thumb,
    Track,
    FilledTrack
  } = _ref;
  const Slider = (0, _Slider.default)(Root);
  Slider.Thumb = (0, _SliderThumb.default)(Thumb, ThumbInteraction);
  Slider.Track = (0, _SliderTrack.default)(Track);
  Slider.FilledTrack = (0, _SliderFilledTrack.default)(FilledTrack);
  Slider.displayName = 'Slider';
  Slider.Thumb.displayName = 'Slider.Thumb';
  Slider.Track.displayName = 'Slider.Track';
  Slider.FilledTrack.displayName = 'Slider.FilledTrack';
  return Slider;
}
//# sourceMappingURL=index.js.map