import {
  Container,
  Blockconteiner,
  Title,
  Descreption,
  GetStartedBtn,
  Text,
  StyledList,
  StyledItem,
  StyledCount,
  StyledDescription,
  HomeConteier,
  ContainerPhoto,
  ContainerMac,
} from './HomePage.styled';
import hero from '../../assets/hero2.webp';
import sprite from '../../assets/sprite.svg';
const Home = ({ color }) => {
  return (
    <HomeConteier>
      <Container>
        <Blockconteiner>
          <Title>
            Unlock your potential with the best{' '}
            <Text color={color}>language</Text> tutors
          </Title>
          <Descreption>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Descreption>
          <GetStartedBtn to="/Teachers" color={color}>
            Get started
          </GetStartedBtn>
        </Blockconteiner>
        <ContainerPhoto color={color}>
          <img src={hero} alt="" />
          <ContainerMac color={color}>
            <svg>
              <use href={sprite + '#icon-apple'}></use>
            </svg>
          </ContainerMac>
        </ContainerPhoto>
      </Container>
      <footer>
        <StyledList color={color}>
          <StyledItem>
            <StyledCount>32,000 +</StyledCount>
            <StyledDescription>Experienced tutors</StyledDescription>
          </StyledItem>
          <StyledItem>
            <StyledCount>300,000 +</StyledCount>
            <StyledDescription>5-star tutor reviews</StyledDescription>
          </StyledItem>
          <StyledItem>
            <StyledCount>120 +</StyledCount>
            <StyledDescription>Subjects taught</StyledDescription>
          </StyledItem>
          <StyledItem>
            <StyledCount>200 +</StyledCount>
            <StyledDescription>Tutor nationalities</StyledDescription>
          </StyledItem>
        </StyledList>
      </footer>
    </HomeConteier>
  );
};

export default Home;
