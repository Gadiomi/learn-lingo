import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  transition: color 300ms;

  @media (min-width: 768px) {
    padding: 15px 0px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  &:hover {
    color: ${({ color }) =>
      color === 'Blue'
        ? 'var(--colorBlue)'
        : color === 'Green'
        ? 'var(--colorGreen)'
        : color === 'Orange'
        ? 'var(--colorYellow)'
        : color === 'Pink'
        ? 'var(--colorPink)'
        : color === 'LightPink'
        ? 'var(--colorCoral)'
        : 'var(--cecondary-text-color)'};
  }
    color: ${({ activ ,color}) =>  activ === 'active'  ? 
      color === 'Blue'
        ? 'var(--colorBlue)'
        : color === 'Green'
        ? 'var(--colorGreen)'
        : color === 'Orange'
        ? 'var(--colorYellow)'
        : color === 'Pink'
        ? 'var(--colorPink)'
        : color === 'LightPink'
        ? 'var(--colorCoral)'
        : 'var(--cecondary-text-color)' : '' }
`;
