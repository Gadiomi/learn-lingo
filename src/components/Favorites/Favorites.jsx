import { TeachersStyled, Container, Text, Containerd,Containerdf} from '../Teachers/Teachers.styled';
import {
  selectTeachersFavorites,
  selectFilterFavoritesTeachers,
} from '../../redux/Teachers/selectors.js';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import TeachersFilter from '../TeachersFilter/TeachersFilter';

import TeacherCard from '../TeacherCard/TeacherCard.jsx';
function Favorites({ color }) {
  const [Level, setLevel] = useState('');
  const Techers = useSelector(selectTeachersFavorites);
  const filterArr = useSelector(selectFilterFavoritesTeachers);
  return (
    <>
      {filterArr ? (
        <Container>
          <TeachersFilter
            color={color}
            Level={Level}
            setLevel={setLevel}
            Teachers={Techers}
          />
          <TeachersStyled>
            {filterArr &&
              filterArr?.map((el) => (
                <TeacherCard
                  key={nanoid()}
                  color={color}
                  teacher={el}
                  Level={Level}
                />
              ))}
            {filterArr.length === 0 ? <Containerd><p>Teacher not faund</p> </Containerd> : undefined}
          </TeachersStyled>
        </Container>
      ) : (
        <>
          {Techers.length === 0 ? (
                          <Container>
       <Containerdf>   <Text>
                It appears that you haven't added any teachers to your favorites
                yet.
              </Text></Containerdf>
            </Container>
          ) : (
            <Container>
              <TeachersFilter
                color={color}
                Level={Level}
                setLevel={setLevel}
                Teachers={Techers}
              />
              <TeachersStyled>
                {Techers &&
                  Techers?.map((el) => (
                    <TeacherCard key={nanoid()} color={color} teacher={el} />
                  ))}
              </TeachersStyled>
            </Container>
          )}
        </>
      )}
    </>
  );
}

export default Favorites;
