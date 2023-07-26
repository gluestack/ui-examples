function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, useRef } from 'react';
import { useMenu, useMenuTrigger } from '@react-native-aria/menu';
import { useTreeState, useMenuTriggerState } from 'react-stately';
import { Popover } from './MenuPopover/Popover';
import { MenuItem } from './MenuItem';
import { OverlayAnimatePresence } from './MenuPopover/OverlayAnimatePresence';
import { useTypeSelect } from './useTypeSelect';
import { useControlledState } from '@react-stately/utils';
import { MenuContext } from './MenuContext';
export const Menu = _ref => {
  let {
    StyledMenu,
    StyledMenuItem,
    StyledBackdrop,
    AnimatePresence
  } = _ref;
  return /*#__PURE__*/forwardRef(_ref2 => {
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
    const [isOpen, setIsOpen] = useControlledState(isOpenProp, defaultIsOpen, isOpenValue => {
      isOpenValue ? onOpen === null || onOpen === void 0 ? void 0 : onOpen() : onClose === null || onClose === void 0 ? void 0 : onClose();
    });
    const handleClose = () => {
      setIsOpen(false);
    };
    const showBackdrop = React.useRef(false);
    const state = useMenuTriggerState({
      isOpen: isOpen || false,
      //@ts-ignore
      closeOnSelect: closeOnSelect,
      onOpenChange: isOpenValue => {
        setIsOpen(isOpenValue);
      },
      defaultOpen: defaultIsOpen
    });
    const triggerRef = React.useRef(null);
    const {
      menuTriggerProps,
      menuProps
    } = useMenuTrigger({}, state, triggerRef);
    const updatedTrigger = () => {
      return trigger({
        ...menuTriggerProps,
        ref: triggerRef
      });
    };
    return /*#__PURE__*/React.createElement(MenuContext.Provider, {
      value: {
        onClose: handleClose,
        showBackdrop
      }
    }, updatedTrigger(), /*#__PURE__*/React.createElement(Popover, {
      placement: placement,
      triggerRef: triggerRef,
      state: state,
      AnimatePresence: AnimatePresence,
      shouldOverlapWithTrigger: shouldOverlapWithTrigger,
      crossOffset: crossOffset,
      offset: offset,
      shouldFlip: shouldFlip,
      StyledBackdrop: StyledBackdrop
    }, /*#__PURE__*/React.createElement(MenuComponent, _extends({}, menuProps, props, {
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
const MenuComponent = _ref3 => {
  let {
    StyledMenu,
    StyledMenuItem,
    AnimatePresence,
    isOpen,
    closeOnSelect,
    ...props
  } = _ref3;
  const state = useTreeState(props);
  const ref = useRef(null);
  const {
    menuProps
  } = useMenu(props, state, ref);
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
  const typeSelectProps = useTypeSelect(state);
  return /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
    visible: isOpen,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/React.createElement(StyledMenu, _extends({}, menuProps, typeSelectProps, {
    ref: ref
  }, restProps), [...state.collection].map(item => /*#__PURE__*/React.createElement(MenuItem, {
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