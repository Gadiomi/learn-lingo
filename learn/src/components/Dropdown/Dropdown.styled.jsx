import styled from 'styled-components';

export const Customdropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const Dropdownheader = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 50px;
  padding: 14px 18px 14px 18px;
  background-color: var(--gray);
  cursor: pointer;
  border-radius: 14px;
`;

export const DropdownText = styled.p`
  color: var(--secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
`;

export const Dropdownlist = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px 0px;

  width: 100%;
  height: 272px;
  padding: 14px 8px 14px 18px;

  overflow: auto;

  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: var(--background);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  height: ${(props) => props.$heigh && '188px'};
`;

export const DropdownItem = styled.li`
  cursor: pointer;
  color: var(--drop-down);
  transition: color 300ms;

  width: 100%;
  &:hover {
    color: var(--secondary);
  }
`;

export const SvgDown = styled.svg`
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: transparent;
  transition: transform 300ms;
  transform: ${(props) => props.$active && 'rotate(180deg)'};
`;
