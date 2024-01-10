import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ component: Component, path }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Component />;
  }
  return <Navigate to={path} />;
};

export default PrivateRoute;
