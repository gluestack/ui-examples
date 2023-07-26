function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo } from 'react';
import { forwardRef } from 'react';
import { TabProvider } from './TabProvider';
export const Tabs = StyledTabs => /*#__PURE__*/memo( /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    value,
    ...props
  } = _ref;
  const DEFAULT_TAB = 'tab-0';
  const [currentActiveTab, setCurrentActiveTab] = React.useState(value ?? DEFAULT_TAB);
  const onChange = currentValue => setCurrentActiveTab(currentValue);
  return /*#__PURE__*/React.createElement(TabProvider, {
    currentActiveTab: currentActiveTab,
    onChange: onChange
  }, /*#__PURE__*/React.createElement(StyledTabs, _extends({}, props, {
    ref: ref
  })));
}));
//# sourceMappingURL=Tabs.js.map