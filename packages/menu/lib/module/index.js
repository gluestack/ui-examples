// This is the main index file that will be included in build

import { Menu as MenuMain } from './Menu';
import { MenuItem } from './MenuItemStately';
import { MenuItemLabel } from './MenuItemLabel';
const createMenu = _ref => {
  let {
    Root: StyledMenu,
    Item: StyledMenuItem,
    Label: StyledItemLabel,
    Backdrop: StyledBackdrop,
    AnimatePresence
  } = _ref;
  const MenuTemp = MenuMain({
    StyledMenu,
    StyledMenuItem,
    StyledBackdrop,
    AnimatePresence
  });
  MenuTemp.Item = MenuItem;
  MenuTemp.ItemLabel = MenuItemLabel(StyledItemLabel);
  const Menu = MenuTemp;
  return Menu;
};
export { createMenu };
//# sourceMappingURL=index.js.map