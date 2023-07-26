import { Alert as AlertMain } from './Alert';
import { AlertText } from './AlertText';
import { AlertIcon } from './AlertIcon';
export function createAlert(_ref) {
  let {
    Root,
    Text,
    Icon
  } = _ref;
  const Alert = AlertMain(Root);
  Alert.Text = AlertText(Text);
  Alert.Icon = AlertIcon(Icon);
  Alert.displayName = 'Alert';
  Alert.Text.displayName = 'Alert.Text';
  Alert.Icon.displayName = 'Alert.Icon';
  return Alert;
}
//# sourceMappingURL=index.js.map