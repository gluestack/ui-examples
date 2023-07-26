import React from 'react';
import type { PressableProps } from 'react-native';
declare function Pressable<T>(StyledPressable: React.ComponentType<T>): React.ForwardRefExoticComponent<React.PropsWithoutRef<T & Omit<PressableProps, "children"> & {
    children?: React.ReactNode | (({ hovered, pressed, focused, }: {
        hovered?: boolean | undefined;
        pressed?: boolean | undefined;
        focused?: boolean | undefined;
    }) => React.ReactNode);
}> & React.RefAttributes<unknown>>;
export default Pressable;
//# sourceMappingURL=Pressable.d.ts.map