import { Navigate, Route, Routes } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
import { AppWrapper } from './App.styled';

import PrivateRoute from './routes/PrivateRoute';

import { getAllTeachers } from './redux/Teachers/TeachersOperations';

import { resetlimit } from './redux/Teachers/TeachersSlice';
import { useDispatch } from 'react-redux';
function App() {
  const [color, setColor] = useState(null);
  const dispatch = useDispatch();
  const colors = {
    Blue: 'Blue',
    LightPink: 'LightPink',
    Green: 'Green',
    Orange: 'Orange',
    Pink: 'Pink',
  };

  useEffect(() => {
    dispatch(resetlimit());
    dispatch(getAllTeachers(4));
  }, [dispatch]);

  useEffect(() => {
    setColor(
      Object.keys(colors)[
        Math.floor(Math.random() * Object.keys(colors).length)
      ]
    );
  }, []);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout color={color} />}>
          <Route index element={<Navigate to="Home" />} />
          <Route path="/Home" element={<HomePage color={color} />} />
          <Route path="/Teachers" element={<TeachersPage color={color} />} />
          <Route
            path="/Favorites"
            element={
              <PrivateRoute
                redirectTo="/"
                component={<FavoritesPage color={color} />}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
