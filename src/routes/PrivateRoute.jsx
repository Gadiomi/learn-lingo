import { selectIsAuth } from '../redux/Auth/selectors.js';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, redirectTo }) {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? Component : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
