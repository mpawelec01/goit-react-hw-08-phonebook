import { Box, Button, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

export const ContactEditor = ({ id, editClose, name, number }) => {
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
          id: id,
          name: newContactName,
          number: newContactNumber,
        })
      );
      form.reset();
      editClose();
    }
  };

  return (
    <Box display="flex">
      <form onSubmit={handleEdit}>
        <FormLabel>
          Name
          <Input
            mb="3"
            type="text"
            name="name"
            defaultValue={name}
            pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            mb="3"
            type="tel"
            name="number"
            defaultValue={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <Button type="submit" fontSize={12} maxW="100">
          Confirm edits
        </Button>
      </form>
    </Box>
  );
};
