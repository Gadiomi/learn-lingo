import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 1280px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  span {
    color: var(--blue);
  }
  max-width: 490px;
  position: relative;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const Text = styled.p`
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 32px;
  text-align: right;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  text-align: right;
`;

export const DescriptionText = styled.p`
  color: var(--modal);
  line-height: 2;
  margin-bottom: 32px;
  text-align: right;
`;

export const ButtonContauner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  justify-content: flex-end;
`;

export const ContactBtn = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: var(--blue);
  color: var(--background);
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1.1em;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background-color: var(--blue-secondary);
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background-color: var(--blue);
  color: var(--background);
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1.1em;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background-color: var(--blue-secondary);
  }
`;

export const ImagesContainer = styled.div``;

export const BgCarImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
`;
