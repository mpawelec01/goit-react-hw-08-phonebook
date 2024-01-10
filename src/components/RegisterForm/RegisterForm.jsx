import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { Button, FormLabel, Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegistration = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      register({
        name,
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
      <form onSubmit={handleRegistration}>
        <FormLabel htmlFor="registrationName">Username</FormLabel>
        <Input marginBottom="5" name="username" id="registrationName" />
        <FormLabel htmlFor="registrationEmail">Email</FormLabel>
        <Input
          marginBottom="5"
          name="email"
          type="email"
          id="registrationEmail"
        />
        <FormLabel htmlFor="registrationPassword">Password</FormLabel>
        <Input
          marginBottom="5"
          name="password"
          type="password"
          autoComplete="off"
          id="registrationPassword"
        />
        <Button w="100%" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};
