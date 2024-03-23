import { createSlice } from '@reduxjs/toolkit';
import { fetchCar, fetchCarAll } from './operation';

const initialState = {
  status: null,
  cars: [],
  carsFilter: null,
  carsFilterFavorites: null,
  carsAll: [],
  favorites: [],
  limit: 11,
};

export const carsSlice = createSlice({
  name: 'car',
  initialState,
  extraReducers: (build) => {
    build
      .addCase(fetchCar.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;
      })
      .addCase(fetchCar.rejected, (state, action) => {
        state.status = 'failed';
        state.cars = [];
        state.error = action.error;
      })
      .addCase(fetchCarAll.fulfilled, (state, action) => {
        state.carsAll = action.payload;
      });
  },

  reducers: {
    addFavorites(state, action) {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
    deleteFavorites(state, action) {
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    filterCars(state, action) {
      return {
        ...state,
        carsFilter: action.payload,
      };
    },
    carsFilterFavorites(state, action) {
      return {
        ...state,
        carsFilterFavorites: action.payload,
      };
    },
    filterReset(state) {
      return {
        ...state,
        carsFilter: null,
      };
    },
    filterResetFavorites(state) {
      return {
        ...state,
        carsFilterFavorites: null,
      };
    },
    setLimit(state) {
      return {
        ...state,
        limit: state.limit + 12,
      };
    },
  },
});

export const {
  addFavorites,
  deleteFavorites,
  filterCars,
  carsFilterFavorites,
  filterReset,
  filterResetFavorites,
  setLimit,
} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
