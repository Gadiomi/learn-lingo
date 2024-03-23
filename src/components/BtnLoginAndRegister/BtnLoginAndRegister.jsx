import {
  AuthNavConteiner,
  LinkLogin,
  LoginLogo,
  LinkRegister,
} from './BtnLoginAndRegister.styled';
import { useState } from 'react';
import Modal from '../Modal/Modal';

import Register from '../AuthComponents/RegisterForm/RegisterForm';
import Login from '../AuthComponents/LoginForm/LoginForm';

import sprite from '../../assets/sprite.svg';
function BtnLoginAndRegister({ color, regis, log, ShowModal, setNavstate }) {
  const [onClose, setOnClose] = useState(false);
  const [onCloseLogin, setOnCloseLogin] = useState(false);
  const hendleClickLogin = () => {
    if (ShowModal) {
      ShowModal(false);
      log(true);
    }
    if (setNavstate) {
      setNavstate('closed');
      setOnCloseLogin(!onCloseLogin);
    }
    setOnCloseLogin(!onCloseLogin);
  };
  const hendleClickRegister = () => {
    if (ShowModal) {
      ShowModal(false);
      regis(true);
    }
    if (setNavstate) {
      setNavstate('closed');
      setOnClose(!onClose);
    }
    setOnClose(!onClose);
  };

  return (
    <>
      <AuthNavConteiner>
        <LinkLogin onClick={hendleClickLogin} color={color}>
          <LoginLogo color={color}>
            <use href={sprite + '#icon-log-in-01'}></use>
          </LoginLogo>
          Log in
        </LinkLogin>
        <LinkRegister onClick={hendleClickRegister} color={color}>
          Registration
        </LinkRegister>
      </AuthNavConteiner>
      {onClose && (
        <Modal state={onClose} onClose={setOnClose}>
          <Register color={color} onClose={setOnClose} />
        </Modal>
      )}
      {onCloseLogin && (
        <Modal state={onCloseLogin} onClose={setOnCloseLogin}>
          <Login color={color} onClose={setOnCloseLogin} />
        </Modal>
      )}
    </>
  );
}

export default BtnLoginAndRegister;
