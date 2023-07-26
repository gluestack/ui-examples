function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import { View } from 'react-native';
import { PopoverProvider } from './PopoverContext';
import { FocusScope as FocusScopeAria } from '@react-native-aria/focus';
import { PopoverContent } from './PopoverContent';
import { MenuContext } from '../MenuContext';
export const Popover = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    state,
    onOpen,
    trigger,
    children,
    defaultIsOpen = false,
    initialFocusRef,
    finalFocusRef,
    useRNModal,
    trapFocus = true,
    placement = 'bottom',
    shouldOverlapWithTrigger = false,
    crossOffset,
    offset,
    triggerRef,
    AnimatePresence,
    shouldFlip,
    focusScope = true,
    StyledBackdrop,
    ...props
  } = _ref;
  const [isOpen, setIsOpen] = useControllableState({
    value: state === null || state === void 0 ? void 0 : state.isOpen,
    defaultValue: defaultIsOpen,
    onChange: value => {
      value ? onOpen && onOpen() : state.close && state.close();
    }
  });
  const {
    onClose
  } = React.useContext(MenuContext);
  const [bodyMounted, setBodyMounted] = React.useState(false);
  const [headerMounted, setHeaderMounted] = React.useState(false);
  let idCounter = 0;
  function uniqueId() {
    let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    const id = ++idCounter;
    return prefix + id;
  }
  const id = uniqueId();
  const popoverContentId = `${id}-content`;
  const headerId = `${popoverContentId}-header`;
  const bodyId = `${popoverContentId}-body`;
  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const updatedTrigger = reference => {
    if (trigger) {
      return trigger({
        'ref': reference,
        'onPress': handleOpen,
        'aria-expanded': isOpen ? true : false,
        'aria-controls': isOpen ? popoverContentId : undefined,
        'aria-haspopup': true
      }, {
        open: isOpen
      });
    }
    return null;
  };
  const targetRefTemp = React.useRef(null);
  const targetRef = triggerRef || targetRefTemp;
  return /*#__PURE__*/React.createElement(React.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/React.createElement(Overlay, {
    isOpen: isOpen,
    onRequestClose: handleClose,
    isKeyboardDismissable: true,
    useRNModal: useRNModal,
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement(PopoverProvider, {
    value: {
      onClose: handleClose,
      targetRef,
      strategy: 'absolute',
      handleClose: handleClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      bodyId,
      headerId,
      headerMounted,
      bodyMounted,
      setBodyMounted,
      setHeaderMounted,
      isOpen,
      placement,
      shouldOverlapWithTrigger,
      crossOffset,
      offset,
      shouldFlip
    }
  }, /*#__PURE__*/React.createElement(StyledBackdrop, {
    onPress: onClose,
    focusable: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement(View, _extends({
    ref: ref
  }, props), /*#__PURE__*/React.createElement(FocusScopeComponent, {
    trapFocus: trapFocus,
    focusScope: focusScope
  }, /*#__PURE__*/React.createElement(PopoverContent, {
    AnimatePresence: AnimatePresence
  }, children))))));
});
const FocusScopeComponent = _ref2 => {
  let {
    trapFocus,
    focusScope,
    children
  } = _ref2;
  if (focusScope) return /*#__PURE__*/React.createElement(FocusScopeAria, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, children);
  return children;
};
//# sourceMappingURL=Popover.js.map