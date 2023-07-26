"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIContext = exports.Provider = void 0;
var _overlay = require("@gluestack-ui/overlay");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _toast = require("@gluestack-ui/toast");
var _reactNativeAria = require("@gluestack-ui/react-native-aria");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-hooks/rules-of-hooks */
const UIContext = /*#__PURE__*/_react.default.createContext({});
exports.UIContext = UIContext;
const Provider = _ref => {
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
    _react.default.useEffect(() => {
      let escapeKeyListener = null;
      if (_reactNative.Platform.OS === 'web') {
        escapeKeyListener = e => {
          if (e.key === 'Escape') {
            if (_reactNativeAria.keyboardDismissHandlerManager.length() > 0) {
              const lastHandler = _reactNativeAria.keyboardDismissHandlerManager.pop();
              lastHandler();
            }
          }
        };
        document.addEventListener('keydown', escapeKeyListener);
      }
      return () => {
        if (_reactNative.Platform.OS === 'web') {
          document.removeEventListener('keydown', escapeKeyListener);
        }
      };
    }, []);
    return /*#__PURE__*/_react.default.createElement(StyledProvider, _extends({
      config: config
    }, props), /*#__PURE__*/_react.default.createElement(UIContext.Provider, {
      value: components
    }, /*#__PURE__*/_react.default.createElement(_overlay.OverlayProvider, null, /*#__PURE__*/_react.default.createElement(_toast.ToastProvider, null, children))));
  };
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map