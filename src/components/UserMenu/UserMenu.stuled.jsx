import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-direction: column;
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
  padding: 10px 0px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  transition: color 300ms;
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

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  transition: color 300ms;
  gap: 0px 8px;
  background-color: transparent;
  border: none;

  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
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
`;
