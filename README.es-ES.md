

<div align="center">
  <h1>
    <br/>
      use-modal-hook ❤️
    <br />
  </h1>
    <sup>
    <br />
    <br />
    <a href="https://github.com/alexanderkhivrych/use-modal-hook/pulls" target="_blank">
      <img src="https://img.shields.io/badge/PRs-welcome-green.svg" alt="PRs welcome" />
    </a>
    <a href="https://www.npmjs.com/package/use-modal-hook" target="_blank">
      <img src="https://img.shields.io/npm/v/use-modal-hook.svg" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/use-modal-hook" target="_blank">
      <img src="https://img.shields.io/npm/dm/use-modal-hook.svg" alt="npm downloads" />
    </a>
    <a href="https://github.com/alexanderkhivrych/use-modal-hook" target="_blank">
      <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square" alt="Maintenance" />
    </a>
  </sup>
</div>

> Hook de React para controlar componentes modales

## Instalación

```bash
#Con npm
npm install use-modal-hook --save 
```

```bash
#Con yarn
yarn add use-modal-hook
```

## Uso
[![Edit react use modal hook example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/2zz9w1pwrr?fontsize=14)
```jsx
import React, { memo } from "react";
import { useModal, ModalProvider } from "use-modal-hook";
import Modal from "react-modal"; // Puede ser cualquier modal

const MyModal = memo(
  ({ isOpen, onClose, title, description, closeBtnLabel }) => (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>{title}</h2>
      <div>{description}</div>
      <button onClick={onClose}>{closeBtnLabel}</button>
    </Modal>
  )
);

const SomePage = memo(() => {
  const [showModal, hideModal] = useModal(MyModal, {
    title: "My Test Modal",
    description: "I Like React Hooks",
    closeBtnLabel: "Close"
  });

  return (
    <>
      <h1>Test Page</h1>
      <button onClick={showModal}>Show Modal</button>
    </>
  );
});

const App = () => (
  <ModalProvider>
    <SomePage />
  </ModalProvider>
);

```

#### `useModal(<ModalComponent: Function|>, <modalProps: Object>, <onClose: Function>): [showModal: Function, hideModal: Function]`
Parámetro | Tipo  | Descripción
--- | --- | ---
ModalComponent | `Function` | Puede ser cualquier componente de [`react`](https://reactjs.org/docs/react-api.html) que quieras usar para mostrar el modal
modalProps | `Object` | Props que deseas pasar a tu componente modal
showModal | `Function` | Función para mostrar tu modal; puedes pasarle cualquier prop dinámica
hideModal | `Function` | Función para ocultar tu modal; puedes pasarle cualquier prop dinámica
onClose | `Function` | Este callback se ejecutará después de que se cierre la ventana modal

#### `showModal(dynamicModalProps: Object)`
Parámetro | Tipo  | Descripción
--- | --- | ---
dynamicModalProps | `Object` | Props dinámicas que deseas pasar a tu componente modal

## Licencia

MIT © [alexanderkhivrych](https://github.com/alexanderkhivrych)
