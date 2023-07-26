import React from 'react';
import type { ViewStyle } from 'react-native';
export declare const ExitAnimationContext: React.Context<{
    exited: boolean;
    setExited: (_exited: boolean) => void;
}>;
export { OverlayProvider } from '@react-native-aria/overlays';
export interface IOverlayProps {
    isOpen?: boolean;
    children?: any;
    useRNModalOnAndroid?: boolean;
    useRNModal?: boolean;
    onRequestClose?: any;
    isKeyboardDismissable?: boolean;
    animationPreset?: 'fade' | 'slide' | 'none';
    style?: ViewStyle;
    unmountOnExit?: boolean;
}
declare const Overlay: {
    ({ children, isOpen, useRNModal, useRNModalOnAndroid, isKeyboardDismissable, animationPreset, onRequestClose, style, ref, unmountOnExit, }: IOverlayProps & {
        ref?: any;
    }): React.JSX.Element | null;
    displayName: string;
};
export { Overlay };
//# sourceMappingURL=index.d.ts.map