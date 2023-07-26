export interface ISupportedTransitions {
    opacity?: number;
    translateY?: number;
    translateX?: number;
    scale?: number;
    scaleX?: number;
    scaleY?: number;
    rotate?: string;
}
export interface ITransitionConfig {
    type?: 'timing' | 'spring';
    easing?: (value: number) => number;
    overshootClamping?: boolean;
    restDisplacementThreshold?: number;
    restSpeedThreshold?: number;
    velocity?: number | {
        x: number;
        y: number;
    };
    bounciness?: number;
    speed?: number;
    tension?: number;
    friction?: number;
    stiffness?: number;
    mass?: number;
    damping?: number;
    delay?: number;
    duration?: number;
    useNativeDriver?: boolean;
}
//# sourceMappingURL=types.d.ts.map