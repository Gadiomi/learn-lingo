import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  TeacherCardStyled,
  TeacherImg,
  TeacherImgThumb,
  InfoTeacherWrapper,
  InfoTeacherHeader,
  HeartLineStyled,
  BookIconStyled,
  StarStyled,
  TeachersName,
  SpeaksStyled,
  ConditionsStyled,
  ReadMoreBtn,
  TeacherDescr,
  FBList,
  FBItem,
  FBThumb,
  FBAvaThumb,
  FBAva,
  FBAuthor,
  FBAuthorName,
  FBRew,
  LevelsList,
  LevelsItem,
  HeartFillStyled,
  TeacherNameBox,
  BtnFavorites,
  TrialBtn,
  AttentionWrapper,
  AttentionTitle,
  AttentionText,
  AttentionIcon,
  SvgOnl,
} from './TeacherCard.styled';
import { selectIsAuth } from '../../redux/Auth/selectors';
import {
  addFavorites,
  deleteFavorites,
} from '../../redux/Teachers/TeachersSlice';
import { selectTeachersFavorites } from '../../redux/Teachers/selectors';
import sprite from '../../assets/sprite.svg';
import BtnLoginAndRegister from '../BtnLoginAndRegister/BtnLoginAndRegister';
import Modal from '../Modal/Modal';
import Register from '../AuthComponents/RegisterForm/RegisterForm';
import Login from '../AuthComponents/LoginForm/LoginForm';
import BookForm from '../BookForm/BookForm';
const TeacherCard = ({ teacher, color, Level }) => {
  const {
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;
  const dispatch = useDispatch();
  const [isReadMore, setIsReadMore] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const [openOrderModal, setopenOrderModal] = useState(false);
  const [onClose, setOnClose] = useState(false);
  const [onCloseLogin, setOnCloseLogin] = useState(false);

  const favTeachersArr = useSelector(selectTeachersFavorites);

  const isAuth = useSelector(selectIsAuth);

  const [favorite, setisLiked] = useState(false);

  useEffect(() => {
    const isFavorite = favTeachersArr.find(
      (teacher) => teacher.avatar_url === avatar_url
    );
    if (isFavorite !== undefined) {
      setisLiked(true);
    }
  }, [avatar_url, favTeachersArr]);

  const handleToggleFavorite = () => {
    setisLiked(!favorite);
    if (favorite) {
      dispatch(deleteFavorites(teacher));
    } else {
      dispatch(addFavorites(teacher));
    }
  };
  const hendeleClickclosed = () => {
    document.querySelector('body').classList.remove('modal-open');
    setShowModal(false);
  };

  const teacherDataForBook = { name, surname, avatar_url };

  return (
    <TeacherCardStyled>
      <TeacherImgThumb color={color}>
        <TeacherImg src={avatar_url} height="100px" width="100px" />
        <SvgOnl>
          <use href={sprite + '#icon-Group-82'}></use>
        </SvgOnl>
      </TeacherImgThumb>
      <InfoTeacherWrapper>
        <InfoTeacherHeader>
          <TeacherNameBox>
            <p>Languages</p>
            <TeachersName>
              {name} {surname}
            </TeachersName>
          </TeacherNameBox>
          <ul>
            <li>
              <BookIconStyled size={'16px'} /> Lessons online
            </li>
            <li>Lessons done: {lessons_done}</li>
            <li>
              <StarStyled /> Rating: {rating}
            </li>
            <li>
              Price / 1 hour: <span>{price_per_hour} $</span>
            </li>
          </ul>

          {isAuth && (
            <BtnFavorites type={'button'} onClick={handleToggleFavorite}>
              {favorite ? (
                <HeartFillStyled color={color} size={26} />
              ) : (
                <HeartLineStyled size={26} />
              )}
            </BtnFavorites>
          )}

          {!isAuth && (
            <BtnFavorites type={'button'} onClick={() => setShowModal(true)}>
              <HeartLineStyled size={26} />
            </BtnFavorites>
          )}
        </InfoTeacherHeader>
        <SpeaksStyled>
          Speaks: <span>{languages?.join(', ')}</span>
        </SpeaksStyled>
        <ConditionsStyled>
          Lesson Info:
          <span>{lesson_info}</span>
        </ConditionsStyled>
        <ConditionsStyled>
          Conditions:
          <span>{conditions}</span>
        </ConditionsStyled>
        {!isReadMore && (
          <ReadMoreBtn onClick={() => setIsReadMore(true)}>
            Read more
          </ReadMoreBtn>
        )}
        {isReadMore && (
          <>
            <TeacherDescr>{experience}</TeacherDescr>
            <FBList>
              {reviews.map((el, index) => (
                <FBItem key={index}>
                  <FBThumb>
                    <FBAvaThumb>
                      <FBAva>{el.reviewer_name.charAt(0).toUpperCase()}</FBAva>
                    </FBAvaThumb>
                    <FBAuthor>
                      <FBAuthorName>{el.reviewer_name}</FBAuthorName>
                      <span>
                        <StarStyled />
                        {el.reviewer_rating}.0
                      </span>
                    </FBAuthor>
                  </FBThumb>
                  <FBRew>{el.comment}</FBRew>
                </FBItem>
              ))}
            </FBList>
            {isReadMore && (
              <ReadMoreBtn onClick={() => setIsReadMore(false)}>
                Read less
              </ReadMoreBtn>
            )}
          </>
        )}
        <LevelsList>
          {levels.map((el, index) => (
            <LevelsItem
              key={index}
              className={el === Level ? 'selected' : ''}
              color={color}
            >
              {el}
            </LevelsItem>
          ))}
        </LevelsList>
        {isReadMore && (
          <TrialBtn
            color={color}
            onClick={
              isAuth ? () => setopenOrderModal(true) : () => setShowModal(true)
            }
            className="orderBtn"
          >
            Book trial lesson
          </TrialBtn>
        )}
        {openOrderModal && (
          <Modal onClose={setopenOrderModal} top={'d'} state={openOrderModal}>
            <BookForm
              color={color}
              setIsBookModalOpened={setopenOrderModal}
              teacherDataForBook={teacherDataForBook}
            ></BookForm>
          </Modal>
        )}
        {ShowModal && (
          <Modal onClose={setShowModal} state={ShowModal}>
            <AttentionWrapper>
              <AttentionIcon onClick={hendeleClickclosed}>
                <use href={sprite + '#icon-x'} />
              </AttentionIcon>
              <AttentionTitle>Attention</AttentionTitle>
              <AttentionText>
                We would like to remind you that certain functionality is
                available only to authorized users.If you have an account,
                please log in with your credentials. If you do not already have
                an account, you must register to access these features.
              </AttentionText>
              <BtnLoginAndRegister
                color={color}
                regis={setOnClose}
                log={setOnCloseLogin}
                ShowModal={setShowModal}
              />
            </AttentionWrapper>
          </Modal>
        )}
        {onClose && (
          <Modal onClose={setOnClose} state={onClose}>
            <Register color={color} onClose={setOnClose} />
          </Modal>
        )}
        {onCloseLogin && (
          <Modal onClose={setOnCloseLogin} state={onCloseLogin}>
            <Login color={color} onClose={setOnCloseLogin} />
          </Modal>
        )}
      </InfoTeacherWrapper>
    </TeacherCardStyled>
  );
};

export default TeacherCard;
