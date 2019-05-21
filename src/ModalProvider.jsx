import React, { useState, useMemo, useCallback } from 'react';
import ModalContext from './ModalContext';

const ModalProvider = ({ children }) => {
  const [modalsConfig, setConfig] = useState({});
  const hideModal = useCallback((modalKey, onClose) => {
    setConfig({ [modalKey]: { ...modalsConfig[modalKey], isOpen: false } });
    
    if (onClose) {
      onClose();
    }
  }, []);
  const showModal = useCallback((modalKey, component, modalData) => {
    setConfig({ [modalKey]: { isOpen: true, component, data: modalData } });
  }, []);
  const contextValue = useMemo(() => ({ showModal, hideModal }), []);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {Object.keys(modalsConfig).map((modalKey) => (
        modalsConfig[modalKey].isOpen && React.createElement(modalsConfig[modalKey].component, {
          onClose: () => hideModal(modalKey),
          ...modalsConfig[modalKey].data,
          key: modalKey,
          isOpen: modalsConfig[modalKey].isOpen,
        })
      ))}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
