import { Box, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setFilter } from '../../redux/filter/slice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const searchTerm = e.target.value;
    dispatch(setFilter(searchTerm));
  };

  return (
    <Box display="flex" mt="10" flexDirection="column" maxW="300">
      <Heading mb="5" as="h3" size="1xl">
        Contacts
      </Heading>
      <FormLabel>
        Find contacts by name
        <Input
          mt="5"
          type="text"
          value={filter}
          onChange={handleFilterChange}
          pattern="^[a-zA-Zа-яА-Я]+([ -'][a-zA-Zа-яА-Я]+)*$"
          placeholder="Type to search"
        />
      </FormLabel>
    </Box>
  );
};
