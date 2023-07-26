import React from 'react';
export const ModalContext = /*#__PURE__*/React.createContext({
  handleClose: () => {},
  initialFocusRef: {
    current: null
  },
  finalFocusRef: {
    current: null
  },
  visible: false,
  closeOnOverlayClick: false,
  avoidKeyboard: false,
  bottomInset: 0
});
//# sourceMappingURL=Context.js.map