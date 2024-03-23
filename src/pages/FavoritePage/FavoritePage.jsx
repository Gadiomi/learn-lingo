import { Container } from './FavoritePage.styled';
import Favorite from '../../components/Favorite/Favorite';

const FavoritePage = () => {
  return (
    <section>
      <Container>
        <Favorite />
      </Container>
    </section>
  );
};

export default FavoritePage;
