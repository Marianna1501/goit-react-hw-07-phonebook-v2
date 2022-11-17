import ContactForm from './components/Form/ContactsForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import {
  useDispatch
} from 'react-redux';
import { useEffect } from 'react';
 

import Container from './App.styled';


export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
