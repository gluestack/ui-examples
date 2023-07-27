import { InputIcon } from "./InputIcon";
import { InputGroup } from "./InputGroup";
import { Input as InputMain } from "./Input";
import type { IInputComponentType } from "./types";

export const createInput = <Root, Icon, Input>({
  Root,
  Icon,
  Input,
}: {
  Root: React.ComponentType<Root>;
  Icon: React.ComponentType<Icon>;
  Input: React.ComponentType<Input>;
}) => {
  const InputField = Root as any;
  InputField.Icon = Icon;
  InputField.Input = Input;

  InputField.displayName = "InputField";
  InputField.Icon.displayName = "InputField.Icon";
  InputField.Input.displayName = "InputField.Input";

  return InputField as IInputComponentType<Root, Icon, Input>;
};
