import React, { useState, useMemo, useCallback } from 'react';
import ModalContext from './ModalContext';

const ModalProvider = ({ children }) => {
  const [modalsConfig, setConfig] = useState({});
  const hideModal = useCallback(
    (modalKey, onClose) => {
      setConfig(prevConfig => ({ ...prevConfig, [modalKey]: { ...prevConfig[modalKey], isOpen: false } }));

      if (onClose) {
        onClose();
      }
    },
    [setConfig]
  );
  const showModal = useCallback(
    (modalKey, component, modalData) => {
      setConfig(prevConfig => ({ ...prevConfig, [modalKey]: { isOpen: true, component, data: modalData } }));
    },
    [setConfig]
  );
  const contextValue = useMemo(
    () => ({
      showModal,
      hideModal,
      isOpenedModal: Object.values(modalsConfig).some(({ isOpen }) => isOpen),
    }),
    [hideModal, showModal, modalsConfig]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {Object.keys(modalsConfig).map(modalKey => {
        const { component: Component, isOpen, data } = modalsConfig[modalKey];

        return isOpen && <Component onClose={() => hideModal(modalKey)} key={modalKey} isOpen={isOpen} {...data} />;
      })}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
