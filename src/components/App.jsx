// import { Phonebook } from './Phonebook/Phonebook';

// export const App = () => {
//   return <Phonebook />;
// };
import { useState, useEffect, useRef } from 'react';

import { Filter } from 'components/Filter/Filter';

import { AddContactForm } from 'components/AddForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
// 1/
export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contactsArr')) ?? []
  );
  const [filter, setFilter] = useState('');
  // const isFirstRender = useRef(true);
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     console.log('hi');

  //     isFirstRender.current = false;
  //     // return;
  //   } else {
  //     console.log('hello');
  //   }
  // }, [contacts]);
  const updateLocalStorage = () =>
    window.localStorage.setItem('contactsArr', JSON.stringify(contacts));
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
    updateLocalStorage();
  };
  const delContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
    updateLocalStorage();
  };
  const filterContacts = e => {
    const { value } = e.target;
    console.log(value);
    setFilter(prev => ({ ...prev, value }));
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
          <Filter
            // filter={filter}
            text={'text'}
            value={filter}
            cb={filterContacts}
          />

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

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   componentDidMount() {
//     const data = JSON.parse(localStorage.getItem('contactsArr')) ?? [];
//     this.setState({ contacts: data });
//   }

//   componentDidUpdate(_, prewState) {
//     if (this.state.contacts !== prewState.contacts) {
//       window.localStorage.setItem(
//         'contactsArr',
//         JSON.stringify(this.state.contacts)
//       );
//     }
//   }

//   handleSubmit = ({ name, number }) => {
//     this.state.contacts.some(contact => contact.name === name)
//       ? alert('Contact already exists')
//       : this.setState(prewState => ({
//           contacts: [
//             ...prewState.contacts,
//             {
//               name,
//               number,
//               id: crypto.randomUUID(),
//             },
//           ],
//         }));
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   filterContacts = e => {
//     e.preventDefault();
//     const value = e.target.value;
//     this.setState({ filter: value });
//   };
//   delContact = id => {
//     this.setState(prewState => ({
//       contacts: prewState.contacts.filter(contact => contact.id !== id),
//     }));
//   };
//   getFilteredContacts = () => {
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };
//   render() {
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <AddContactForm onSubmit={this.handleSubmit} />
//         {this.state.contacts.length === 0 ? (
//           <h2>No contacts yet</h2>
//         ) : (
//           <>
//             <h2>Contacts</h2>
//             <Filter
//               // filter={'filter'}
//               text={'text'}
//               value={this.state.filter}
//               cb={this.filterContacts}
//             />

//             <ContactsList
//               arr={this.state.contacts}
//               key={crypto.randomUUID}
//               cb={this.delContact}
//             />
//           </>
//         )}
//       </>
//     );
//   }
// }
