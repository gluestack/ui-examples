"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCheckbox = void 0;
var _Checkbox = require("./Checkbox");
var _CheckboxIcon = _interopRequireDefault(require("./CheckboxIcon"));
var _CheckboxIndicator = _interopRequireDefault(require("./CheckboxIndicator"));
var _CheckboxLabel = _interopRequireDefault(require("./CheckboxLabel"));
var _CheckboxGroup = require("./CheckboxGroup");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createCheckbox = _ref => {
  let {
    Root,
    Indicator,
    Icon,
    Label,
    Group
  } = _ref;
  const Checkbox = (0, _Checkbox.Checkbox)(Root);
  Checkbox.Indicator = (0, _CheckboxIndicator.default)(Indicator);
  Checkbox.Icon = (0, _CheckboxIcon.default)(Icon);
  Checkbox.Label = (0, _CheckboxLabel.default)(Label);
  Checkbox.Group = (0, _CheckboxGroup.CheckboxGroup)(Group);
  Checkbox.displayName = 'Checkbox';
  Checkbox.Indicator.displayName = 'Checkbox.Indicator';
  Checkbox.Icon.displayName = 'Checkbox.Icon';
  Checkbox.Label.displayName = 'Checkbox.Label';
  Checkbox.Group.displayName = 'Checkbox.Group';
  return Checkbox;
};
exports.createCheckbox = createCheckbox;
//# sourceMappingURL=index.js.map