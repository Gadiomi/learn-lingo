import * as Yup from 'yup';

import {
  RegisterForm,
  RegisterInput,
  RegisterButton,
  RegisterTitle,
  RegisterText,
  RegisterValidation,
  RegisterInputValidation,
  RegisterShowPassword,
  RegisterSvgEye,
  RegisterSvgX,
  RegisterButtonCloseModal,
} from './RegisterForm.stuled';
import { useFormik } from 'formik';
import sprite from '../../../assets/sprite.svg';
import { signUp } from '../../../redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';

function Register({ onClose, color }) {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
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
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(signUp(values));
      document.querySelector('body').classList.remove('modal-open');
    },
  });
  {
    return (
      <RegisterForm onSubmit={formik.handleSubmit}>
        <RegisterTitle>Registration</RegisterTitle>
        <RegisterText>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </RegisterText>
        <RegisterInputValidation>
          <RegisterInput
            id="userName"
            name="userName"
            type="text"
            placeholder="Name"
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
              <RegisterValidation>{formik.errors.userName}</RegisterValidation>
            </>
          ) : null}
        </RegisterInputValidation>
        <RegisterInputValidation>
          <RegisterInput
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={`${
              formik.touched.email && formik.errors.email ? 'is-invalid' : ''
            }`}
            // isValidating={!formik.touched.email || !formik.errors.email}
          />

          {formik.touched.email && formik.errors.email ? (
            <>
              <RegisterValidation>{formik.errors.email}</RegisterValidation>
            </>
          ) : null}
        </RegisterInputValidation>
        <RegisterInputValidation>
          <RegisterInput
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
          <RegisterShowPassword
            type="button"
            onClick={() => {
              formik.setFieldTouched('password', false);
              formik.setFieldValue('showPassword', !formik.values.showPassword);
            }}
          >
            {formik.values.showPassword ? (
              <RegisterSvgEye>
                <use href={sprite + '#iconEyeOpen'}></use>
              </RegisterSvgEye>
            ) : (
              <RegisterSvgEye>
                <use href={sprite + '#iconEyeClosed'}></use>
              </RegisterSvgEye>
            )}
          </RegisterShowPassword>
          {formik.touched.password && formik.errors.password ? (
            <RegisterValidation>{formik.errors.password}</RegisterValidation>
          ) : null}
        </RegisterInputValidation>

        <RegisterButton color={color} type="submit">
          Sign Up
        </RegisterButton>

        <RegisterButtonCloseModal onClick={hendelClikClosed}>
          <RegisterSvgX>
            <use href={sprite + '#icon-x'}></use>
          </RegisterSvgX>
        </RegisterButtonCloseModal>
      </RegisterForm>
    );
  }
}

export default Register;
