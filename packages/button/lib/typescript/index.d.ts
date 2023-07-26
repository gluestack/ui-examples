import type React from 'react';
import type { IButtonComponentType } from './types';
export declare function createButton<ButtonProps, TextProps, GroupProps, GroupHSpacerProps, GroupVSpacerProps, SpinnerProps>({ Root, Text, Group, GroupHSpacer, GroupVSpacer, Spinner, }: {
    Root: React.ComponentType<ButtonProps>;
    Text: React.ComponentType<TextProps>;
    Group: React.ComponentType<GroupProps>;
    GroupHSpacer: React.ComponentType<GroupHSpacerProps>;
    GroupVSpacer: React.ComponentType<GroupVSpacerProps>;
    Spinner: React.ComponentType<SpinnerProps>;
}): IButtonComponentType<ButtonProps, GroupProps, GroupHSpacerProps, GroupVSpacerProps, SpinnerProps, TextProps>;
//# sourceMappingURL=index.d.ts.map