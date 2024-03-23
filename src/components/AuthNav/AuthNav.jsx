import BtnLoginAndRegister from '../BtnLoginAndRegister/BtnLoginAndRegister';
import { Navigation, StyledLink } from './AuthNav.styled';
import { useLocation  } from "react-router-dom";
function AuthNav({ color, setNavstate }) {
      const location = useLocation();
  return (
    <>
      {setNavstate ? (
        <>
          <Navigation>
            <StyledLink
              color={color}
              to="/Home"
              onClick={() => setNavstate('closed')}
                    activ={location.pathname === "/Home"  ? 'active' : ''} 
            >
              Home
            </StyledLink>
            <StyledLink
              color={color}
              to="/Teachers"
              onClick={() => setNavstate('closed')}
              activ={location.pathname === "/Teachers"  ? 'active' : ''}
            >
              Teachers
            </StyledLink>
          </Navigation>
          <BtnLoginAndRegister color={color} setNavstate={setNavstate} />
        </>
      ) : (
        <>
          <Navigation>
              <StyledLink color={color} to="/Home"
                      activ={location.pathname === "/Home"  ? 'active' : ''} >
                
              Home
            </StyledLink>
              <StyledLink color={color} to="/Teachers"
                  activ={location.pathname === "/Teachers"  ? 'active' : ''}>
              Teachers
            </StyledLink>
          </Navigation>
          <BtnLoginAndRegister color={color} setNavstate={setNavstate} />
        </>
      )}
    </>
  );
}

export default AuthNav;
