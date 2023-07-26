import { Button as ButtonMain } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ButtonText } from './ButtonText';
import { ButtonSpinner } from './ButtonSpinner';
export function createButton(_ref) {
  let {
    Root,
    Text,
    Group,
    GroupHSpacer,
    GroupVSpacer,
    Spinner
  } = _ref;
  const Button = ButtonMain(Root);
  Button.Text = ButtonText(Text);
  Button.Group = ButtonGroup(Group, GroupHSpacer, GroupVSpacer);
  Button.Spinner = ButtonSpinner(Spinner);
  Button.displayName = 'Button';
  Button.Text.displayName = 'Button.Text';
  Button.Group.displayName = 'Button.Group';
  Button.Spinner.displayName = 'Button.Spinner';
  return Button;
}
//# sourceMappingURL=index.js.map