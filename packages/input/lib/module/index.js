import { InputIcon } from './InputIcon';
import { InputGroup } from './InputGroup';
import { Input as InputMain } from './Input';
export const createInput = _ref => {
  let {
    Root,
    Icon,
    Input
  } = _ref;
  const InputField = InputGroup(Root);
  InputField.Icon = InputIcon(Icon);
  InputField.Input = InputMain(Input);
  InputField.displayName = 'InputField';
  InputField.Icon.displayName = 'InputField.Icon';
  InputField.Input.displayName = 'InputField.Input';
  return InputField;
};
//# sourceMappingURL=index.js.map