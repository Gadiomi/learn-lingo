import * as Yup from 'yup';

import {
  RegisterForm,
  Input,
  Button,
  Title,
  Text,
  Validation,
  InputValidation,
  ShowPassword,
  SvgEye,
  SvgX,
  ButtonCloseModal,
} from './LoginForm.stuled';
import { useFormik } from 'formik';
import sprite from '../../../assets/sprite.svg';
import { signIn } from '../../../redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';

function Login({ onClose, color }) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid Email format'
      )
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .max(16, 'Password can be at most 16 characters long')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        'Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter'
      )
      .required('Password is required'),
  });

  const hendelClikClosed = () => {
    onClose(false);
    document.querySelector('body').classList.remove('modal-open');
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (vasues) => {
      await dispatch(signIn(vasues));
      document.querySelector('body').classList.remove('modal-open');
    },
  });
  {
    return (
      <RegisterForm onSubmit={formik.handleSubmit}>
        <Title>Log In</Title>
        <Text>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </Text>
        <InputValidation>
          <Input
            id="email"
            name="email"
            type="text"
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
        </InputValidation>
        <InputValidation>
          <Input
            id="password"
            name="password"
            type={formik.values.showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className={`${
              formik.touched.password && formik.errors.password
                ? 'is-invalid'
                : ''
            }`}
          />
          <ShowPassword
            type="button"
            onClick={() => {
              formik.setFieldTouched('password', false);
              formik.setFieldValue('showPassword', !formik.values.showPassword);
            }}
          >
            {formik.values.showPassword ? (
              <SvgEye>
                <use href={sprite + '#iconEyeOpen'}></use>
              </SvgEye>
            ) : (
              <SvgEye>
                <use href={sprite + '#iconEyeClosed'}></use>
              </SvgEye>
            )}
          </ShowPassword>
          {formik.touched.password && formik.errors.password ? (
            <Validation>{formik.errors.password}</Validation>
          ) : null}
        </InputValidation>

        <Button color={color} type="submit">
          Log In
        </Button>

        <ButtonCloseModal onClick={hendelClikClosed}>
          <SvgX>
            <use href={sprite + '#icon-x'}></use>
          </SvgX>
        </ButtonCloseModal>
      </RegisterForm>
    );
  }
}

export default Login;
