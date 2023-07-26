"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTabs = void 0;
var _Tab = require("./Tab");
var _TabList = require("./TabList");
var _TabPanel = require("./TabPanel");
var _TabPanels = require("./TabPanels");
var _Tabs = require("./Tabs");
var _TabTitle = require("./TabTitle");
var _TabIcon = require("./TabIcon");
const createTabs = _ref => {
  let {
    Root,
    Tab,
    TabPanels,
    TabList,
    TabPanel,
    TabTitle,
    TabIcon
  } = _ref;
  const TabsMain = (0, _Tabs.Tabs)(Root);
  TabsMain.Tab = (0, _Tab.Tab)(Tab);
  TabsMain.TabPanels = (0, _TabPanels.TabPanels)(TabPanels);
  TabsMain.TabList = (0, _TabList.TabList)(TabList);
  TabsMain.TabPanel = (0, _TabPanel.TabPanel)(TabPanel);
  TabsMain.TabTitle = (0, _TabTitle.TabTitle)(TabTitle);
  TabsMain.TabIcon = (0, _TabIcon.TabIcon)(TabIcon);
  TabsMain.displayName = 'Tabs';
  TabsMain.Tab.displayName = 'Tab';
  TabsMain.TabPanels.displayName = 'Panels';
  TabsMain.TabList.displayName = 'List';
  TabsMain.TabPanel.displayName = 'Panel';
  TabsMain.TabTitle.displayName = 'Title';
  TabsMain.TabIcon.displayName = 'Icon';
  return TabsMain;
};
exports.createTabs = createTabs;
//# sourceMappingURL=index.js.map