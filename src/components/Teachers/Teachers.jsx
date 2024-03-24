import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TeachersList, Button, Container, Containerd } from './Teachers.styled';
import TeacherCard from 'components/TeacherCard/TeacherCard';
import { nanoid } from 'nanoid';
import TeachersFilter from '../TeachersFilter/TeachersFilter';
import { ThreeDots } from 'react-loader-spinner';

import {
  selectTeachers,
  selectLoading,
  selectTeachersFilter,
  selectLimit,
} from '../../redux/Teachers/selectors';
import { getAllTeachers } from '../../redux/Teachers/TeachersOperations';
import { setLimit } from '../../redux/Teachers/TeachersSlice';
import { useDispatch } from 'react-redux';

function Teachers({ color }) {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const limit = useSelector(selectLimit);
  const isLoading = useSelector(selectLoading);
  const filterArr = useSelector(selectTeachersFilter);
  const [Level, setLevel] = useState('');

  const loadMoreHandle = () => {
    dispatch(getAllTeachers(limit + 4));
    dispatch(setLimit());
  };
  return (
    <>
      <Container>
        <TeachersFilter
          color={color}
          Level={Level}
          setLevel={setLevel}
          Teachers={teachers}
        />
        {filterArr ? (
          <TeachersList>
            {filterArr &&
              filterArr?.map((el) => (
                <TeacherCard
                  key={nanoid()}
                  color={color}
                  teacher={el}
                  Level={Level}
                />
              ))}
            {filterArr.length === 0 ? (
              <Containerd>
                {' '}
                <p>Teacher not faund</p>{' '}
              </Containerd>
            ) : undefined}
          </TeachersList>
        ) : (
          <>
            <TeachersList>
              {teachers &&
                teachers?.map((el) => (
                  <TeacherCard key={nanoid()} color={color} teacher={el} />
                ))}
            </TeachersList>
            {teachers?.length > limit &&
              (isLoading ? (
                <ThreeDots
                  height="60"
                  width="80"
                  radius="9"
                  color="#000000"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ justifyContent: 'center' }}
                  visible={true}
                />
              ) : (
                <Button color={color} onClick={loadMoreHandle}>
                  Load more
                </Button>
              ))}
          </>
        )}
      </Container>
    </>
  );
}

export default Teachers;
