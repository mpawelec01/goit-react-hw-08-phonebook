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
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+([ -'][a-zA-Zа-яА-Я]+)*$"
        placeholder="Type to search"
      />
    </label>
  );
};
