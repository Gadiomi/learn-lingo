import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65ba8fa5b4d53c0665533439.mockapi.io/api/car';

export const fetchCar = createAsyncThunk(
  '/',
  async (limit, { rejectValue }) => {
    try {
      const res = await axios.get(`/?page=1&limit=${limit}`);
      return res.data;
    } catch (error) {
      return rejectValue(error.message);
    }
  }
);

export const fetchCarAll = createAsyncThunk('/all', async (rejectValue) => {
  try {
    const res = await axios.get(`/`);
    return res.data;
  } catch (error) {
    return rejectValue(error.message);
  }
});
