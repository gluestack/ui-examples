import { Tab as TabHOC } from './Tab';
import { TabList as TabListMain } from './TabList';
import { TabPanel as TabPanelMain } from './TabPanel';
import { TabPanels as TabPanelsMain } from './TabPanels';
import { Tabs } from './Tabs';
import { TabTitle as TabTitleMain } from './TabTitle';
import { TabIcon as TabIconMain } from './TabIcon';
export const createTabs = _ref => {
  let {
    Root,
    Tab,
    TabPanels,
    TabList,
    TabPanel,
    TabTitle,
    TabIcon
  } = _ref;
  const TabsMain = Tabs(Root);
  TabsMain.Tab = TabHOC(Tab);
  TabsMain.TabPanels = TabPanelsMain(TabPanels);
  TabsMain.TabList = TabListMain(TabList);
  TabsMain.TabPanel = TabPanelMain(TabPanel);
  TabsMain.TabTitle = TabTitleMain(TabTitle);
  TabsMain.TabIcon = TabIconMain(TabIcon);
  TabsMain.displayName = 'Tabs';
  TabsMain.Tab.displayName = 'Tab';
  TabsMain.TabPanels.displayName = 'Panels';
  TabsMain.TabList.displayName = 'List';
  TabsMain.TabPanel.displayName = 'Panel';
  TabsMain.TabTitle.displayName = 'Title';
  TabsMain.TabIcon.displayName = 'Icon';
  return TabsMain;
};
//# sourceMappingURL=index.js.map