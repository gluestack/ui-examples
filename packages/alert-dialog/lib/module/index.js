import { AlertDialog as AlertMain } from './AlertDialog';
import AlertDialogContent from './AlertDialogContent';
import AlertDialogBody from './AlertDialogBody';
import AlertDialogCloseButton from './AlertDialogCloseButton';
import AlertDialogFooter from './AlertDialogFooter';
import AlertDialogHeader from './AlertDialogHeader';
import AlertDialogBackdrop from './AlertDialogBackdrop';
export function createAlertDialog(_ref) {
  let {
    Root,
    Content,
    CloseButton,
    Header,
    Footer,
    Body,
    Backdrop,
    AnimatePresence
  } = _ref;
  const AlertDialog = AlertMain(Root);
  AlertDialog.Content = AlertDialogContent(Content, AnimatePresence);
  AlertDialog.CloseButton = AlertDialogCloseButton(CloseButton);
  AlertDialog.Header = AlertDialogHeader(Header);
  AlertDialog.Footer = AlertDialogFooter(Footer);
  AlertDialog.Body = AlertDialogBody(Body);
  AlertDialog.Backdrop = AlertDialogBackdrop(Backdrop, AnimatePresence);
  AlertDialog.displayName = 'AlertDialog';
  AlertDialog.Content.displayName = 'AlertDialog.Content';
  AlertDialog.CloseButton.displayName = 'AlertDialog.CloseButton';
  AlertDialog.Header.displayName = 'AlertDialog.Header';
  AlertDialog.Footer.displayName = 'AlertDialog.Footer';
  AlertDialog.Body.displayName = 'AlertDialog.Body';
  AlertDialog.Backdrop.displayName = 'AlertDialog.Backdrop';
  return AlertDialog;
}
//# sourceMappingURL=index.js.map