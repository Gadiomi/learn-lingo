import {
  TeacherAuthor,
  TeacherAuthorName,
  TeacherAva,
  TeacherAvaThumb,
  TeacherThumb,
  TeacherYourAuthor,
  FormFields,
  RadioGroup,
  RadioInput,
  RadioLabel,
  RadioTitle,
  RegisterFormStyled,
  InputWraper,
  Caption,
  ButtonContainer,
  SupportingText,
  Validation,
  Button,
  ButonClosedModal,
  Svgx,
} from './BookForm.styled';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import sprite from '../../assets/sprite.svg';

const BookForm = ({ setIsBookModalOpened, teacherDataForBook, color }) => {
  const { name, surname, avatar_url } = teacherDataForBook;

  const hendelClikClosed = () => {
    setIsBookModalOpened(false);
    document.querySelector('body').classList.remove('modal-open');
  };

  const schema = Yup.object({
    userName: Yup.string()
      .min(2, 'Name must be at least 2 characters long')
      .max(16, 'Name can be at most 16 characters long')
      .matches(
        /^[a-zA-Z\s]+$/,
        'Name must contain only English letters and spaces'
      )
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid Email format'
      )
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^\+\d{12}$/, 'Phone must have + and length 12')
      .min(13, 'Phone Too Short!')
      .max(13, 'Phone Too long')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      phone: '',
    },
    validationSchema: schema,
    onSubmit: async () => {
      document.querySelector('body').classList.remove('modal-open');
      setIsBookModalOpened(false);
    },
  });
  return (
    <RegisterFormStyled onSubmit={formik.handleSubmit}>
      <Caption>Book trial lesson</Caption>
      <SupportingText>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </SupportingText>

      <TeacherThumb>
        <TeacherAvaThumb>
          <TeacherAva src={avatar_url} height="46px" width="46px" />
        </TeacherAvaThumb>
        <TeacherAuthor>
          <TeacherYourAuthor>Your teacher</TeacherYourAuthor>
          <TeacherAuthorName>{`${name} ${surname}`}</TeacherAuthorName>
        </TeacherAuthor>
      </TeacherThumb>

      <RadioTitle>What is your main reason for learning English?</RadioTitle>
      <RadioGroup>
        <RadioLabel>
          <RadioInput
            color={color}
            type="radio"
            name="mainReason"
            value="Career and business"
          />
          Career and business
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            color={color}
            type="radio"
            name="mainReason"
            value="Lesson for kids"
          />
          Lesson for kids
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            color={color}
            type="radio"
            name="mainReason"
            value="Living abroad"
          />
          Living abroad
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            color={color}
            type="radio"
            name="mainReason"
            value="Exams and coursework"
          />
          Exams and coursework
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            color={color}
            type="radio"
            name="mainReason"
            value="Culture, travel or hobby"
          />
          Culture, travel or hobby
        </RadioLabel>
      </RadioGroup>
      <FormFields>
        <InputWraper>
          <input
            type="text"
            name="userName"
            placeholder="Full Name"
            onChange={formik.handleChange}
            value={formik.values.userName}
            className={`${
              formik.touched.userName && formik.errors.userName
                ? 'is-invalid'
                : ''
            }`}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <>
              <Validation>{formik.errors.userName}</Validation>
            </>
          ) : null}
        </InputWraper>

        <InputWraper>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={`${
              formik.touched.email && formik.errors.email ? 'is-invalid' : ''
            }`}
          />
          {formik.touched.email && formik.errors.email ? (
            <>
              <Validation>{formik.errors.email}</Validation>
            </>
          ) : null}
        </InputWraper>
        <InputWraper>
          <input
            type="phone"
            name="phone"
            placeholder="Phone number"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className={`${
              formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''
            }`}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <>
              <Validation>{formik.errors.phone}</Validation>
            </>
          ) : null}
        </InputWraper>
      </FormFields>
      <ButtonContainer>
        <Button color={color} type="submit">
          Book
        </Button>
      </ButtonContainer>
      <ButonClosedModal onClick={hendelClikClosed}>
        <Svgx>
          <use href={sprite + '#icon-x'}></use>
        </Svgx>
      </ButonClosedModal>
    </RegisterFormStyled>
  );
};

export default BookForm;
