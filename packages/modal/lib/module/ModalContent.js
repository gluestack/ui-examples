function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { Platform, findNodeHandle, AccessibilityInfo } from 'react-native';
import { FocusScope } from '@react-native-aria/focus';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { useDialog } from '@react-native-aria/dialog';
import { mergeRefs } from '@gluestack-ui/utils';
const ModalContent = (StyledModalContent, AnimatePresence) => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    focusable = false,
    ...props
  } = _ref;
  const {
    initialFocusRef,
    finalFocusRef,
    handleClose,
    visible
  } = React.useContext(ModalContext);
  const contentRef = React.useRef(null);
  const mergedRef = mergeRefs([contentRef, ref]);

  // @ts-ignore
  const {
    dialogProps
  } = useDialog({
    ...props
  }, mergedRef);
  React.useEffect(() => {
    if (contentRef) {
      const reactTag = findNodeHandle(contentRef.current);
      if (reactTag) {
        // Issue from react-native side
        // Hack for now, will fix this later
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [visible, contentRef]);
  React.useEffect(() => {
    if (visible) {
      if (initialFocusRef && initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current) {
        if (initialFocusRef.current.hasOwnProperty('focus')) {
          var _initialFocusRef$curr;
          initialFocusRef === null || initialFocusRef === void 0 ? void 0 : (_initialFocusRef$curr = initialFocusRef.current) === null || _initialFocusRef$curr === void 0 ? void 0 : _initialFocusRef$curr.focus();
        }
      }
    } else {
      if (finalFocusRef && finalFocusRef !== null && finalFocusRef !== void 0 && finalFocusRef.current) {
        if (finalFocusRef.current.hasOwnProperty('focus')) {
          var _finalFocusRef$curren;
          finalFocusRef === null || finalFocusRef === void 0 ? void 0 : (_finalFocusRef$curren = finalFocusRef.current) === null || _finalFocusRef$curren === void 0 ? void 0 : _finalFocusRef$curren.focus();
        }
      }
    }
  }, [initialFocusRef, finalFocusRef, visible]);
  return /*#__PURE__*/React.createElement(FocusScope, {
    contain: visible,
    autoFocus: visible && !initialFocusRef,
    restoreFocus: visible && !finalFocusRef
  }, /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
    visible: visible,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/React.createElement(StyledModalContent, _extends({}, props, {
    ref: mergedRef,
    onAccessibilityEscape: handleClose,
    "aria-modal": "true",
    accessibilityRole: Platform.OS === 'web' ? 'dialog' : undefined,
    accessibilityViewIsModal: true,
    focusable: Platform.OS === 'web' ? focusable : undefined
  }, dialogProps), children)));
});
export default ModalContent;
//# sourceMappingURL=ModalContent.js.map