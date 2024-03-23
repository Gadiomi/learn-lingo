import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled';
import { useEffect, useLayoutEffect } from 'react';

function Modal({ state = false, children, onClose, top }) {
  useEffect(() => {
    return window.addEventListener('keydown', keyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const keyDown = (e) => {
    if (e.code === 'Escape') {
      element.classList.remove('modal-open');
      onClose(false);
    }
  };
  let element = document.querySelector('body');
  if (state) {
    element.classList.add('modal-open');
  }
  const onOverlayClose = (e) => {
    if (e.currentTarget === e.target) {
      element.classList.remove('modal-open');
      onClose(false);
    }
  };
  return createPortal(
    <Backdrop onClick={onOverlayClose} top={top}>
      {children}
    </Backdrop>,
    document.getElementById('modal-root')
  );
}

export default Modal;
