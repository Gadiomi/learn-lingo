import styled from '@emotion/styled';

export const TeachersList = styled.ul`
  margin-top: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 65px;
  min-height: 430px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 12px;
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  margin-left: auto;
  margin-right: auto;
  display: block;
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
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 40px 16px;
  width: 320px;
  background-color: var(--secondary-white);

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 70px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 70px 40px;
  }
`;

export const NotFoundTeacher = styled.p`
  margin: 0;

  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
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
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
`;

export const Containerd = styled.div`
  min-height: calc(100vh - 391px);
`;
export const Containerdf = styled.div`
  min-height: calc(100vh - 220px);
`;
