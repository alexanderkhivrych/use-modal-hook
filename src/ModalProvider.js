import React, { useState, useMemo, useCallback } from 'react';
import ModalContext from './ModalContext';

const ModaProvider = ({ children }) => {
  const [modalsConfig, setConfig] = useState({});

  const hideModal = useCallback(modal => {
    setConfig({ [modal]: { ...modalsConfig[modal], isOpen: false } });
  }, []);

  const showModal = useCallback((modal, component, modalData) => {
    setConfig({ [modal]: { isOpen: true, component, data: modalData } });
  }, []);
  const contextValue = useMemo(() => ({ showModal, hideModal }), []);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {Object.keys(modalsConfig).map((modal) => (
        modalsConfig[modal].isOpen && React.createElement(modalsConfig[modal].component, {
          ...modalsConfig[modal].data,
          key: modal,
          isOpen: modalsConfig[modal].isOpen,
          onClose: () => hideModal(modal),
        })
      ))}
    </ModalContext.Provider>
  );
};

export default ModaProvider;
