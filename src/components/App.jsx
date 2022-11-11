import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AiOutlineRead } from 'react-icons/ai';
import { useGetContactsQuery } from 'redux/contactApi';
import { Container, ContainerTitle, SubHeading, IconTitle } from './App.styled';

export const App = () => {
  const { data } = useGetContactsQuery();
  return (
    <Container>
      <ContainerTitle>
        Phonebook
        <IconTitle>
          <AiOutlineRead />
        </IconTitle>
      </ContainerTitle>
      <ContactForm />

      <SubHeading>Contacts</SubHeading>
      <Filter />
      {data ? <ContactList /> : <p>Contact list is empty.</p>}
    </Container>
  );
};
