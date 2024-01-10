import { Box } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box w="900px">
      <AppBar />
      <Box h="100vh" bgColor="rgba(0,0,0,0.1)">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};
