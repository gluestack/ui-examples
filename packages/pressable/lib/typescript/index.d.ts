/// <reference types="react" />
export declare function createPressable<PressableProps>({ Root, }: {
    Root: React.ComponentType<PressableProps>;
}): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<PressableProps & Omit<import("react-native").PressableProps, "children"> & {
    children?: import("react").ReactNode | (({ hovered, pressed, focused, }: {
        hovered?: boolean | undefined;
        pressed?: boolean | undefined;
        focused?: boolean | undefined;
    }) => import("react").ReactNode);
}> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=index.d.ts.map