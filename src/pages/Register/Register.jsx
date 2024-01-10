import { Box } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

export const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Box display="flex" justifyContent="center" paddingTop="80px">
        <RegisterForm />
      </Box>
    </div>
  );
};
