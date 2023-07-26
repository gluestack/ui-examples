/// <reference types="react" />
import type { ISliderComponentType } from './types';
export { SliderContext } from './Context';
export type { ISliderProps } from './types';
export declare function createSlider<SliderProps, SliderThumbInteractionProps, SliderThumbProps, SliderTrackProps, SliderFilledTrackProps>({ Root, ThumbInteraction, Thumb, Track, FilledTrack, }: {
    Root: React.ComponentType<SliderProps>;
    Thumb: React.ComponentType<SliderThumbProps>;
    ThumbInteraction: React.ComponentType<SliderThumbInteractionProps>;
    Track: React.ComponentType<SliderTrackProps>;
    FilledTrack: React.ComponentType<SliderFilledTrackProps>;
}): ISliderComponentType<SliderProps, SliderThumbProps, SliderTrackProps, SliderFilledTrackProps>;
//# sourceMappingURL=index.d.ts.map