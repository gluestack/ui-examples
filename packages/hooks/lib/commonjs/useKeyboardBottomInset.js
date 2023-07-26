"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeyboardBottomInset = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useKeyboardBottomInset = () => {
  const [bottom, setBottom] = React.useState(0);
  const subscriptions = React.useRef([]);
  React.useEffect(() => {
    function onKeyboardChange(e) {
      if (e.startCoordinates && e.endCoordinates.screenY <= e.startCoordinates.screenY) setBottom(e.endCoordinates.height / 2);else setBottom(0);
    }
    if (_reactNative.Platform.OS === 'ios') {
      subscriptions.current = [_reactNative.Keyboard.addListener('keyboardWillChangeFrame', onKeyboardChange)];
    } else {
      subscriptions.current = [_reactNative.Keyboard.addListener('keyboardDidHide', onKeyboardChange), _reactNative.Keyboard.addListener('keyboardDidShow', onKeyboardChange)];
    }
    return () => {
      subscriptions.current.forEach(subscription => {
        subscription.remove();
      });
    };
  }, [setBottom, subscriptions]);
  return bottom;
};
exports.useKeyboardBottomInset = useKeyboardBottomInset;
//# sourceMappingURL=useKeyboardBottomInset.js.map