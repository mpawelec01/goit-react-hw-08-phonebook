import { Box, Button, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
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
        addContact({
          name: newContactName,
          number: newContactNumber,
        })
      );
      form.reset();
    }
  };

  return (
    <Box
      display="flex"
      pt="10"
      flexDirection="column"
      maxW="300"
      justifyContent="flex-end"
    >
      <Heading mb="5" as="h2">
        Phonebook
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <Input
            mb="5"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            mb="5"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </form>
    </Box>
  );
};
