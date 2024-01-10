import { Box } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box display="flex" justifyContent="center" paddingTop="80px">
        <LoginForm />
      </Box>
    </div>
  );
};

export default Login;
