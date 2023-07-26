/// <reference types="react" />
interface ITabProps {
    value?: string;
}
interface ITabsProps {
    value?: string;
}
interface ITabPanelProps {
    value?: string;
}
export type ITabsComponentType<TabsProps, TabProps, TabPanelsProps, TabListProps, TabPanelProps, TabTitleProps, TabIconProps> = ((props: TabsProps & ITabsProps) => JSX.Element) & {
    Tab: (props: TabProps & ITabProps) => JSX.Element;
    TabPanels: (props: TabPanelsProps) => JSX.Element;
    TabList: (props: TabListProps) => JSX.Element;
    TabPanel: (props: TabPanelProps & ITabPanelProps) => JSX.Element;
    TabTitle: (props: TabTitleProps) => JSX.Element;
    TabIcon: (props: TabIconProps) => JSX.Element;
};
export {};
//# sourceMappingURL=types.d.ts.map