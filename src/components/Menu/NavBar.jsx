import { useState } from 'react';
import { NavigationList, NavigationContent } from '../Menu/NavBar.styled';

import HamButton from './HamButton';

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
    <NavigationContent>
      <HamButton
        navstate={navstate}
        handleNavstate={handleNavstate}
        color={color}
      />
      <NavigationList display={navstate}>
        {isLoggedIn ? (
          <UserMenu color={color} setNavstate={setNavstate} />
        ) : (
          <AuthNav color={color} setNavstate={setNavstate} />
        )}
      </NavigationList>
    </NavigationContent>
  );
};

export default NavBar;
