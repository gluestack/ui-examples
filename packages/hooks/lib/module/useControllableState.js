import React from 'react';
export function useControllableProp(prop, state) {
  const {
    current: isControlled
  } = React.useRef(prop !== undefined);
  const value = isControlled && typeof prop !== 'undefined' ? prop : state;
  return [isControlled, value];
}
/**
 * React hook for using controlling component state.
 * @param props
 */
export function useControllableState(props) {
  const {
    value: valueProp,
    defaultValue,
    onChange
  } = props;
  const [valueState, setValue] = React.useState(defaultValue);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : valueState;
  const updateValue = React.useCallback(next => {
    const nextValue = typeof next === 'function' ? next(value) : next;
    if (!isControlled) {
      setValue(nextValue);
    }
    onChange && onChange(nextValue);
  }, [isControlled, onChange, value]);
  return [value, updateValue];
}
//# sourceMappingURL=useControllableState.js.map