import { UseNavigation, UseLink, LogOutBtn } from './UserMenu.stuled';
import { Logo } from '../BtnLoginAndRegister/BtnLoginAndRegister.styled';
import { logOut } from '../../redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

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
        <UseNavigation>
          <UseLink
            activ={location.pathname === '/Home' ? 'active' : ''}
            color={color}
            to="/Home"
            onClick={() => setNavstate('closed')}
          >
            Home
          </UseLink>
          <UseLink
            activ={location.pathname === '/Teachers' ? 'active' : ''}
            color={color}
            to="/Teachers"
            onClick={() => setNavstate('closed')}
          >
            Teachers
          </UseLink>
          <UseLink
            activ={location.pathname === '/Favorites' ? 'active' : ''}
            color={color}
            to="/Favorites"
            onClick={() => setNavstate('closed')}
          >
            Favorites
          </UseLink>
        </UseNavigation>
      ) : (
        <UseNavigation>
          <UseLink
            activ={location.pathname === '/Home' ? 'active' : ''}
            color={color}
            to="/Home"
          >
            Home
          </UseLink>
          <UseLink
            activ={location.pathname === '/Teachers' ? 'active' : ''}
            color={color}
            to="/Teachers"
          >
            Teachers
          </UseLink>
          <UseLink
            activ={location.pathname === '/Favorites' ? 'active' : ''}
            color={color}
            to="/Favorites"
          >
            Favorites
          </UseLink>{' '}
        </UseNavigation>
      )}
      <LogOutBtn onClick={hendeleLogout} color={color}>
        <Logo color={color}>
          <use href={sprite + '#icon-log-in-01'}></use>
        </Logo>
        Log out
      </LogOutBtn>
    </>
  );
}

export default AuthNav;
