// };
import { useState, useEffect } from 'react';

import { Filter } from 'components/Filter/Filter';

import { AddContactForm } from 'components/AddForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
// 1/

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contactsArr')) ?? []
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    window.localStorage.setItem('contactsArr', JSON.stringify(contacts));
  }, [contacts]);
  const handleSubmit = ({ name, number }) => {
    contacts.some(contact => contact.name === name)
      ? alert('Contact already exists')
      : setContacts(prev => [
          ...prev,
          {
            name,
            number,
            id: crypto.randomUUID(),
          },
        ]);
  };
  const delContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };
  const filterContacts = e => {
    setFilter(e.target.value);
  };
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm onSubmit={handleSubmit} />
      {contacts.length === 0 ? (
        <h2>No contacts yet</h2>
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter text={'text'} value={filter} cb={filterContacts} />

          <ContactsList
            arr={getFilteredContacts()}
            key={crypto.randomUUID}
            cb={delContact}
          />
        </>
      )}
    </>
  );
};
