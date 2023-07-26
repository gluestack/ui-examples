function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useTooltipContext } from './context';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { Platform } from 'react-native';
export function TooltipContent(StyledTooltipContent, AnimatePresence) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
    let {
      children,
      style,
      ...props
    } = _ref;
    const {
      value
    } = useTooltipContext('TooltipContext');
    const {
      isOpen,
      targetRef,
      placement,
      crossOffset,
      offset,
      shouldFlip,
      shouldOverlapWithTrigger
    } = value;
    const overlayRef = React.useRef(null);
    const {
      overlayProps
    } = useOverlayPosition({
      placement,
      targetRef,
      overlayRef,
      crossOffset,
      offset,
      shouldOverlapWithTrigger,
      shouldFlip
    });
    const mergedRef = mergeRefs([ref, overlayRef]);
    return /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
      visible: isOpen,
      AnimatePresence: AnimatePresence
    }, /*#__PURE__*/React.createElement(StyledTooltipContent, _extends({}, props, {
      ref: mergedRef,
      accessibilityRole: Platform.OS === 'web' ? 'tooltip' : undefined,
      style: {
        ...overlayProps.style,
        position: 'absolute',
        ...style
      }
    }), children));
  });
}
//# sourceMappingURL=TooltipContent.js.map