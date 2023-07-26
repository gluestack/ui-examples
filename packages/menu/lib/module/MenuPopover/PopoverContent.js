function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useKeyboardDismissable } from '@gluestack-ui/hooks';
import { usePopover } from './PopoverContext';
import { AccessibilityInfo, View, findNodeHandle } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';
const PopoverContent = /*#__PURE__*/forwardRef((_ref, ref) => {
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
    onClose,
    initialFocusRef,
    finalFocusRef,
    popoverContentId,
    placement,
    shouldOverlapWithTrigger,
    crossOffset,
    offset,
    shouldFlip,
    isOpen
  } = value;
  const contentRef = React.useRef(null);
  React.useEffect(() => {
    if (contentRef) {
      const reactTag = findNodeHandle(contentRef.current);
      if (reactTag) {
        AccessibilityInfo.isScreenReaderEnabled().then(enabled => {
          if (enabled) {
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
          }
        });
      }
    }
  }, [isOpen, contentRef]);
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
    callback: onClose
  });
  const overlayRef = React.useRef(null);
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
  return /*#__PURE__*/React.createElement(View, _extends({
    nativeID: popoverContentId
  }, props, {
    ref: mergedRef,
    collapsable: false
    // eslint-disable-next-line react-native/no-inline-styles
    ,
    style: {
      position: 'absolute',
      ...(overlayProps === null || overlayProps === void 0 ? void 0 : overlayProps.style),
      ...style
    },
    accessible: true
  }), children);
});
export { PopoverContent };
//# sourceMappingURL=PopoverContent.js.map