import React from 'react';

const ModalContext = React.createContext({
  showModal: null,
  hideModal: null,
  isOpenedModal: false,
});

export default ModalContext;
