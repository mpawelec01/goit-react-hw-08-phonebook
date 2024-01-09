import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

export const ContactEditor = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleEdit = e => {
    e.preventDefault();
    const form = e.target;
    const newContactName = form.elements.name.value;
    const newContactNumber = form.elements.number.value;
    const isContactInList = contacts.some(element => {
      if (element.name === newContactName) {
        return true;
      }
      return false;
    });
    if (isContactInList) {
      alert(`${newContactName} is already in contacts.`);
    } else {
      dispatch(
        editContact({
          name: newContactName,
          number: newContactNumber,
        })
      );
      form.reset();
    }
  };

  return (
    <form onSubmit={handleEdit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Edit contact</button>
      <button>Cancel</button>
    </form>
  );
};
