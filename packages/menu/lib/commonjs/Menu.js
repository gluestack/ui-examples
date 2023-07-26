"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _menu = require("@react-native-aria/menu");
var _reactStately = require("react-stately");
var _Popover = require("./MenuPopover/Popover");
var _MenuItem = require("./MenuItem");
var _OverlayAnimatePresence = require("./MenuPopover/OverlayAnimatePresence");
var _useTypeSelect = require("./useTypeSelect");
var _utils = require("@react-stately/utils");
var _MenuContext = require("./MenuContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable @typescript-eslint/no-unused-vars */
const Menu = _ref => {
  let {
    StyledMenu,
    StyledMenuItem,
    StyledBackdrop,
    AnimatePresence
  } = _ref;
  return /*#__PURE__*/(0, _react.forwardRef)(_ref2 => {
    let {
      crossOffset,
      closeOnSelect,
      defaultIsOpen,
      isOpen: isOpenProp,
      onOpen,
      onClose,
      offset,
      placement = 'bottom start',
      shouldFlip = true,
      trigger,
      shouldOverlapWithTrigger,
      ...props
    } = _ref2;
    const [isOpen, setIsOpen] = (0, _utils.useControlledState)(isOpenProp, defaultIsOpen, isOpenValue => {
      isOpenValue ? onOpen === null || onOpen === void 0 ? void 0 : onOpen() : onClose === null || onClose === void 0 ? void 0 : onClose();
    });
    const handleClose = () => {
      setIsOpen(false);
    };
    const showBackdrop = _react.default.useRef(false);
    const state = (0, _reactStately.useMenuTriggerState)({
      isOpen: isOpen || false,
      //@ts-ignore
      closeOnSelect: closeOnSelect,
      onOpenChange: isOpenValue => {
        setIsOpen(isOpenValue);
      },
      defaultOpen: defaultIsOpen
    });
    const triggerRef = _react.default.useRef(null);
    const {
      menuTriggerProps,
      menuProps
    } = (0, _menu.useMenuTrigger)({}, state, triggerRef);
    const updatedTrigger = () => {
      return trigger({
        ...menuTriggerProps,
        ref: triggerRef
      });
    };
    return /*#__PURE__*/_react.default.createElement(_MenuContext.MenuContext.Provider, {
      value: {
        onClose: handleClose,
        showBackdrop
      }
    }, updatedTrigger(), /*#__PURE__*/_react.default.createElement(_Popover.Popover, {
      placement: placement,
      triggerRef: triggerRef,
      state: state,
      AnimatePresence: AnimatePresence,
      shouldOverlapWithTrigger: shouldOverlapWithTrigger,
      crossOffset: crossOffset,
      offset: offset,
      shouldFlip: shouldFlip,
      StyledBackdrop: StyledBackdrop
    }, /*#__PURE__*/_react.default.createElement(MenuComponent, _extends({}, menuProps, props, {
      isOpen: state.isOpen,
      AnimatePresence: AnimatePresence,
      autoFocus: state.focusStrategy || true,
      onClose: () => state.close(),
      StyledMenu: StyledMenu,
      StyledMenuItem: StyledMenuItem,
      closeOnSelect: closeOnSelect
    }))));
  });
};
exports.Menu = Menu;
const MenuComponent = _ref3 => {
  let {
    StyledMenu,
    StyledMenuItem,
    AnimatePresence,
    isOpen,
    closeOnSelect,
    ...props
  } = _ref3;
  const state = (0, _reactStately.useTreeState)(props);
  const ref = (0, _react.useRef)(null);
  const {
    menuProps
  } = (0, _menu.useMenu)(props, state, ref);
  const {
    onClose,
    onOpen,
    selectionMode,
    onSelectChange,
    shouldFlip,
    children,
    placement,
    offset,
    crossOffset,
    trigger,
    StyledBackdrop,
    ...restProps
  } = props;
  const typeSelectProps = (0, _useTypeSelect.useTypeSelect)(state);
  return /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
    visible: isOpen,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/_react.default.createElement(StyledMenu, _extends({}, menuProps, typeSelectProps, {
    ref: ref
  }, restProps), [...state.collection].map(item => /*#__PURE__*/_react.default.createElement(_MenuItem.MenuItem, {
    StyledMenuItem: StyledMenuItem,
    key: item.key,
    item: item,
    state: state,
    onAction: props.onAction,
    onClose: props.onClose,
    closeOnSelect: closeOnSelect
  }))));
};
//# sourceMappingURL=Menu.js.map