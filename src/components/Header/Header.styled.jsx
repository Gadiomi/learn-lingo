import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  max-width: 1280px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const HeaderLogo = styled(Link)`
  display: block;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLink = styled(Link)`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  padding: 30px 20px;
  color: var(--secondary);
  transition: color 300ms;
  &:hover {
    color: var(--blue-secondary);
  }
`;
