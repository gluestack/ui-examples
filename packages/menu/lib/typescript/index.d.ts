/// <reference types="react" />
import type { IMenuComponentType } from './types';
declare const createMenu: <Root, Item, Label, Backdrop>({ Root: StyledMenu, Item: StyledMenuItem, Label: StyledItemLabel, Backdrop: StyledBackdrop, AnimatePresence, }: {
    Root: import("react").ComponentType<Root>;
    Item: import("react").ComponentType<Item>;
    Label: import("react").ComponentType<Label>;
    Backdrop: import("react").ComponentType<Backdrop>;
    AnimatePresence?: import("react").ComponentType<any> | undefined;
}) => IMenuComponentType<Root, Item, Label>;
export { createMenu };
//# sourceMappingURL=index.d.ts.map