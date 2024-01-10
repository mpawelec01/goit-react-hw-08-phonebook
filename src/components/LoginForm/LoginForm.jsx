import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { login } from '../../redux/auth/operations';
import { Navigate } from 'react-router-dom';
import { Button, FormLabel, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <FormLabel htmlFor="loginEmail">Email</FormLabel>
        <Input marginBottom="5" name="email" id="loginEmail" type="email" />
        <FormLabel htmlFor="loginPassword">Password</FormLabel>
        <Input
          marginBottom="5"
          name="password"
          id="loginPassword"
          type="password"
          autoComplete="off"
        />
        <Button w="100%" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};
