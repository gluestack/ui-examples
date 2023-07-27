/// <reference types="react" />
import type { IActionsheetComponentType } from './types';
export declare function createActionsheet<ActionsheetProps, BackdropProps, ItemProps, ItemTextProps, DragIndicatorProps, IndicatorWrapperProps, ContentProps, ScrollViewProps, VirtualizedListProps, FlatListProps, SectionListProps, SectionHeaderTextProps, IconProps, AnimatePresenceProps>({ Root, Backdrop, Item, ItemText, DragIndicator, IndicatorWrapper, Content, ScrollView, VirtualizedList, FlatList, SectionList, SectionHeaderText, Icon, AnimatePresence, }: {
    Root: React.ComponentType<ActionsheetProps>;
    Backdrop: React.ComponentType<BackdropProps>;
    Item: React.ComponentType<ItemProps>;
    Icon: React.ComponentType<IconProps>;
    ItemText: React.ComponentType<ItemTextProps>;
    DragIndicator: React.ComponentType<DragIndicatorProps>;
    IndicatorWrapper: React.ComponentType<IndicatorWrapperProps>;
    Content: React.ComponentType<ContentProps>;
    ScrollView: React.ComponentType<ScrollViewProps>;
    VirtualizedList: React.ComponentType<VirtualizedListProps>;
    FlatList: React.ComponentType<FlatListProps>;
    SectionList: React.ComponentType<SectionListProps>;
    SectionHeaderText: React.ComponentType<SectionHeaderTextProps>;
    AnimatePresence?: React.ComponentType<AnimatePresenceProps>;
}): IActionsheetComponentType<ActionsheetProps, BackdropProps, ItemProps, ItemTextProps, DragIndicatorProps, IndicatorWrapperProps, ContentProps, ScrollViewProps, VirtualizedListProps, FlatListProps, SectionListProps, SectionHeaderTextProps, IconProps>;
//# sourceMappingURL=index.d.ts.map