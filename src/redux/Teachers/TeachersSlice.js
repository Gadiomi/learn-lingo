import { createSlice } from '@reduxjs/toolkit';
import { getAllTeachers } from './TeachersOperations';

const initialState = {
  teachers: [],
  teachersFilter: null,
  teachersFavorites: [],
  filterFavoritesTeachers: null,
  isLoading: false,
  limit: 3,
};

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.teachers = payload;
      })
      .addCase(getAllTeachers.rejected, (state) => {
        state.isLoading = false;
      });
  },
  reducers: {
    addFavorites(state, action) {
      state.teachersFavorites.push(action.payload);
    },
    deleteFavorites(state, action) {
      const updatedFavorites = state.teachersFavorites.filter(
        (item) => item.avatar_url !== action.payload.avatar_url
      );
      state.teachersFavorites = updatedFavorites;
    },
    filterTeachers(state, action) {
      return {
        ...state,
        teachersFilter: action.payload,
      };
    },
    filterFavoritesTeachers(state, action) {
      return {
        ...state,
        filterFavoritesTeachers: action.payload,
      };
    },
    resetFilter(state) {
      return {
        ...state,
        teachersFilter: null,
      };
    },
    resetFavoritesFilter(state) {
      return {
        ...state,
        filterFavoritesTeachers: null,
      };
    },
    setLimit(state) {
      return {
        ...state,
        limit: state.limit + 3,
      };
    },
    resetlimit(state) {
      return {
        ...state,
        limit: 3,
      };
    },
  },
});

export const {
  addFavorites,
  deleteFavorites,
  filterTeachers,
  resetFilter,
  filterFavoritesTeachers,
  resetFavoritesFilter,
  setLimit,
  resetlimit,
} = teachersSlice.actions;

export const teachersReducer = teachersSlice.reducer;
