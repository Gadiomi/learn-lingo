import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: ${({ top }) => (top ? '0px' : '50%')};
  left: ${({ top }) => (top ? '0px' : '50%')};
  width: 100%;
  height: ${({ top }) => (top ? undefined : ' 100vh')};
  background-color: rgba(33, 33, 33, 0.12);
  transform: ${({ top }) => (top ? undefined : 'translate(-50%, -50%)')};
  overflow: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
