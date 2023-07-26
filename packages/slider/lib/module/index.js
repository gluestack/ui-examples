import SliderMain from './Slider';
import SliderThumb from './SliderThumb';
import SliderTrack from './SliderTrack';
import SliderFilledTrack from './SliderFilledTrack';
export { SliderContext } from './Context';
export function createSlider(_ref) {
  let {
    Root,
    ThumbInteraction,
    Thumb,
    Track,
    FilledTrack
  } = _ref;
  const Slider = SliderMain(Root);
  Slider.Thumb = SliderThumb(Thumb, ThumbInteraction);
  Slider.Track = SliderTrack(Track);
  Slider.FilledTrack = SliderFilledTrack(FilledTrack);
  Slider.displayName = 'Slider';
  Slider.Thumb.displayName = 'Slider.Thumb';
  Slider.Track.displayName = 'Slider.Track';
  Slider.FilledTrack.displayName = 'Slider.FilledTrack';
  return Slider;
}
//# sourceMappingURL=index.js.map