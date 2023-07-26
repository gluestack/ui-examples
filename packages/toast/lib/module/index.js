import { useToast } from './Toast';
import { ToastComponent } from './ToastComponent';
import { ToastTitle } from './ToastTitle';
import { ToastDescription } from './ToastDescription';
export const createToastHook = () => {
  return useToast;
};
export function createToast(_ref) {
  let {
    Root,
    Title,
    Description
  } = _ref;
  const Toast = ToastComponent(Root);
  Toast.Title = ToastTitle(Title);
  Toast.Description = ToastDescription(Description);
  Toast.displayName = 'Toast';
  Toast.Title.displayName = 'Toast.Title';
  Toast.Description.displayName = 'Toast.Description';
  return Toast;
}
export { ToastProvider } from './Toast';
//# sourceMappingURL=index.js.map