import {
  HomeContainer,
  ContentContainer,
  Text,
  Title,
  DescriptionText,
  ImagesContainer,
  BgCarImg,
  ButtonContauner,
  ContactBtn,
  Button,
} from './HomePage.styled';
import CarBagroundImg from '../../images/photo_bg.jpg';

function HomePage() {
  return (
    <>
      <HomeContainer>
        <ContentContainer>
          <Text>Plan your trip now</Text>
          <Title>
            We have the best <span>prices</span> for you
          </Title>
          <DescriptionText>
            Visit our service, where you can find any car to your taste, and
            which will suit you and your family
          </DescriptionText>
          <ButtonContauner>
            <ContactBtn href="tel:+380730000000">Contact Us</ContactBtn>
            <Button to="/catalog">Go to catalog</Button>
          </ButtonContauner>
        </ContentContainer>

        <ImagesContainer>
          <BgCarImg
            src={CarBagroundImg}
            alt="bagroundimg"
            loading="lazy"
          ></BgCarImg>
        </ImagesContainer>
      </HomeContainer>
    </>
  );
}

export default HomePage;
