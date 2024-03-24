import { BtnMenu, Menu } from '../Menu/HamButton.styled';
const HamButton = ({ navstate, handleNavstate, color }) => {
  return (
    <BtnMenu onClick={() => handleNavstate()}>
      <Menu navstate={navstate} color={color} />
    </BtnMenu>
  );
};

export default HamButton;
