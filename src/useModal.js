import { useContext, useMemo, useCallback } from 'react';
import ModalContext from './ModalContext';

const generateModalKey = (() => {
  let count = 0;

  return () => `${++count}`;
})();

function useModal(component, data) {
  const key = useMemo(generateModalKey, []);
  const context = useContext(ModalContext);
  const showModal = useCallback((modalData) => context.showModal(key, component, modalData || data), []);
  const hideModal = useCallback(() => context.hideModal(key), []);

  return [showModal, hideModal];
}

export default useModal;
