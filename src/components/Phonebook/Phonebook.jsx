// import { Component, React } from 'react';

// import { Filter } from 'components/Filter/Filter';

// import { AddContactForm } from 'components/AddForm/AddContactForm';
// import { ContactsList } from 'components/ContactsList/ContactsList';

// export class Phonebook extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

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
//               filter={'filter'}
//               text={'text'}
//               value={this.state.filter}
//               cb={this.filterContacts}
//             />
//             {/* {this.getFilteredContacts().map(({ name, id, number }) => (
//               <Contact key={id}>
//                 {name}: {number}
//                 <DelBtn type="button" onClick={() => this.delContact(id)}>
//                   Delete
//                 </DelBtn>
//               </Contact>
//             ))} */}
//             <ContactsList
//               arr={this.getFilteredContacts()}
//               key={crypto.randomUUID}
//               cb={this.delContact}
//             />
//           </>
//         )}
//       </>
//     );
//   }
// }
