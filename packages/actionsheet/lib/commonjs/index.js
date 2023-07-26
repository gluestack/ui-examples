"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createActionsheet = createActionsheet;
var _Actionsheet = require("./Actionsheet");
var _ActionsheetContent = _interopRequireDefault(require("./ActionsheetContent"));
var _ActionsheetItem = require("./ActionsheetItem");
var _ActionsheetItemText = require("./ActionsheetItemText");
var _ActionsheetBackdrop = _interopRequireDefault(require("./ActionsheetBackdrop"));
var _ActionsheetDragIndicator = _interopRequireDefault(require("./ActionsheetDragIndicator"));
var _ActionsheetDragIndicatorWrapper = require("./ActionsheetDragIndicatorWrapper");
var _ActionsheetScrollView = require("./ActionsheetScrollView");
var _ActionsheetVirtualizedList = require("./ActionsheetVirtualizedList");
var _ActionsheetFlatList = require("./ActionsheetFlatList");
var _ActionsheetSectionList = require("./ActionsheetSectionList");
var _ActionsheetSectionHeaderText = require("./ActionsheetSectionHeaderText");
var _ActionsheetIcon = require("./ActionsheetIcon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createActionsheet(_ref) {
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
  const Actionsheet = (0, _Actionsheet.Actionsheet)(Root);
  Actionsheet.Backdrop = (0, _ActionsheetBackdrop.default)(Backdrop, AnimatePresence);
  Actionsheet.Content = (0, _ActionsheetContent.default)(Content, AnimatePresence);
  Actionsheet.DragIndicator = (0, _ActionsheetDragIndicator.default)(DragIndicator);
  Actionsheet.DragIndicatorWrapper = (0, _ActionsheetDragIndicatorWrapper.ActionsheetDragIndicatorWrapper)(IndicatorWrapper);
  Actionsheet.Item = (0, _ActionsheetItem.ActionsheetItem)(Item);
  Actionsheet.ItemText = (0, _ActionsheetItemText.ActionsheetItemText)(ItemText);
  Actionsheet.Icon = (0, _ActionsheetIcon.ActionsheetIcon)(Icon);
  Actionsheet.ScrollView = (0, _ActionsheetScrollView.ActionsheetScrollView)(ScrollView);
  Actionsheet.VirtualizedList = (0, _ActionsheetVirtualizedList.ActionsheetVirtualizedList)(VirtualizedList);
  Actionsheet.FlatList = (0, _ActionsheetFlatList.ActionsheetFlatList)(FlatList);
  Actionsheet.SectionList = (0, _ActionsheetSectionList.ActionsheetSectionList)(SectionList);
  Actionsheet.SectionHeaderText = (0, _ActionsheetSectionHeaderText.ActionsheetSectionHeaderText)(SectionHeaderText);
  return Actionsheet;
}
//# sourceMappingURL=index.js.map