import styled from 'styled-components';

const MenuButton = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 20px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  margin: 10px auto;
  padding: 0;
  z-index: 2;
  min-height: 48px;
`;

const MenuBars = styled.i`
  display: block;
  position: relative;
  width: 45px;
  height: 5px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.navstate === 'opened'
      ? 'transparent'
      : props.color === 'Blue'
      ? 'var(--hoverColorBlue)'
      : props.color === 'Green'
      ? 'var(--hoverColorGreen)'
      : props.color === 'Orange'
      ? 'var(--hoverColorYellow)'
      : props.color === 'Pink'
      ? 'var(--hoverColorPink)'
      : props.color === 'LightPink'
      ? 'var(--hoverColorCoral)'
      : 'blue'};
  transition: all 0.5s;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: ${(props) =>
      props.color
        ? props.color === 'Blue'
          ? 'var(--hoverColorBlue)'
          : props.color === 'Green'
          ? 'var(--hoverColorGreen)'
          : props.color === 'Orange'
          ? 'var(--hoverColorYellow)'
          : props.color === 'Pink'
          ? 'var(--hoverColorPink)'
          : props.color === 'LightPink'
          ? 'var(--hoverColorCoral)'
          : 'var(--hoverCecondary-text-color)'
        : 'blue'};
    transition: 0.3s;
  }
  &::before {
    transform: translate(0, -12px);
    transform: ${(props) => props.navstate === 'opened' && 'rotate(45deg)'};
  }

  &::after {
    transform: translate(0, 12px);
    transform: ${(props) => props.navstate === 'opened' && 'rotate(-45deg)'};
  }
`;

const HamButton = ({ navstate, handleNavstate, color }) => {
  return (
    <MenuButton onClick={() => handleNavstate()}>
      <MenuBars navstate={navstate} color={color} />
    </MenuButton>
  );
};

export default HamButton;
