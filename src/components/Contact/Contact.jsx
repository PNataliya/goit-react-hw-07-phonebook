import PropTypes from 'prop-types';
import { FaTrash, FaUserTie } from 'react-icons/fa';

import { ContactData, Number, Button, Icon } from './Contact.styled';

export const Contact = ({ contactID, name, number, onDeleteContact }) => {
  console.log('contactID', contactID);
  return (
    <>
      <ContactData>
        <Icon>
          <FaUserTie />
        </Icon>
        <p>{name}</p>
      </ContactData>
      <ContactData>
        <Number>{number}</Number>
        <Button type="button" onClick={() => onDeleteContact(contactID)}>
          <FaTrash />
        </Button>
      </ContactData>
    </>
  );
};

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
