import { useState } from 'react';
import styled from 'styled-components';

import HamButton from './HamButton';

const NavContent = styled.div`
  flex-basis: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavList = styled.ul`
  position: fixed;
  left: 0px;
  width: 100%;
  top: 0px;
  z-index: 1;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.85, 0.58, 0.59, 1.1) 0s;
  display: flex;
  gap: 32px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform: ${(props) =>
    props.display === 'default'
      ? 'translateY(-900px);'
      : props.display === 'closed'
      ? 'translateY(-900px);'
      : props.display === 'opened'
      ? 'translateY(0);'
      : null};
  background-color: white;
`;

import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsAuth } from '../../redux/Auth/selectors';
import { useSelector } from 'react-redux';
const NavBar = ({ color }) => {
  const [navstate, setNavstate] = useState('default');
  const isLoggedIn = useSelector(selectIsAuth);

  const handleNavstate = () => {
    if (navstate === 'default') {
      setNavstate('opened');
    } else if (navstate === 'opened') {
      setNavstate('closed');
    } else {
      setNavstate('opened');
    }
  };

  return (
    <NavContent>
      <HamButton
        navstate={navstate}
        handleNavstate={handleNavstate}
        color={color}
      />
      <NavList display={navstate}>
        {isLoggedIn ? (
          <UserMenu color={color} setNavstate={setNavstate} />
        ) : (
          <AuthNav color={color} setNavstate={setNavstate} />
        )}
      </NavList>
    </NavContent>
  );
};

export default NavBar;
