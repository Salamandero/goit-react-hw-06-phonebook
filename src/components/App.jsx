import { MainWrapper, HeaderPhone, HeaderContacts } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  return (
    <MainWrapper>
      <HeaderPhone>Phonebook</HeaderPhone>
      <ContactForm />

      <HeaderContacts>Contacts</HeaderContacts>
      <Filter />

      <ContactList />
    </MainWrapper>
  );
};

export default App;
