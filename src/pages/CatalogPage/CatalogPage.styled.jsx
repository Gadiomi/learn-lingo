import styled from '@emotion/styled';

export const CatalogContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 16px;
  padding-bottom: 50px;
  margin: 0 auto;
`;

export const LoadMoreBtn = styled.button`
  color: var(--blue);
  background-color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  border: none;

  margin: 0 auto;

  transition: color 300ms;

  &:hover {
    color: var(--blue-secondary);
  }
`;
