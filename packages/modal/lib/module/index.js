import { default as ModalMain } from './Modal';
import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalBackdrop from './ModalBackdrop';
export { ModalContext } from './Context';
export const createModal = _ref => {
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
  const Modal = ModalMain(Root);
  Modal.Content = ModalContent(Content, AnimatePresence);
  Modal.CloseButton = ModalCloseButton(CloseButton);
  Modal.Header = ModalHeader(Header);
  Modal.Footer = ModalFooter(Footer);
  Modal.Body = ModalBody(Body);
  Modal.Backdrop = ModalBackdrop(Backdrop, AnimatePresence);
  Modal.displayName = 'Modal';
  Modal.Content.displayName = 'Modal.Content';
  Modal.CloseButton.displayName = 'Modal.CloseButton';
  Modal.Header.displayName = 'Modal.Header';
  Modal.Footer.displayName = 'Modal.Footer';
  Modal.Body.displayName = 'Modal.Body';
  Modal.Backdrop.displayName = 'Modal.Backdrop';
  return Modal;
};
//# sourceMappingURL=index.js.map