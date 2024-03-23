import styled from '@emotion/styled';

export const RegisterFormStyled = styled.form`
  max-width: 600px;
  border-radius: 30px;
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  height: auto;
  padding: 64px;
  left: 50%;
  max-height: calc(100% - 88px);
  overflow-y: auto;
  top: calc(50% + 40px);
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 88px;
    left: 50%;
    width: 100%;
    max-height: calc(100% - 88px);
    overflow-y: auto;
    transform: translateX(-50%) translateY(0px);
  }
`;

export const FormFields = styled.div`
  margin-bottom: 18px;
`;
export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const RadioTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 21px;
  margin-top: 32px;
`;
export const RadioLabel = styled.label`
  display: flex;
  gap: 8px;
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
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.04em;
  text-align: left;
  &:checked {
    font-weight: 700;
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
  }
  &:focus-within {
    font-weight: 700;
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
  }
`;

export const InputWraper = styled.div`
  width: 100%;
  position: relative;

  & input {
    width: 100%;
    height: 100%;

    margin-top: 20px;
    border-radius: 12px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    background-color: #fff;
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
    padding: 16px;

    &:focus {
      outline: none;
    }

    &:focus + label {
      color: #dddddd;
    }

    &:not(:placeholder-shown) + label {
      transform: translateY(-34px);
      font-size: 10px;
      font-weight: 100;
    }
    &.is-invalid {
      border-color: var(--red);
    }
  }

  & label {
    position: absolute;
    bottom: 20px;
    left: 18px;
    width: 100%;
    pointer-events: none;
    font-size: 14px;

    transition: all 0.3s ease;
  }

  & .error {
    position: absolute;
    top: 56px;
    left: 40px;
    font-size: 12px;
  }
`;
export const RadioInput = styled.input`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 20px;
  height: 20px;
  align-items: center;
  appearance: none;
  background-color: #fff;

  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 50%;
  transition: all 300ms;
  &:checked {
    border: 2px solid
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
  }
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${({ color }) =>
      color === 'Blue'
        ? 'var(--colorBlue)  10px 10px inset'
        : color === 'Green'
        ? 'var(--colorGreen)  10px 10px inset'
        : color === 'Orange'
        ? 'var(--colorYellow)  10px 10px inset'
        : color === 'Pink'
        ? 'var(--colorPink)  10px 10px inset'
        : color === 'LightPink'
        ? 'var(--colorCoral)  10px 10px inset'
        : 'var(--cecondary-text-color)'};
    background-color: transparent;
  }
  &:checked::before {
    transform: scale(1);
  }
  &:focus {
  }
`;

export const TeacherThumb = styled.div`
  display: flex;
  gap: 12px;
`;

export const TeacherAvaThumb = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeacherAva = styled.img`
  border-radius: 100%;
  background: #fff;
  overflow: hidden;
`;
export const TeacherAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`;

export const TeacherYourAuthor = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: #8a8a89;
`;

export const TeacherAuthorName = styled.span`
  font-size: 16px;

  font-weight: 500;
  line-height: 1.5; /* 150% */
`;

export const Caption = styled.h3`
  margin: 0;

  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2; /* 120% */
  letter-spacing: -0.8px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const SupportingText = styled.p`
  margin: 0;
  margin-bottom: 22px;
  margin-right: auto;
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
`;

export const Validation = styled.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`;
export const Button = styled.button`
  border: none;
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
  padding: 16px 215px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 16px 70px;
  }
`;

export const ButonClosedModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
`;

export const Svgx = styled.svg`
  stroke: black;
  width: 32px;
  height: 32px;
`;
