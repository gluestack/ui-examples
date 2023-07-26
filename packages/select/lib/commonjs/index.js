"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSelect = createSelect;
var _Select = require("./Select");
var _SelectTrigger = require("./SelectTrigger");
var _SelectPortal = require("./SelectPortal");
var _SelectBackdrop = require("./SelectBackdrop");
var _SelectDragIndicator = require("./SelectDragIndicator");
var _SelectDragIndicatorWrapper = require("./SelectDragIndicatorWrapper");
var _SelectContent = require("./SelectContent");
var _SelectItem = require("./SelectItem");
var _SelectInput = require("./SelectInput");
var _SelectIcon = require("./SelectIcon");
var _SelectScrollView = require("./SelectScrollView");
var _SelectVirtualizedList = require("./SelectVirtualizedList");
var _SelectFlatList = require("./SelectFlatList");
var _SelectSectionList = require("./SelectSectionList");
var _SelectSectionHeaderText = require("./SelectSectionHeaderText");
function createSelect(_ref, _ref2) {
  let {
    Root,
    Trigger,
    Input,
    Icon
  } = _ref;
  let {
    Portal,
    Backdrop,
    Content,
    DragIndicator,
    DragIndicatorWrapper,
    Item,
    ItemText,
    ScrollView,
    VirtualizedList,
    FlatList,
    SectionList,
    SectionHeaderText
  } = _ref2;
  const Select = (0, _Select.Select)(Root);
  Select.Trigger = (0, _SelectTrigger.SelectTrigger)(Trigger);
  Select.Input = (0, _SelectInput.SelectInput)(Input);
  Select.Icon = (0, _SelectIcon.SelectIcon)(Icon);

  // Actionsheet mapping
  Select.Portal = (0, _SelectPortal.SelectPortal)(Portal);
  Select.Backdrop = (0, _SelectBackdrop.SelectBackdrop)(Backdrop);
  Select.Content = (0, _SelectContent.SelectContent)(Content);
  Select.DragIndicator = (0, _SelectDragIndicator.SelectDragIndicator)(DragIndicator);
  Select.DragIndicatorWrapper = (0, _SelectDragIndicatorWrapper.SelectDragIndicatorWrapper)(DragIndicatorWrapper);
  Select.Item = (0, _SelectItem.SelectItem)(Item, ItemText);
  Select.ScrollView = (0, _SelectScrollView.SelectScrollView)(ScrollView);
  Select.VirtualizedList = (0, _SelectVirtualizedList.SelectVirtualizedList)(VirtualizedList);
  Select.FlatList = (0, _SelectFlatList.SelectFlatList)(FlatList);
  Select.SectionList = (0, _SelectSectionList.SelectSectionList)(SectionList);
  Select.SectionHeaderText = (0, _SelectSectionHeaderText.SelectSectionHeaderText)(SectionHeaderText);
  Select.displayName = 'Select';
  Select.Trigger.displayName = 'Select.Trigger';
  Select.Input.displayName = 'Select.Input';
  Select.Icon.displayName = 'Select.Icon';
  Select.Portal.displayName = 'Select.Portal';
  Select.Backdrop.displayName = 'Select.Backdrop';
  Select.Content.displayName = 'Select.Content';
  Select.DragIndicator.displayName = 'Select.DragIndicator';
  Select.DragIndicatorWrapper.displayName = 'Select.DragIndicatorWrapper';
  Select.Item.displayName = 'Select.Item';
  return Select;
}
//# sourceMappingURL=index.js.map