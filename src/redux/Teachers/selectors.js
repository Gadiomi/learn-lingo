export const selectTeachers = (state) => state.teachers.teachers;
export const selectLoading = (state) => state.teachers.isLoading;
export const selectTeachersFavorites = (state) =>
  state.teachers.teachersFavorites;
export const selectFilterFavoritesTeachers = (state) =>
  state.teachers.filterFavoritesTeachers;
export const selectLimit = (state) => state.teachers.limit;
export const selectTeachersFilter = (state) => state.teachers.teachersFilter;
