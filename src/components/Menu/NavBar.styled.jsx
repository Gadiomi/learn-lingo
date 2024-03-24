import styled from 'styled-components';

export const NavigationContent = styled.div`
  flex-basis: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationList = styled.ul`
  position: fixed;
  left: 0px;
  width: 100%;
  top: 0px;
  z-index: 1;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.85, 0.58, 0.59, 1.1) 0s;
  display: flex;
  gap: 32px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform: ${(props) =>
    props.display === 'default'
      ? 'translateY(-900px);'
      : props.display === 'closed'
      ? 'translateY(-900px);'
      : props.display === 'opened'
      ? 'translateY(0);'
      : null};
  background-color: white;
`;
