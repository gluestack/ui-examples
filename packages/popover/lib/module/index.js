import { Popover as PopoverMain } from './Popover';
import PopoverArrow from './PopoverArrow';
import PopoverBody from './PopoverBody';
import PopoverCloseButton from './PopoverCloseButton';
import PopoverContent from './PopoverContent';
import PopoverFooter from './PopoverFooter';
import PopoverHeader from './PopoverHeader';
import PopoverBackdrop from './PopoverBackdrop';
export function createPopover(_ref) {
  let {
    Root,
    Arrow,
    Content,
    Header,
    Footer,
    Body,
    Backdrop,
    CloseButton,
    AnimatePresence
  } = _ref;
  const Popover = PopoverMain(Root);
  Popover.Content = PopoverContent(Content, AnimatePresence);
  Popover.CloseButton = PopoverCloseButton(CloseButton);
  Popover.Header = PopoverHeader(Header);
  Popover.Footer = PopoverFooter(Footer);
  Popover.Body = PopoverBody(Body);
  Popover.Arrow = PopoverArrow(Arrow);
  Popover.Backdrop = PopoverBackdrop(Backdrop, AnimatePresence);
  Popover.displayName = 'Popover';
  Popover.Content.displayName = 'Popover.Content';
  Popover.CloseButton.displayName = 'Popover.CloseButton';
  Popover.Header.displayName = 'Popover.Header';
  Popover.Footer.displayName = 'Popover.Footer';
  Popover.Body.displayName = 'Popover.Body';
  Popover.Arrow.displayName = 'Popover.Arrow';
  Popover.Backdrop.displayName = 'Popover.Backdrop';
  return Popover;
}
//# sourceMappingURL=index.js.map