"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = exports.ToastProvider = exports.ToastContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ToastList = require("./ToastList");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ToastContext = /*#__PURE__*/(0, _react.createContext)({
  toastInfo: {},
  setToastInfo: () => {},
  setToast: () => {},
  removeToast: () => {},
  hideAll: () => {},
  isActive: () => false,
  visibleToasts: {},
  setVisibleToasts: () => {},
  hideToast: () => {}
});
exports.ToastContext = ToastContext;
const ToastProvider = _ref => {
  let {
    children
  } = _ref;
  const [toastInfo, setToastInfo] = (0, _react.useState)({});
  const [visibleToasts, setVisibleToasts] = (0, _react.useState)({});
  const toastIndex = _react.default.useRef(1);
  const hideAll = _react.default.useCallback(() => {
    setVisibleToasts({});
  }, [setVisibleToasts]);
  const hideToast = _react.default.useCallback(id => {
    setVisibleToasts(prevVisibleToasts => ({
      ...prevVisibleToasts,
      [id]: false
    }));
  }, [setVisibleToasts]);
  const isActive = _react.default.useCallback(id => {
    for (const toastPosition of Object.keys(toastInfo)) {
      const positionArray = toastInfo[toastPosition];
      return positionArray.findIndex(toastData => toastData.id === id) > -1;
    }
    return false;
  }, [toastInfo]);
  const removeToast = _react.default.useCallback(id => {
    setToastInfo(prev => {
      for (const toastPosition of Object.keys(prev)) {
        const positionArray = prev[toastPosition];
        const isToastPresent = positionArray.findIndex(toastData => toastData.id === id) > -1;
        if (isToastPresent) {
          const newPositionArray = positionArray.filter(item => item.id !== id);
          const temp = {};
          temp[toastPosition] = newPositionArray;
          const newToastInfo = {
            ...prev,
            ...temp
          };
          return newToastInfo;
        }
      }
      return prev;
    });
  }, [setToastInfo]);
  const setToast = _react.default.useCallback(props => {
    const {
      placement = 'bottom',
      render,
      id = toastIndex.current++,
      duration = 5000,
      accessibilityAnnouncement
    } = props;
    let positionToastArray = toastInfo[placement];
    if (!positionToastArray) positionToastArray = [];
    let component = null;
    if (render) {
      component = render({
        id
      });
      toastInfo[placement] = [...positionToastArray, {
        component,
        id,
        config: props
      }];
      setToastInfo({
        ...toastInfo
      });
      setVisibleToasts({
        ...visibleToasts,
        [id]: true
      });
      if (duration !== null) {
        setTimeout(function () {
          hideToast(id);
        }, duration);
      }
      // iOS doesn't support accessibilityLiveRegion
      if (accessibilityAnnouncement && _reactNative.Platform.OS === 'ios') {
        _reactNative.AccessibilityInfo.announceForAccessibility(accessibilityAnnouncement);
      }
    }
    return id;
  }, [toastInfo, visibleToasts, hideToast]);
  const contextValue = _react.default.useMemo(() => {
    return {
      toastInfo,
      setToastInfo,
      setToast,
      removeToast,
      hideAll,
      isActive,
      visibleToasts,
      setVisibleToasts,
      hideToast
    };
  }, [toastInfo, setToastInfo, setToast, removeToast, hideAll, isActive, visibleToasts, setVisibleToasts, hideToast]);
  return /*#__PURE__*/_react.default.createElement(ToastContext.Provider, {
    value: contextValue
  }, children, /*#__PURE__*/_react.default.createElement(_ToastList.ToastList, null));
};
exports.ToastProvider = ToastProvider;
const useToast = () => {
  const {
    setToast,
    hideAll,
    isActive,
    hideToast
  } = _react.default.useContext(ToastContext);
  const toast = (0, _react.useMemo)(() => ({
    show: setToast,
    close: hideToast,
    closeAll: hideAll,
    isActive
  }), [setToast, hideAll, isActive, hideToast]);
  return toast;
};
exports.useToast = useToast;
//# sourceMappingURL=Toast.js.map