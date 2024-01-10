import { useSelector } from 'react-redux';
import { NavLink as ReactRouterLink } from 'react-router-dom';
import { Box, Link } from '@chakra-ui/react';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box>
      <Link _activeLink={{ color: 'blue.500' }} as={ReactRouterLink} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link
          _activeLink={{ color: 'blue.500' }}
          as={ReactRouterLink}
          to="/contacts"
          ml="25px"
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};
