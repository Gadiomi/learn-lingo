import { Navigation, StyledLink, LogOutBtn } from './UserMenu.stuled';
import { LoginLogo } from '../BtnLoginAndRegister/BtnLoginAndRegister.styled';
import { logOut } from '../../redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';
import { useLocation  } from "react-router-dom";

import sprite from '../../assets/sprite.svg';

function AuthNav({ color, setNavstate }) {
  const dispatch = useDispatch();
    const location = useLocation();
  const hendeleLogout = () => {
    if (setNavstate) {
      dispatch(logOut());
      setNavstate('closed');
    }
    dispatch(logOut());
  };
  return (
    <>
      {setNavstate ? (
        <Navigation>
          <StyledLink
      activ={location.pathname === "/Home"  ? 'active' : ''} 
            color={color}
            to="/Home"
            onClick={() => setNavstate('closed')}
          >
            Home
          </StyledLink>
          <StyledLink
            activ={location.pathname === "/Teachers"  ? 'active' : ''}
            color={color}
            to="/Teachers"
            onClick={() => setNavstate('closed')}
          >
            Teachers
          </StyledLink>
          <StyledLink
                 activ={location.pathname === "/Favorites" ? 'active' : ''}
            color={color}
            to="/Favorites"
            onClick={() => setNavstate('closed')}
          >
            Favorites
          </StyledLink>
        </Navigation>
      ) : (
        <Navigation>
            <StyledLink
                        activ={location.pathname === "/Home"  ? 'active' : ''}    color={color} to="/Home">
            Home
          </StyledLink>
            <StyledLink activ={location.pathname === "/Teachers" ? 'active' : ''}
              color={color} to="/Teachers">
            Teachers
          </StyledLink>
            <StyledLink
              activ={location.pathname === "/Favorites" ? 'active' : ''} color={color} to="/Favorites">
            Favorites
          </StyledLink>{' '}
        </Navigation>
      )}
      <LogOutBtn onClick={hendeleLogout} color={color}>
        <LoginLogo color={color}>
          <use href={sprite + '#icon-log-in-01'}></use>
        </LoginLogo>
        Log out
      </LogOutBtn>
    </>
  );
}

export default AuthNav;
