import styled from 'styled-components';

export const TeacherListFilter = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;
  }
  span {
    color: var(--gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;

    margin-bottom: 8px;
  }
`;

export const TeacherResetFilterBtn = styled.button`
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
  border: none;
  border-radius: 12px;
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  padding: 14px 39px;
  transition: background 300ms;
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
