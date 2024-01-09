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
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
