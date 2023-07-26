"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useLink = require("./useLink");
var _interactions = require("@react-native-aria/interactions");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Link = StyledLink => /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
  let {
    children,
    href,
    onPress,
    isExternal,
    ...props
  } = _ref2;
  const _ref = _react.default.useRef(null);
  const {
    isHovered
  } = (0, _interactions.useHover)({}, _ref);
  const {
    linkProps
  } = (0, _useLink.useLink)({
    href,
    onPress,
    isExternal,
    _ref
  });
  return /*#__PURE__*/_react.default.createElement(StyledLink, _extends({
    states: {
      hover: isHovered
    }
  }, linkProps, props, {
    ref: (0, _utils.mergeRefs)([ref, _ref])
  }), children);
});
exports.Link = Link;
//# sourceMappingURL=Link.js.map