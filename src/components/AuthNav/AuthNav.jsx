import { NavLink as ReactRouterLink } from 'react-router-dom';
import { Box, Link } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Box>
      <Link
        _activeLink={{ color: 'blue.500' }}
        as={ReactRouterLink}
        to="/register"
      >
        Register
      </Link>
      <Link
        _activeLink={{ color: 'blue.500' }}
        as={ReactRouterLink}
        to="/login"
        ml="25px"
      >
        Log In
      </Link>
    </Box>
  );
};
