import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const HomeConteier = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0px 16px;
  width: 320px;
  padding-bottom:16px;

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
    padding-bottom:32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1400px;
    padding: 0px 64px;
        padding-bottom:32px;
    
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  margin-bottom: 24px;
  /* width: 100%; */

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Title = styled.h1`
  @media (min-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (min-width: 1280px) {
    width: 548px;
    font-size: 48px;
  }

  color: var(--secondary);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
  margin: 0px;
  margin-bottom: 32px;
`;
export const Text = styled.span`
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  padding-right: 10px;
  border-radius: 12px;
  background-color: ${({ color }) =>
    color === 'Blue'
      ? 'var(--hoverColorBlue)'
      : color === 'Green'
      ? 'var(--hoverColorGreen)'
      : color === 'Orange'
      ? 'var(--hoverColorYellow)'
      : color === 'Pink'
      ? 'var(--hoverColorPink)'
      : color === 'LightPink'
      ? 'var(--hoverColorCoral)'
      : 'var(--hoverCecondary-text-color)'};
`;

export const Blockconteiner = styled.div`
  background-color: var(--secondary-white);
  border-radius: 30px;
  max-width: 735px;

  padding: 24px 16px;
  /* @media screen and (min-width: 768px) {
        @media screen and (max-width: 1279px) {
               max-width: 490px;
        }
              } */
  @media screen and (min-width: 1280px) {
    padding: 98px 20px 98px 64px;
    width: 720px;
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 350px;
  @media screen and (min-width: 1280px) {
    width: 568px;
    height: 530px;
  }
`;
export const Descreption = styled.p`
  @media (min-width: 1280px) {
    width: 471px;
    margin-bottom: 64px;
  }
  margin-bottom: 32px;
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.37;
  letter-spacing: -0.32px;
`;
export const GetStartedBtn = styled(Link)`
  display: block;
  text-align: center;
  border: none;
  font-size: 18px;
  padding: 16px 10px;
  font-weight: 700;
  line-height: 1.6;
  border-radius: 12px;
  height: 60px;
  transition: background 300ms;
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

  @media screen and (min-width: 768px) {
    width: 267px;
  }
  @media screen and (min-width: 1280px) {
    width: 267px;
    padding: 16px 88px;
  }
  &:hover {
    background-color: ${({ color }) =>
      color === 'Blue'
        ? 'var(--hoverColorBlue)'
        : color === 'Green'
        ? 'var(--hoverColorGreen)'
        : color === 'Orange'
        ? 'var(--hoverColorYellow)'
        : color === 'Pink'
        ? 'var(--hoverColorPink)'
        : color === 'LightPink'
        ? 'var(--hoverColorCoral)'
        : 'var(--hoverCecondary-text-color)'};
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  border: 3px dashed
    ${({ color }) =>
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
  border-radius: 30px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }
  /* 
  @media screen and (max-width: 1280px) {
    max-width: 819px;

  } */
  @media screen and (min-width: 1280px) {
    gap: 100px;
    padding: 40px 0;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const StyledCount = styled.span`
  font-size: 28px;
  line-height: 1.14;
  font-weight: 500;
  letter-spacing: -0.56px;
`;

export const StyledDescription = styled.span`
  width: 74px;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.28px;
`;

export const ContainerPhoto = styled.div`
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
  border-radius: 15px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 468px;
  }

  @media screen and (min-width: 1280px) {
    width: 568px;
  }
  img {
    width: 13rem;
    @media screen and (min-width: 1280px) {
      width: 300px;
    }
  }
`;

export const ContainerMac = styled.div`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-image: ${({ color }) =>
    color === 'Blue'
      ? 'linear-gradient(180deg, #314B6E 0%, #1F385A 100%)'
      : color === 'Green'
      ? 'linear-gradient(180deg, #295761 0%, #183E49 100%)'
      : color === 'Orange'
      ? 'linear-gradient(180deg, #EEB055 0%, #D08F38 100%)'
      : color === 'Pink'
      ? 'linear-gradient(180deg, #B03F3E 0%, #982A27 100%)'
      : color === 'LightPink'
      ? 'linear-gradient(180deg, #E17650 0%, #CA5B38 100%)'
      : 'var(--cecondary-text-color)'};

  width: 16rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 308px;
    height: 7rem;
  }
  @media screen and (min-width: 1024px) {
    width: 370px;
    height: 11rem;
  }

  svg {
    width: 46px;
    height: 56px;
    fill: ${({ color }) =>
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
