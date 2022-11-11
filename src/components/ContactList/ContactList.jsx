import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactApi';
import { AddedСontacts } from './ContactList.styled';

export const ContactList = () => {
  const { data } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const [deleteContact] = useDeleteContactMutation();
  const onDeleteContact = id => deleteContact(id);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactsList = filteredContacts();

  return (
    <ul>
      {filteredContactsList.map(({ id, name, number }) => {
        return (
          <AddedСontacts key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
              contactID={id}
            />
          </AddedСontacts>
        );
      })}
    </ul>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
};
