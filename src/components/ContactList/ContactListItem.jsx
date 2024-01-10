import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import { Box, Button, ListItem, Text } from '@chakra-ui/react';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const [isEditting, setIsEditting] = useState(false);
  const handleEditContact = () => {
    setIsEditting(!isEditting);
  };
  return (
    <ListItem listStyleType="none" ml="-6" fontSize={20}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Text>
            {name}: {number}
          </Text>
          <Button ml="5" maxW="50" fontSize={12} onClick={handleEditContact}>
            Edit
          </Button>
          <Button
            ml="5"
            maxW="50"
            fontSize={12}
            value={name}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Box>
        {isEditting && (
          <Box>
            <ContactEditor
              id={id}
              editClose={setIsEditting}
              name={name}
              number={number}
            />
            <Button
              mt="3"
              type="button"
              fontSize={12}
              onClick={handleEditContact}
            >
              Cancel edits
            </Button>
          </Box>
        )}
      </Box>
    </ListItem>
  );
};
