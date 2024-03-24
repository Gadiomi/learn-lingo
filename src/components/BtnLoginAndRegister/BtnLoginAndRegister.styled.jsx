import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const LinkLogin = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0px 8px;

  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
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
`;
export const BtnRegister = styled.button`
  color: var(--background);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;

  padding: 14px 39px;
  border-radius: 12px;
  background: var(--secondary);
  border: none;
  transition: all 300ms;
  &:hover {
    color: black;
    background-color: ${({ color }) =>
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
export const Logo = styled.svg`
  stroke: ${({ color }) =>
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
  width: 20px;
  height: 20px;
`;
