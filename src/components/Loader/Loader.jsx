import { LoaderContainer, LoaderStyled } from './Loader.styled';

export const Loader = ({ color }) => {
  return (
    <LoaderStyled color={color}>
      <LoaderContainer>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </LoaderContainer>
    </LoaderStyled>
  );
};
