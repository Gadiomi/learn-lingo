import BtnLoginAndRegister from '../BtnLoginAndRegister/BtnLoginAndRegister';
import { AuthNavigation, AuthLink } from './AuthNav.styled';
import { useLocation } from 'react-router-dom';
function AuthNav({ color, setNavstate }) {
  const location = useLocation();
  return (
    <>
      {setNavstate ? (
        <>
          <AuthNavigation>
            <AuthLink
              color={color}
              to="/Home"
              onClick={() => setNavstate('closed')}
              activ={location.pathname === '/Home' ? 'active' : ''}
            >
              Home
            </AuthLink>
            <AuthLink
              color={color}
              to="/Teachers"
              onClick={() => setNavstate('closed')}
              activ={location.pathname === '/Teachers' ? 'active' : ''}
            >
              Teachers
            </AuthLink>
          </AuthNavigation>
          <BtnLoginAndRegister color={color} setNavstate={setNavstate} />
        </>
      ) : (
        <>
          <AuthNavigation>
            <AuthLink
              color={color}
              to="/Home"
              activ={location.pathname === '/Home' ? 'active' : ''}
            >
              Home
            </AuthLink>
            <AuthLink
              color={color}
              to="/Teachers"
              activ={location.pathname === '/Teachers' ? 'active' : ''}
            >
              Teachers
            </AuthLink>
          </AuthNavigation>
          <BtnLoginAndRegister color={color} setNavstate={setNavstate} />
        </>
      )}
    </>
  );
}

export default AuthNav;
