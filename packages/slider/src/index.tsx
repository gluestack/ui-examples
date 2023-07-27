import SliderMain from "./Slider";
import SliderThumb from "./SliderThumb";
import SliderTrack from "./SliderTrack";
import SliderFilledTrack from "./SliderFilledTrack";
import type { ISliderComponentType } from "./types";

export { SliderContext } from "./Context";

export type { ISliderProps } from "./types";

export function createSlider<
  SliderProps,
  SliderThumbInteractionProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderFilledTrackProps
>({
  Root,
  ThumbInteraction,
  Thumb,
  Track,
  FilledTrack,
}: {
  Root: React.ComponentType<SliderProps>;
  Thumb: React.ComponentType<SliderThumbProps>;
  ThumbInteraction: React.ComponentType<SliderThumbInteractionProps>;
  Track: React.ComponentType<SliderTrackProps>;
  FilledTrack: React.ComponentType<SliderFilledTrackProps>;
}) {
  const Slider: any = Root;
  Slider.Thumb = ThumbInteraction;
  Slider.Track = Track;
  Slider.FilledTrack = FilledTrack;

  Slider.displayName = "Slider";
  Slider.Thumb.displayName = "Slider.Thumb";
  Slider.Track.displayName = "Slider.Track";
  Slider.FilledTrack.displayName = "Slider.FilledTrack";

  return Slider as ISliderComponentType<
    SliderProps,
    SliderThumbProps,
    SliderTrackProps,
    SliderFilledTrackProps
  >;
}
