function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';

// import { useOverlayPosition } from '@react-native-aria/overlays';
import { PopoverProvider } from './PopoverContext';
export const Popover = StyledPopover => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    onOpen,
    trigger,
    onClose,
    isOpen: isOpenProp,
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
    isKeyboardDismissable = true,
    shouldFlip,
    ...props
  } = _ref;
  const [isOpen, setIsOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: value => {
      value ? onOpen && onOpen() : onClose && onClose();
    }
  });
  const [bodyMounted, setBodyMounted] = React.useState(false);
  const [headerMounted, setHeaderMounted] = React.useState(false);
  var idCounter = 0;
  function uniqueId() {
    let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var id = ++idCounter;
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
    return trigger({
      'ref': reference,
      'onPress': handleOpen,
      'aria-expanded': isOpen ? true : false,
      'aria-controls': isOpen ? popoverContentId : undefined,
      'aria-haspopup': true
    }, {
      open: isOpen
    });
  };

  // let floatingParams: any = {};

  // if (Platform.OS === 'web') {
  //   floatingParams = { whileElementsMounted: autoUpdate };
  // }

  const targetRef = React.useRef(null);
  const contextValue = React.useMemo(() => {
    return {
      targetRef,
      strategy: 'absolute',
      handleClose,
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
      trapFocus,
      shouldFlip
    };
  }, [targetRef, handleClose, initialFocusRef, finalFocusRef, popoverContentId, bodyId, headerId, headerMounted, bodyMounted, setBodyMounted, setHeaderMounted, isOpen, placement, shouldOverlapWithTrigger, crossOffset, offset, trapFocus, shouldFlip]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/React.createElement(Overlay, {
    isOpen: isOpen,
    onRequestClose: handleClose,
    isKeyboardDismissable: isKeyboardDismissable,
    useRNModal: useRNModal,
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement(PopoverProvider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(StyledPopover, _extends({
    ref: ref
  }, props), children))));
});
//# sourceMappingURL=Popover.js.map