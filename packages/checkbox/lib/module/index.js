import { Checkbox as CheckboxMain } from './Checkbox';
import CheckboxIcon from './CheckboxIcon';
import CheckboxIndicator from './CheckboxIndicator';
import CheckboxLabel from './CheckboxLabel';
import { CheckboxGroup } from './CheckboxGroup';
export const createCheckbox = _ref => {
  let {
    Root,
    Indicator,
    Icon,
    Label,
    Group
  } = _ref;
  const Checkbox = CheckboxMain(Root);
  Checkbox.Indicator = CheckboxIndicator(Indicator);
  Checkbox.Icon = CheckboxIcon(Icon);
  Checkbox.Label = CheckboxLabel(Label);
  Checkbox.Group = CheckboxGroup(Group);
  Checkbox.displayName = 'Checkbox';
  Checkbox.Indicator.displayName = 'Checkbox.Indicator';
  Checkbox.Icon.displayName = 'Checkbox.Icon';
  Checkbox.Label.displayName = 'Checkbox.Label';
  Checkbox.Group.displayName = 'Checkbox.Group';
  return Checkbox;
};
//# sourceMappingURL=index.js.map