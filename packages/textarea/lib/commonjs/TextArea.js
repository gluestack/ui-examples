"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TextAreaContext = require("./TextAreaContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const TextArea = StyledTextArea => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    multiline = true,
    onKeyPress,
    ...props
  } = _ref;
  const {
    isDisabled,
    isReadOnly,
    isFocused,
    isInvalid,
    isRequired,
    isHovered,
    handleFocus
  } = (0, _TextAreaContext.useTextArea)('TextAreaContext');
  return /*#__PURE__*/_react.default.createElement(StyledTextArea, _extends({
    ref: ref
  }, props, {
    states: {
      focus: isFocused,
      disabled: isDisabled,
      invalid: isInvalid,
      readonly: isReadOnly,
      required: isRequired,
      hover: isHovered
    },
    editable: isDisabled || isReadOnly ? false : true,
    multiline: multiline,
    onKeyPress: e => {
      e.persist();
      onKeyPress && onKeyPress(e);
    },
    onFocus: e => {
      handleFocus(true, props !== null && props !== void 0 && props.onFocus ? () => props === null || props === void 0 ? void 0 : props.onFocus(e) : () => {});
    },
    onBlur: e => {
      handleFocus(false, props !== null && props !== void 0 && props.onBlur ? () => props === null || props === void 0 ? void 0 : props.onBlur(e) : () => {});
    }
  }), children);
});
exports.TextArea = TextArea;
//# sourceMappingURL=TextArea.js.map