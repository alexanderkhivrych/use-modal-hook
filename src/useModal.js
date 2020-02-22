import { useContext, useMemo, useCallback } from 'react';
import ModalContext from './ModalContext';
import ModalProvider from './ModalProvider';

const generateModalKey = (() => {
  let count = 0;

  return () => `${++count}`;
})();

function useModal(component, data, onClose) {
  const key = useMemo(generateModalKey, []);
  const context = useContext(ModalContext);
  const showModal = useCallback(
    modalData => context.showModal(key, component, modalData instanceof Event ? data : { ...data, ...modalData }),
    [data, context.showModal]
  );
  const hideModal = useCallback(() => context.hideModal(key, onClose), [context.hideModal, onClose, key]);

  return [showModal, hideModal];
}

useModal.ModalContext = ModalContext;
useModal.ModalProvider = ModalProvider;

export default useModal;
