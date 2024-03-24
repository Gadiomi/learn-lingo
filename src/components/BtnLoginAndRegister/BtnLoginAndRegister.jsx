import {
  NavigationConteiner,
  LinkLogin,
  Logo,
  BtnRegister,
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
      <NavigationConteiner>
        <LinkLogin onClick={hendleClickLogin} color={color}>
          <Logo color={color}>
            <use href={sprite + '#icon-log-in-01'}></use>
          </Logo>
          Log in
        </LinkLogin>
        <BtnRegister onClick={hendleClickRegister} color={color}>
          Registration
        </BtnRegister>
      </NavigationConteiner>
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
