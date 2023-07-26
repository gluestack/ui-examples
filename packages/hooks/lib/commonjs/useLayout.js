"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLayout = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useLayout = () => {
  const [layout, setLayout] = _react.default.useState({
    width: 0,
    height: 0
  });
  return {
    onLayout: e => {
      setLayout(e.nativeEvent.layout);
    },
    layout
  };
};
exports.useLayout = useLayout;
//# sourceMappingURL=useLayout.js.map