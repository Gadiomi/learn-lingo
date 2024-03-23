import { useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { ListFilter, ResetBtn } from './TeachersFilter.stuled';
import { useDispatch, useSelector } from 'react-redux';

import {
  filterTeachers,
  resetFilter,
  filterFavoritesTeachers,
  resetFavoritesFilter,
} from '../../redux/Teachers/TeachersSlice';
import { selectTeachers } from '../../redux/Teachers/selectors';

function TeachersFilter({ color, Level, setLevel, Teachers }) {
  const dispatch = useDispatch();
  const [Languages, setLanguages] = useState('');
  const [price, setPrice] = useState('');
  const AllTeachers = useSelector(selectTeachers);
  const LanguageArr = [
    'French',
    'English',
    'German',
    'Ukrainian',
    'Polish',
    'Spanish',
    'Italian',
  ];
  const LevelArr = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper-Intermediate',
    'C1 Advanced',
    'C2 Proficient',
  ];

  let priceArr = [10, 15, 20, 25, 30, 35, 40];
  useEffect(() => {
    if (Languages + price + Level === '') {
      return;
    }
    const filteredTeachers = Teachers.filter((el) => {
      const languagesFilter = Languages
        ? el.languages.includes(Languages)
        : true;
      const priceFilter = price ? +el.price_per_hour <= price : true;
      const levelFilter = Level ? el.levels.includes(Level) : true;

      return priceFilter && languagesFilter && levelFilter;
    });
    if (AllTeachers === Teachers) {
      dispatch(filterTeachers(filteredTeachers));
    } else {
      dispatch(filterFavoritesTeachers(filteredTeachers));
    }
  }, [Languages, Level, Teachers, dispatch, price]);
  const hendeleReset = () => {
    if (AllTeachers === Teachers) {
      dispatch(resetFilter());
    } else {
      dispatch(resetFavoritesFilter());
    }

    setLanguages('');
    setPrice('');
    setLevel('');
  };

  return (
    <ListFilter>
      <li>
        <span>Languages</span>
        <Dropdown
          arr={LanguageArr}
          value="Choose a language"
          set={setLanguages}
          selectedOption={Languages}
        />
      </li>
      <li>
        <span>Level of knowledge</span>
        <Dropdown
          arr={LevelArr}
          value="Choose a level"
          set={setLevel}
          selectedOption={Level}
        />
      </li>
      <li>
        <span>Price</span>
        <Dropdown
          arr={priceArr}
          value="To $"
          set={setPrice}
          height={true}
          selectedOption={price}
        />
      </li>
      <ResetBtn color={color} onClick={hendeleReset}>
        Reset filter
      </ResetBtn>
    </ListFilter>
  );
}

export default TeachersFilter;
