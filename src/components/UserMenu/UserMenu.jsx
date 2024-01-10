import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <Box display="flex" alignItems="center">
      <Text>Welcome, {userName}</Text>
      <Button
        border="1px solid white"
        bg="transparent"
        ml="25px"
        onClick={() => dispatch(logout())}
      >
        Log Out
      </Button>
    </Box>
  );
};
