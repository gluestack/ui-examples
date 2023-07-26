function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useKeyboardDismissable } from '@gluestack-ui/hooks';
import { usePopover } from './PopoverContext';
import { Platform, findNodeHandle, AccessibilityInfo } from 'react-native';
// import { usePopperContext } from '../../popper/src/PopperContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { FocusScope } from '@react-native-aria/focus';
import { useDialog } from '@react-native-aria/dialog';
import { PopoverContentProvider } from './PopoverContext';
const PopoverContent = (StyledPopoverContent, AnimatePresence) => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    style,
    ...props
  } = _ref;
  const {
    value
  } = usePopover('PopoverContext');
  const {
    targetRef,
    initialFocusRef,
    finalFocusRef,
    popoverContentId,
    headerMounted,
    bodyMounted,
    bodyId,
    headerId,
    isOpen,
    placement,
    shouldOverlapWithTrigger,
    crossOffset,
    offset,
    trapFocus,
    handleClose,
    shouldFlip
  } = value;
  const contentRef = React.useRef(null);
  React.useEffect(() => {
    if (contentRef) {
      const reactTag = findNodeHandle(contentRef.current);
      if (reactTag) {
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [isOpen, contentRef]);
  const {
    dialogProps
  } = useDialog({
    initialFocusRef,
    ...props
  }, contentRef);
  React.useEffect(() => {
    const finalFocusRefCurrentVal = finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current;
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
    return () => {
      if (finalFocusRefCurrentVal) {
        finalFocusRefCurrentVal.focus();
      }
    };
  }, [finalFocusRef, initialFocusRef]);
  useKeyboardDismissable({
    enabled: true,
    callback: handleClose
  });
  const accessibilityProps = Platform.OS === 'web' ? {
    'accessibilityRole': 'dialog',
    'aria-labelledby': headerMounted ? headerId : undefined,
    'aria-describedby': bodyMounted ? bodyId : undefined
  } : {};
  const overlayRef = React.useRef(null);
  // const { x, y, reference, floating, strategy } = useFloating({
  //   placement: placement,
  //   middleware: [offset(10), flip(), shift()],
  //   ...floatingParams,
  // });
  const {
    overlayProps
  } = useOverlayPosition({
    placement: placement,
    targetRef,
    overlayRef,
    crossOffset,
    offset,
    shouldOverlapWithTrigger,
    shouldFlip
  });
  const mergedRef = mergeRefs([ref, overlayRef, contentRef]);
  return /*#__PURE__*/React.createElement(FocusScope, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
    visible: isOpen,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/React.createElement(PopoverContentProvider, {
    value: value
  }, /*#__PURE__*/React.createElement(StyledPopoverContent, _extends({
    nativeID: popoverContentId
  }, accessibilityProps, props, {
    ref: mergedRef,
    isOpen: isOpen,
    collapsable: false
  }, dialogProps, {
    focusable: Platform.OS === 'web' ? true : undefined,
    style: {
      position: 'absolute',
      ...(overlayProps === null || overlayProps === void 0 ? void 0 : overlayProps.style),
      ...style
    }
  }), children))));
});
export default PopoverContent;
//# sourceMappingURL=PopoverContent.js.map