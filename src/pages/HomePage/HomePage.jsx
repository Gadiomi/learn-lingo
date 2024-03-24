import {
  Container,
  HomeBlockconteiner,
  HomeTitle,
  HomeDescreption,
  HomeStartedBtn,
  HomeText,
  HomeList,
  HomeItem,
  HomeCount,
  HomeDescription,
  HomePageConteier,
  HomeContainerPhoto,
  HomeContainerMac,
} from './HomePage.styled';
import hero from '../../assets/hero2.webp';
import sprite from '../../assets/sprite.svg';
const Home = ({ color }) => {
  return (
    <HomePageConteier>
      <Container>
        <HomeBlockconteiner>
          <HomeTitle>
            Unlock your potential with the best{' '}
            <HomeText color={color}>language</HomeText> tutors
          </HomeTitle>
          <HomeDescreption>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </HomeDescreption>
          <HomeStartedBtn to="/Teachers" color={color}>
            Get started
          </HomeStartedBtn>
        </HomeBlockconteiner>
        <HomeContainerPhoto color={color}>
          <img src={hero} alt="" />
          <HomeContainerMac color={color}>
            <svg>
              <use href={sprite + '#icon-apple'}></use>
            </svg>
          </HomeContainerMac>
        </HomeContainerPhoto>
      </Container>
      <footer>
        <HomeList color={color}>
          <HomeItem>
            <HomeCount>32,000 +</HomeCount>
            <HomeDescription>Experienced tutors</HomeDescription>
          </HomeItem>
          <HomeItem>
            <HomeCount>300,000 +</HomeCount>
            <HomeDescription>5-star tutor reviews</HomeDescription>
          </HomeItem>
          <HomeItem>
            <HomeCount>120 +</HomeCount>
            <HomeDescription>Subjects taught</HomeDescription>
          </HomeItem>
          <HomeItem>
            <HomeCount>200 +</HomeCount>
            <HomeDescription>Tutor nationalities</HomeDescription>
          </HomeItem>
        </HomeList>
      </footer>
    </HomePageConteier>
  );
};

export default Home;
