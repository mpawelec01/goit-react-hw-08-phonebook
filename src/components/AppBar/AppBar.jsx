import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Box } from '@chakra-ui/react';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      boxShadow="8px 8px 24px 0px rgba(66, 68, 90, 1)"
      borderTop="none"
      borderBottomRadius="5px"
      p="20px 25px"
      bgColor="rgba(0,0,0,0.2)"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
