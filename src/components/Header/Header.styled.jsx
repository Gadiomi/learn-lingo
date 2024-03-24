import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainHeader = styled.header`
  padding: 20px 0px;
`;

export const HeaderContainer = styled.div`
  display: none;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    max-width: 1184px;
    padding: 0 16px;
  }
`;
export const HeaderContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: none;
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    max-width: 1184px;
    padding: 0 16px;
  }
`;

export const HeaderLogoSvg = styled.svg`
  width: 28px;
  height: 28px;
`;

export const HeaderLogoConteiner = styled(Link)`
  display: flex;
  gap: 0px 8px;
  align-items: center;
`;
export const HeaderLogoText = styled.span`
  color: #121417;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
