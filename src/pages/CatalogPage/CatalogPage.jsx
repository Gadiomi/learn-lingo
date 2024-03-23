import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { CatalogContainer } from './CatalogPage.styled';
import { fetchCar } from '../../redux/cars/operation';
import CardList from '../../components/CardList/CardList';
import { selecStatus, selecCarAll, selecCar } from '../../redux/cars/selector';
import CardFilter from '../../components/CardFilter/CardFilter';

const CatalogPage = () => {
  const status = useSelector(selecStatus);
  const carArr = useSelector(selecCarAll);
  const car = useSelector(selecCar);

  const dispatch = useDispatch();
  useEffect(() => {
    if (car.length === 0) {
      dispatch(fetchCar(12));
    }
  }, [car.length, dispatch]);

  if (status === 'loading') {
    return (
      <section>
        <CatalogContainer>
          <CardFilter filterArr={carArr} />
          <CardList />
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#000000"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            visible={true}
          />
        </CatalogContainer>
      </section>
    );
  }

  if (status === 'succeeded') {
    return (
      <section>
        <CatalogContainer>
          <CardFilter filterArr={carArr} />
          <CardList />
        </CatalogContainer>
      </section>
    );
  }
};

export default CatalogPage;
