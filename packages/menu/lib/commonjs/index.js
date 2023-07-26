"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMenu = void 0;
var _Menu = require("./Menu");
var _MenuItemStately = require("./MenuItemStately");
var _MenuItemLabel = require("./MenuItemLabel");
// This is the main index file that will be included in build

const createMenu = _ref => {
  let {
    Root: StyledMenu,
    Item: StyledMenuItem,
    Label: StyledItemLabel,
    Backdrop: StyledBackdrop,
    AnimatePresence
  } = _ref;
  const MenuTemp = (0, _Menu.Menu)({
    StyledMenu,
    StyledMenuItem,
    StyledBackdrop,
    AnimatePresence
  });
  MenuTemp.Item = _MenuItemStately.MenuItem;
  MenuTemp.ItemLabel = (0, _MenuItemLabel.MenuItemLabel)(StyledItemLabel);
  const Menu = MenuTemp;
  return Menu;
};
exports.createMenu = createMenu;
//# sourceMappingURL=index.js.map