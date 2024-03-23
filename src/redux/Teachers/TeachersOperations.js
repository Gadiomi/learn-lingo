import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get, limitToFirst, query } from 'firebase/database';
import { database } from '../../Firebase';

export const getAllTeachers = createAsyncThunk(
  'teachers/getAllTeachers',
  async (limit, thunkAPI) => {
    try {
      const snapshot = await get(query(ref(database), limitToFirst(limit)));

      if (snapshot.exists()) {
        const data = snapshot.val();

        const allTeachers = Object.values(data);

        return allTeachers;
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
