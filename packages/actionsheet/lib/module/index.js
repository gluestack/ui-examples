import { Actionsheet as ActionsheetMain } from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import { ActionsheetItem } from './ActionsheetItem';
import { ActionsheetItemText } from './ActionsheetItemText';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';
import { ActionsheetDragIndicatorWrapper } from './ActionsheetDragIndicatorWrapper';
import { ActionsheetScrollView } from './ActionsheetScrollView';
import { ActionsheetVirtualizedList } from './ActionsheetVirtualizedList';
import { ActionsheetFlatList } from './ActionsheetFlatList';
import { ActionsheetSectionList } from './ActionsheetSectionList';
import { ActionsheetSectionHeaderText } from './ActionsheetSectionHeaderText';
import { ActionsheetIcon } from './ActionsheetIcon';
export function createActionsheet(_ref) {
  let {
    Root,
    Backdrop,
    Item,
    ItemText,
    DragIndicator,
    IndicatorWrapper,
    Content,
    ScrollView,
    VirtualizedList,
    FlatList,
    SectionList,
    SectionHeaderText,
    Icon,
    AnimatePresence
  } = _ref;
  const Actionsheet = ActionsheetMain(Root);
  Actionsheet.Backdrop = ActionsheetBackdrop(Backdrop, AnimatePresence);
  Actionsheet.Content = ActionsheetContent(Content, AnimatePresence);
  Actionsheet.DragIndicator = ActionsheetDragIndicator(DragIndicator);
  Actionsheet.DragIndicatorWrapper = ActionsheetDragIndicatorWrapper(IndicatorWrapper);
  Actionsheet.Item = ActionsheetItem(Item);
  Actionsheet.ItemText = ActionsheetItemText(ItemText);
  Actionsheet.Icon = ActionsheetIcon(Icon);
  Actionsheet.ScrollView = ActionsheetScrollView(ScrollView);
  Actionsheet.VirtualizedList = ActionsheetVirtualizedList(VirtualizedList);
  Actionsheet.FlatList = ActionsheetFlatList(FlatList);
  Actionsheet.SectionList = ActionsheetSectionList(SectionList);
  Actionsheet.SectionHeaderText = ActionsheetSectionHeaderText(SectionHeaderText);
  return Actionsheet;
}
//# sourceMappingURL=index.js.map