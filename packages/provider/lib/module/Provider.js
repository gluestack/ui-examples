function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react-hooks/rules-of-hooks */
import { OverlayProvider } from '@gluestack-ui/overlay';
import React from 'react';
import { Platform } from 'react-native';
import { ToastProvider } from '@gluestack-ui/toast';
import { keyboardDismissHandlerManager } from '@gluestack-ui/react-native-aria';
export const UIContext = /*#__PURE__*/React.createContext({});
export const Provider = _ref => {
  let {
    StyledProvider
  } = _ref;
  return _ref2 => {
    let {
      children,
      components,
      config,
      ...props
    } = _ref2;
    React.useEffect(() => {
      let escapeKeyListener = null;
      if (Platform.OS === 'web') {
        escapeKeyListener = e => {
          if (e.key === 'Escape') {
            if (keyboardDismissHandlerManager.length() > 0) {
              const lastHandler = keyboardDismissHandlerManager.pop();
              lastHandler();
            }
          }
        };
        document.addEventListener('keydown', escapeKeyListener);
      }
      return () => {
        if (Platform.OS === 'web') {
          document.removeEventListener('keydown', escapeKeyListener);
        }
      };
    }, []);
    return /*#__PURE__*/React.createElement(StyledProvider, _extends({
      config: config
    }, props), /*#__PURE__*/React.createElement(UIContext.Provider, {
      value: components
    }, /*#__PURE__*/React.createElement(OverlayProvider, null, /*#__PURE__*/React.createElement(ToastProvider, null, children))));
  };
};
//# sourceMappingURL=Provider.js.map