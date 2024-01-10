import { Box, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingTop={80}
      >
        <Text textTransform="uppercase" fontSize={36}>
          Phonebook manager welcome page 📗
        </Text>
      </Box>
    </div>
  );
};
