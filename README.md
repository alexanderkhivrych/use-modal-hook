<div align="center">
  <h1>
    <br/>
      use-modal-hook ❤️
    <br />
  </h1>
    <sup>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/use-modal-hook">
      <img src="https://img.shields.io/npm/v/use-modal-hook.svg" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/use-modal-hook">
      <img src="https://img.shields.io/npm/dt/use-modal-hook.svg" alt="npm downloads" />
    </a>
    <a href="https://www.npmjs.com/package/use-modal-hook">
      <img src="https://img.shields.io/npm/dm/use-modal-hook.svg" alt="npm downloads" />
    </a>
  </sup>
</div>

> React hook for controlling modal components

## Install

```bash
#With npm
npm install use-modal-hook --save 
```

```bash
#With yarn
yarn add use-modal-hook
```

## Usage
[![Edit react use modal hook example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/2zz9w1pwrr?fontsize=14)
```jsx
import React, { memo } from "react";
import { useModal, ModalProvider } from "use-modal-hook";
import Modal from "react-modal"; // It can be any modal

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
Param | Type  | Description
--- | --- | ---
ModalComponent | `Function` | It can be any [`react`](https://reactjs.org/docs/react-api.html) component that you want to use for show modal
modalProps | `Object` | Props that you want to pass to your modal component
showModal | `Function` | It is function for show your modal, you can pass any dynamic props to this function
hideModal | `Function` | It is function for hide your modal, you can pass any dynamic props to this function
onClose | `Function` | It callback will be triggered after modal window closes

#### `showModal(dynamicModalProps: Object)`
Param | Type  | Description
--- | --- | ---
dynamicModalProps | `Object` | Dynamic props that you want to pass to your modal component

## License

MIT © [alexanderkhivrych](https://github.com/alexanderkhivrych)
