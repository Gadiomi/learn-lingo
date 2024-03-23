import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { signUp, signIn, logOut } from './AuthOperations';

const initialState = {
  name: '',
  email: '',
  isAuth: false,
  error: null,
  loading: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (store) => {
        store.error = null;
        store.loading = true;
      })
      .addCase(signUp.fulfilled, (store, { payload }) => {
        const { email, userName } = payload;
        store.name = userName || '';
        store.email = email;
        store.error = null;
        store.loading = false;
        store.isAuth = true;
      })
      .addCase(signUp.rejected, (store, { payload }) => {
        store.error = payload;
        store.loading = false;
        store.isAuth = false;
        Notify.failure(payload);
      })
      .addCase(signIn.pending, (store) => {
        store.error = null;
        store.loading = true;
      })
      .addCase(signIn.fulfilled, (store, { payload }) => {
        const { email, name } = payload;
        store.name = name;
        store.email = email;
        store.error = null;
        store.loading = false;
        store.isAuth = true;
      })
      .addCase(signIn.rejected, (store, { payload }) => {
        store.error = payload;
        store.loading = false;
        store.isAuth = false;
        Notify.failure('email or password is invalid');
      })
      .addCase(logOut.pending, (store) => {
        store.error = null;
        store.loading = true;
      })
      .addCase(logOut.fulfilled, (store) => {
        store.name = '';
        store.email = '';
        store.error = null;
        store.loading = false;
        store.isAuth = false;
      })
      .addCase(logOut.rejected, (store, { payload }) => {
        store.error = payload;
        store.loading = false;
        store.isAuth = false;
        store.name = '';
        store.email = '';
      });
  },
});

export const AuthSliceReducer = AuthSlice.reducer;
