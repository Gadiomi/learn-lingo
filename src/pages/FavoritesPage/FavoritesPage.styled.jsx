import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;
export const Block = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  color: #ffffff;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: #00baff;
  }
`;
