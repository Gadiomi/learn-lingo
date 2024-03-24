import {
  HeaderContainer,
  HeaderLogoSvg,
  HeaderLogoText,
  HeaderLogoConteiner,
  MainHeader,
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
    <MainHeader>
      <HeaderContainer>
        <HeaderLogoConteiner to="/Home">
          <HeaderLogoSvg>
            <use href={sprite + '#icon-ukraine'}></use>
          </HeaderLogoSvg>
          <HeaderLogoText>LearnLingo</HeaderLogoText>
        </HeaderLogoConteiner>
        {isLoggedIn ? <UserMenu color={color} /> : <AuthNav color={color} />}
      </HeaderContainer>

      <HeaderContainer2>
        <HeaderLogoConteiner to="/Home">
          <HeaderLogoSvg>
            <use href={sprite + '#icon-ukraine'}></use>
          </HeaderLogoSvg>
          <HeaderLogoText>LearnLingo</HeaderLogoText>
        </HeaderLogoConteiner>
        <NavBar color={color} />
      </HeaderContainer2>
    </MainHeader>
  );
};
