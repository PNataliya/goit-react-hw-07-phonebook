import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import { FindLabel, PromptFind, FindInput } from './Filter.styled.jsx';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <FindLabel>
      <PromptFind>Find contacts by name</PromptFind>
      <FindInput
        type="text"
        name="filter"
        onChange={changeFieldFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </FindLabel>
  );
};

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
