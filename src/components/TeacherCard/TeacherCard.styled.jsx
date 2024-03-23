import styled from '@emotion/styled';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { HiStar } from 'react-icons/hi';

export const TeacherCardStyled = styled.li`
  position: relative;
  width: 100%;
  padding: 12px;

  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: flex-start;

  border-radius: 24px;
  background-color: var(--background);

  @media screen and (min-width: 756px) {
    flex-wrap: nowrap;
    padding: 16px;
    gap: 30px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px;
    gap: 40px;
  }
`;

export const TeacherImgThumb = styled.div`
  width: 120px;
  height: 120px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 50%;
  border: 3px solid
    ${({ color }) =>
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
  background: #fff;
`;

export const TeacherImg = styled.img`
  position: relative;
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
export const SvgOnl = styled.svg`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 17px;
  right: 17px;
`;

export const InfoTeacherWrapper = styled.div``;

export const InfoTeacherHeader = styled.div`
  margin-bottom: 32px;

  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  align-items: start;

  @media screen and (min-width: 1280px) {
    width: 968px;
    justify-content: space-between;
  }
  & p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    font-weight: 500;

    gap: 16px;

    @media screen and (min-width: 1280px) {
      justify-content: space-between;
    }

    & :not(:last-child) {
      &:after {
        content: '';
        display: block;
        height: 17px;
        width: 1px;
        background-color: rgba(18, 20, 23, 0.2);
        margin-left: 16px;
      }
    }
  }
  & li {
    display: flex;
    align-items: center;
    & span {
      color: var(--grean);
      margin-left: 4px;
    }
  }
`;

export const InfoTeacherList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const LevelsItem = styled.li`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  border: 1px solid rgba(18, 20, 23, 0.2);

  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  &.selected {
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
  }
`;

export const HeartLineStyled = styled(HiOutlineHeart)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;

export const BtnFavorites = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
export const HeartFillStyled = styled(HiHeart)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  fill: ${({ color }) =>
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
    transform: scale(1.02);
    opacity: 0.8;
  }
`;

export const BookIconStyled = styled(HiOutlineBookOpen)`
  margin-right: 8px;
`;

export const StarStyled = styled(HiStar)`
  margin-right: 8px;
  fill: #ffc531;
`;

export const TeacherNameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & p {
    color: var(--gray);
    margin: 0;
  }
`;

export const TeachersName = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;
export const SpeaksStyled = styled.p`
  margin-top: 32px;
  color: var(--gray);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  & span {
    color: var(--secondary);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
  }
`;

export const ConditionsStyled = styled.p`
  margin-top: 8px;
  color: var(--gray);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  & span {
    color: var(--secondary);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`;
export const ReadMoreBtn = styled.button`
  margin-top: 16px;
  padding: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  margin-right: auto;
  margin-bottom: 32px;
  cursor: pointer;
  transition: color 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover {
  }
`;
export const Svgheart = styled.svg`
  position: absolute;
  top: 24px;
  right: 24px;
  transform: scale(1);
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  width: 26px;
  height: 26px;
  stroke: black;
  fill: transparent;
`;

export const TeacherDescr = styled.p`
  margin-bottom: 32px;
  margin-top: 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const FBList = styled.ul`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`;
export const FBItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const FBThumb = styled.div`
  display: flex;
  gap: 12px;
`;

export const FBAvaThumb = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FBAva = styled.p`
  display: block;
  border-radius: 100px;

  font-size: 24px;
  font-weight: 700;
`;
export const FBAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`;

export const FBAuthorName = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const FBRew = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const TrialBtn = styled.button`
  padding: 16px 48px;
  border: none;
  border-radius: 12px;
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

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 32px;
`;

export const AttentionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 445px;
  padding: 60px 20px;
  border-radius: 20px;
  background: #fff;

  @media (min-width: 768px) {
    width: 608px;
    height: 429px;
    padding: 60px 40px;
    border-radius: 40px;
  }
`;

export const AttentionIcon = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: var(--secondary);
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const AttentionTitle = styled.h3`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
  }
`;

export const AttentionText = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.56px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }
`;
