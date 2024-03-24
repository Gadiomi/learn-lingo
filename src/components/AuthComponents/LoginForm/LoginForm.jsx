import * as Yup from 'yup';
Login;
import {
  LoginRegisterForm,
  LoginInput,
  LoginButton,
  LoginTitle,
  LoginText,
  LoginValidation,
  LoginInputValidation,
  LoginShowPassword,
  LoginSvgEye,
  LoginSvgX,
  LoginButtonCloseModal,
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
      <LoginRegisterForm onSubmit={formik.handleSubmit}>
        <LoginTitle>Log In</LoginTitle>
        <LoginText>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </LoginText>
        <LoginInputValidation>
          <LoginInput
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
              <LoginValidation>{formik.errors.email}</LoginValidation>
            </>
          ) : null}
        </LoginInputValidation>
        <LoginInputValidation>
          <LoginInput
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
          <LoginShowPassword
            type="button"
            onClick={() => {
              formik.setFieldTouched('password', false);
              formik.setFieldValue('showPassword', !formik.values.showPassword);
            }}
          >
            {formik.values.showPassword ? (
              <LoginSvgEye>
                <use href={sprite + '#iconEyeOpen'}></use>
              </LoginSvgEye>
            ) : (
              <LoginSvgEye>
                <use href={sprite + '#iconEyeClosed'}></use>
              </LoginSvgEye>
            )}
          </LoginShowPassword>
          {formik.touched.password && formik.errors.password ? (
            <LoginValidation>{formik.errors.password}</LoginValidation>
          ) : null}
        </LoginInputValidation>

        <LoginButton color={color} type="submit">
          Log In
        </LoginButton>

        <LoginButtonCloseModal onClick={hendelClikClosed}>
          <LoginSvgX>
            <use href={sprite + '#icon-x'}></use>
          </LoginSvgX>
        </LoginButtonCloseModal>
      </LoginRegisterForm>
    );
  }
}

export default Login;
