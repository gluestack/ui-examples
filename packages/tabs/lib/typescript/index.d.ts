import type React from 'react';
import type { ITabsComponentType } from './types';
export declare const createTabs: <TabsProps, TabProps, TabPanelsProps, TabListProps, TabPanelProps, TabTitleProps, TabIconProps>({ Root, Tab, TabPanels, TabList, TabPanel, TabTitle, TabIcon, }: {
    Root: React.ComponentType<TabsProps>;
    Tab: React.ComponentType<TabProps>;
    TabPanels: React.ComponentType<TabPanelsProps>;
    TabList: React.ComponentType<TabListProps>;
    TabPanel: React.ComponentType<TabPanelProps>;
    TabTitle: React.ComponentType<TabTitleProps>;
    TabIcon: React.ComponentType<TabIconProps>;
}) => ITabsComponentType<TabsProps, TabProps, TabPanelsProps, TabListProps, TabPanelProps, TabTitleProps, TabIconProps>;
//# sourceMappingURL=index.d.ts.map