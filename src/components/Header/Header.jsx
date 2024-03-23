import {
  HeaderContainer,
  LogoSvg,
  LogoText,
  LogoConteiner,
  Headera,
  HeaderContainer2,
} from './Header.styled';
import AuthNav from '../AuthNav/AuthNav';
import sprite from '../../assets/sprite.svg';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsAuth } from '../../redux/Auth/selectors';
import { useSelector } from 'react-redux';
import NavBar from '../Menu/NavBar';

export const Header = ({ color }) => {
  const isLoggedIn = useSelector(selectIsAuth);

  return (
    <Headera>
      <HeaderContainer>
        <LogoConteiner to="/Home">
          <LogoSvg>
            <use href={sprite + '#icon-ukraine'}></use>
          </LogoSvg>
          <LogoText>LearnLingo</LogoText>
        </LogoConteiner>
        {isLoggedIn ? <UserMenu color={color} /> : <AuthNav color={color} />}
      </HeaderContainer>

      <HeaderContainer2>
        <LogoConteiner to="/Home">
          <LogoSvg>
            <use href={sprite + '#icon-ukraine'}></use>
          </LogoSvg>
          <LogoText>LearnLingo</LogoText>
        </LogoConteiner>
        <NavBar color={color} />
      </HeaderContainer2>
    </Headera>
  );
};
