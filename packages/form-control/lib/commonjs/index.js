"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFormControl = void 0;
Object.defineProperty(exports, "useFormControl", {
  enumerable: true,
  get: function () {
    return _useFormControl.useFormControl;
  }
});
Object.defineProperty(exports, "useFormControlContext", {
  enumerable: true,
  get: function () {
    return _useFormControl.useFormControlContext;
  }
});
var _FormControl = _interopRequireDefault(require("./FormControl"));
var _FormControlError = _interopRequireDefault(require("./FormControlError"));
var _FormControlErrorText = _interopRequireDefault(require("./FormControlErrorText"));
var _FormControlErrorIcon = _interopRequireDefault(require("./FormControlErrorIcon"));
var _FormControlHelper = _interopRequireDefault(require("./FormControlHelper"));
var _FormControlLabel = _interopRequireDefault(require("./FormControlLabel"));
var _FormControlLabelText = _interopRequireDefault(require("./FormControlLabelText"));
var _useFormControl = require("./useFormControl");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createFormControl = _ref => {
  let {
    Root,
    Error,
    ErrorText,
    ErrorIcon,
    Label,
    LabelText,
    LabelAstrick,
    Helper,
    HelperText
  } = _ref;
  const FormControl = (0, _FormControl.default)(Root);
  FormControl.Error = (0, _FormControlError.default)(Error);
  FormControl.Error.Text = (0, _FormControlErrorText.default)(ErrorText);
  FormControl.Error.Icon = (0, _FormControlErrorIcon.default)(ErrorIcon);
  FormControl.Label = (0, _FormControlLabel.default)({
    Label,
    LabelAstrick
  });
  FormControl.Label.Text = (0, _FormControlLabelText.default)(LabelText);
  FormControl.Helper = (0, _FormControlHelper.default)(Helper);
  FormControl.Helper.Text = (0, _FormControlHelper.default)(HelperText);
  FormControl.Error.displayName = 'FormControl.Error';
  FormControl.Error.Text.displayName = 'FormControl.Error.Text';
  FormControl.Error.Icon.displayName = 'FormControl.Error.Icon';
  FormControl.Label.displayName = 'FormControl.Label';
  FormControl.Label.Text.displayName = 'FormControl.Label.Text';
  FormControl.Helper.displayName = 'FormControl.Helper';
  FormControl.Helper.Text.displayName = 'FormControl.Helper.Text';
  return FormControl;
};
exports.createFormControl = createFormControl;
//# sourceMappingURL=index.js.map