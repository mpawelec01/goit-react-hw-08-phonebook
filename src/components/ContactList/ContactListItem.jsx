import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const [isEditting, setIsEditting] = useState(false);
  const handleEditContact = () => {
    setIsEditting(!isEditting);
  };
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={handleEditContact}>Edit</button>
      <button value={name} onClick={handleDelete}>
        Delete
      </button>
      {isEditting && <ContactEditor />}
    </li>
  );
};
