import { Box } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';

export const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Box ml="25">
        <ContactForm />
        <Filter />
        <ContactList />
      </Box>
    </div>
  );
};
