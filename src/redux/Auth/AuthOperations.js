import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { auth } from '../../Firebase';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ name, email, password }, thunkApi) => {
    try {
      const userFirebase = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userFirebase.user;

      await updateProfile(userData, { displayName: name });

      return {
        isAuthenticated: true,
        email: userData.email,
      };
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, thunkApi) => {
    try {
      const userFirebase = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userFirebase.user;

      return {
        isAuthenticated: true,
        name: userData.displayName,
        email: userData.email,
      };
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await signOut(auth);
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});
