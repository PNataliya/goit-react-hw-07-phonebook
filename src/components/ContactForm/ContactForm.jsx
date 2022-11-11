import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactApi';
import {
  FormDataInput,
  EntryFieldLabel,
  InputName,
  InputArea,
  ButtonSubmit,
} from './ContactForm.styled';

import { nanoid } from 'nanoid';
import { Report } from 'notiflix';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

  const { data: contacts } = useGetContactsQuery();
  const [newContact] = useAddContactMutation();

  const onSubmitForm = async e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Report.warning(
        `${name}`,
        'This user is already in the contact list.',
        'OK'
      );
      return;
    }
    await newContact({ id: nanoid(), name, number });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormDataInput onSubmit={onSubmitForm}>
      <EntryFieldLabel>
        <InputName>Name</InputName>
        <InputArea
          onChange={onChangeName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </EntryFieldLabel>
      <EntryFieldLabel>
        <InputName>Number</InputName>
        <InputArea
          onChange={onChangeNumber}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </EntryFieldLabel>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </FormDataInput>
  );
};
