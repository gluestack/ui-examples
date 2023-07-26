"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useControllableProp = useControllableProp;
exports.useControllableState = useControllableState;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function useControllableProp(prop, state) {
  const {
    current: isControlled
  } = _react.default.useRef(prop !== undefined);
  const value = isControlled && typeof prop !== 'undefined' ? prop : state;
  return [isControlled, value];
}
/**
 * React hook for using controlling component state.
 * @param props
 */
function useControllableState(props) {
  const {
    value: valueProp,
    defaultValue,
    onChange
  } = props;
  const [valueState, setValue] = _react.default.useState(defaultValue);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : valueState;
  const updateValue = _react.default.useCallback(next => {
    const nextValue = typeof next === 'function' ? next(value) : next;
    if (!isControlled) {
      setValue(nextValue);
    }
    onChange && onChange(nextValue);
  }, [isControlled, onChange, value]);
  return [value, updateValue];
}
//# sourceMappingURL=useControllableState.js.map