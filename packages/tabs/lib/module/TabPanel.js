function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo } from 'react';
import { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useTab } from './TabProvider';
export const TabPanel = StyledTabPanel => /*#__PURE__*/memo( /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    value,
    ...props
  } = _ref;
  const {
    currentActiveTab
  } = useTab('TabContext');
  const isActive = value === currentActiveTab;
  return /*#__PURE__*/React.createElement(StyledTabPanel, _extends({
    accessibilityRole: Platform.OS === 'web' ? 'tabpanel' : undefined
  }, props, {
    style: {
      display: isActive ? 'flex' : 'none'
    },
    ref: ref
  }));
}));
//# sourceMappingURL=TabPanel.js.map