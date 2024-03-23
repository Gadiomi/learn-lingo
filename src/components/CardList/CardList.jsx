import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import {
  selecCar,
  selecCarsFilter,
  selecLimit,
} from '../../redux/cars/selector';
import { CarList } from './CardList.styled';
import { LoadMoreBtn } from '../../pages/CatalogPage/CatalogPage.styled';
import { fetchCar } from '../../redux/cars/operation';
import { setLimit } from '../../redux/cars/carSlice';

function CardList() {
  const car = useSelector(selecCar);
  const limit = useSelector(selecLimit);
  const carsFilter = useSelector(selecCarsFilter);
  const dispatch = useDispatch();
  const hedlClick = () => {
    dispatch(fetchCar(limit + 13));
    dispatch(setLimit());
  };
  return (
    <>
      {carsFilter ? (
        <CarList>
          {carsFilter &&
            carsFilter.map((elemet, index) => (
              <CardItem key={index} car={elemet} />
            ))}
          {carsFilter.length === 0 ? <div>Car not found</div> : undefined}
        </CarList>
      ) : (
        <>
          <CarList>
            {car &&
              car.map((element, index) => (
                <CardItem key={index} car={element} />
              ))}
          </CarList>
          {car.length > limit ? (
            <LoadMoreBtn type="button" onClick={hedlClick}>
              Load more
            </LoadMoreBtn>
          ) : (
            <div></div>
          )}
        </>
      )}
    </>
  );
}

export default CardList;
