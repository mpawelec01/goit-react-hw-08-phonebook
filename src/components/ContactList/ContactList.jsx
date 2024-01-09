import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { selectVisibleContacts } from '../../redux/filter/selectors';
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <ul>
      {filteredContacts?.map(item => (
        <ContactListItem
          key={item.id}
          name={item.name}
          number={item.number}
          id={item.id}
        />
      ))}
      {isLoading && !error && <p>Updating...</p>}
    </ul>
  );
};
