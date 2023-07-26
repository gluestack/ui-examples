/// <reference types="react" />
import type { IModalComponentType } from './types';
export { ModalContext } from './Context';
export declare const createModal: <ModalProps, ContentProps, CloseButtonProps, HeaderProps, FooterProps, BodyProps, BackdropProps, AnimatePresenceProps>({ Root, Content, CloseButton, Header, Footer, Body, Backdrop, AnimatePresence, }: {
    Root: import("react").ComponentType<ModalProps>;
    Content: import("react").ComponentType<ContentProps>;
    CloseButton: import("react").ComponentType<CloseButtonProps>;
    Header: import("react").ComponentType<HeaderProps>;
    Footer: import("react").ComponentType<FooterProps>;
    Body: import("react").ComponentType<BodyProps>;
    Backdrop: import("react").ComponentType<BackdropProps>;
    AnimatePresence?: import("react").ComponentType<AnimatePresenceProps> | undefined;
}) => IModalComponentType<ModalProps, ContentProps, CloseButtonProps, HeaderProps, FooterProps, BodyProps, BackdropProps>;
//# sourceMappingURL=index.d.ts.map