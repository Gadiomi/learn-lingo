import styled from 'styled-components';

export const CarItem = styled.li`
  width: 274px;
`;

export const PhotoConteiner = styled.div`
  position: relative;
  height: 288px;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const SvgHeart = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
`;

export const SvgHeartActiv = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  fill: #3470ff;
`;

export const CarIcon = styled.img`
  height: 100%;
  transition: transform 300ms;
  max-width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CarTitle = styled.p`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  font-size: ${(props) => props.$size && '18px'};
`;

export const CarModel = styled.span`
  color: var(--blue);
`;

export const CarPrice = styled.p`
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CarConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const LearnMoreBtn = styled.button`
  border: none;
  border-radius: 12px;
  background: #3470ff;
  padding: 12px 99px;

  color: var(--background);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;

  transition: background 300ms;
  &:hover {
    background-color: var(--blue-secondary);
  }
`;

export const CarInfo = styled.p`
  color: var(--secondary-transperent);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  margin-bottom: 28px;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 6px;
  width: 274px;

  margin-bottom: 28px;
`;

export const ItemInfo = styled.li`
  color: var(--secondary-transperent);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const SvgVector = styled.svg`
  display: inline-block;
  width: 2px;
  height: 16px;
  stroke-width: 0;
  stroke: var(--drop-down);
`;
