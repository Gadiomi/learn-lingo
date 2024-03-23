import { useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import {
  SearchBtn,
  ListFilter,
  SelectDiv,
  ConteinerInput,
  InputLeft,
  InputRight,
  InputText,
} from './CardFilter.styled';
import { fetchCarAll } from '../../redux/cars/operation';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterCars,
  carsFilterFavorites,
  filterReset,
  filterResetFavorites,
} from '../../redux/cars/carSlice';
import { selecCarAll } from '../../redux/cars/selector';

function CardFilter({ filterArr }) {
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const carAll = useSelector(selecCarAll);
  const dispatch = useDispatch();
  const options = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
    'Ford',
    'Honda',
  ];

  let priceArr = [];
  for (let i = 10; i <= 200; i += 10) {
    priceArr.push(i);
  }
  const filteredCars = filterArr.filter((car) => {
    const brandMatch = model
      ? car.make.toLowerCase() === model.toLowerCase()
      : true;
    const hourlyPriceMatch = price ? +car.rentalPrice.slice(1) <= price : true;
    const mileageMatchMin = minMileage ? car.mileage > minMileage : true;
    const mileageMatchMax = maxMileage ? car.mileage < maxMileage : true;

    return brandMatch && hourlyPriceMatch && mileageMatchMin && mileageMatchMax;
  });
  const hendleSearch = () => {
    if (model + price + minMileage + maxMileage) {
      if (carAll === filterArr) {
        dispatch(filterCars(filteredCars));
      } else {
        dispatch(carsFilterFavorites(filteredCars));
      }
    }
  };

  useEffect(() => {
    if (carAll.length === 0) dispatch(fetchCarAll());
  }, [dispatch]);
  const hendleReset = () => {
    if (carAll === filterArr) {
      dispatch(filterReset());
    } else {
      dispatch(filterResetFavorites());
    }
    setModel('');
    setPrice('');
    setMinMileage('');
    setMaxMileage('');
  };

  return (
    <>
      <ListFilter>
        <li>
          <span>Car brand</span>
          <Dropdown
            arr={options}
            value="Enter the text"
            set={setModel}
            selectedOption={model}
          />
        </li>
        <li>
          <span>Price/ 1 hour</span>
          <Dropdown
            arr={priceArr}
            value="To $"
            set={setPrice}
            height={true}
            selectedOption={price}
          />
        </li>
        <li>
          <SelectDiv>
            <span>Сar mileage / km</span>
            <div>
              <ConteinerInput>
                <InputText>From</InputText>
                <InputLeft
                  type="number"
                  value={minMileage}
                  onChange={(e) => {
                    setMinMileage(e.target.value);
                  }}
                />
              </ConteinerInput>
              <ConteinerInput>
                <InputText>To</InputText>
                <InputRight
                  type="number"
                  value={maxMileage}
                  onChange={(e) => {
                    setMaxMileage(e.target.value);
                  }}
                />
              </ConteinerInput>
            </div>
          </SelectDiv>
        </li>
        <SearchBtn type="button" onClick={hendleSearch}>
          Search
        </SearchBtn>
        <SearchBtn type="button" onClick={hendleReset}>
          Reset the filter
        </SearchBtn>
      </ListFilter>
    </>
  );
}

export default CardFilter;
