import { LoaderContainer, MainLoader } from './Loader.styled';

export const Loader = ({ color }) => {
  return (
    <MainLoader color={color}>
      <LoaderContainer>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </LoaderContainer>
    </MainLoader>
  );
};
