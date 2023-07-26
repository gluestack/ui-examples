/// <reference types="react" />
import type { IPopoverComponentType } from './types';
export declare function createPopover<PopoverProps, ArrowProps, ContentProps, HeaderProps, FooterProps, BodyProps, BackdropProps, CloseButtonProps, AnimatePresenceProps>({ Root, Arrow, Content, Header, Footer, Body, Backdrop, CloseButton, AnimatePresence, }: {
    Root: React.ComponentType<PopoverProps>;
    Arrow: React.ComponentType<ArrowProps>;
    Content: React.ComponentType<ContentProps>;
    Header: React.ComponentType<HeaderProps>;
    Footer: React.ComponentType<FooterProps>;
    Body: React.ComponentType<BodyProps>;
    Backdrop: React.ComponentType<BackdropProps>;
    CloseButton: React.ComponentType<CloseButtonProps>;
    AnimatePresence?: React.ComponentType<AnimatePresenceProps>;
}): IPopoverComponentType<PopoverProps, ArrowProps, ContentProps, HeaderProps, FooterProps, BodyProps, BackdropProps, CloseButtonProps>;
//# sourceMappingURL=index.d.ts.map