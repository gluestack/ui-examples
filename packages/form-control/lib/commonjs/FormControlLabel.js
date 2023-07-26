"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("@gluestack-ui/utils");
var _useFormControl = require("./useFormControl");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FormControlLabel = _ref2 => {
  let {
    Label: StyledFormControlLabel,
    LabelAstrick: StyledFormControlLabelAstrick
  } = _ref2;
  return /*#__PURE__*/(0, _react.forwardRef)((_ref3, ref) => {
    let {
      children,
      ...props
    } = _ref3;
    const formControlContext = (0, _useFormControl.useFormControlContext)();
    const {
      isRequired,
      ...combinedProps
    } = (0, _utils.combineContextAndProps)(formControlContext, props);
    const _ref = _react.default.useRef(null);
    const mergedRef = (0, _utils.mergeRefs)([_ref, ref]);
    _react.default.useEffect(() => {
      if (_ref.current) {
        // RN web doesn't support htmlFor for Label element yet
        if (props.htmlFor) {
          _ref.current.htmlFor = props.htmlFor;
        } else if (combinedProps !== null && combinedProps !== void 0 && combinedProps.nativeID) {
          _ref.current.htmlFor = combinedProps.nativeID;
        }
      }
    }, [combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.nativeID, props.htmlFor]);
    return /*#__PURE__*/_react.default.createElement(StyledFormControlLabel, _extends({
      ref: mergedRef
    }, combinedProps, {
      nativeID: combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.labelId
    }), children, isRequired && /*#__PURE__*/_react.default.createElement(StyledFormControlLabelAstrick, null, "*"));
  });
};
var _default = FormControlLabel;
exports.default = _default;
//# sourceMappingURL=FormControlLabel.js.map