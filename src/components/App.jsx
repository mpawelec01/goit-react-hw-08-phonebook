import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { fetchContacts } from '../redux/contacts/operations';
import { currentUser } from '../redux/auth/operations';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';

import { Contacts } from 'pages/Contacts/Contacts';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';

import { Layout } from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  const isRefreshing = useSelector(selectIsRefreshing);
  if (isRefreshing) {
    return <div>Refreshing...</div>;
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      maxW="100%"
      h="100%"
      bgGradient="linear(62deg, #8EC5FC, #E0C3FC)"
      fontSize={25}
      fontFamily="monospace"
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={<RestrictedRoute component={Register} path="/contacts" />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={Login} path="/contacts" />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts} path="/login" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Box>
  );
};
