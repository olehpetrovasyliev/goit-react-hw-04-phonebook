import { useState } from 'react';
import { StyledAddForm } from './AddForm.styled';
// import propTypes from 'prop-types';
import { AddContactInput } from './AddFormInpt/AddFormInput';
import { AddContactBtn } from './AddFormInpt/AddFormInput.styled';
import { INIT_STATE } from 'INIT_STATE';

export const AddContactForm = ({ onSubmit }) => {
  // const [name, setName] = useState(' ');
  // const [number, setNumber] = useState(' ');
  const [userData, setUserData] = useState({ ...INIT_STATE });
  const { name, number } = userData;
  const handleChange = e => {
    // console.log(1);
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
    console.log(userData);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(1);
    onSubmit(userData);
    console.log(1);
    setUserData({ ...INIT_STATE });
  };
  return (
    <StyledAddForm onSubmit={handleSubmit}>
      <label>
        Name
        <AddContactInput
          name={'name'}
          type={'text'}
          validator={
            "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          }
          key={crypto.randomUUID}
          title={
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          }
          cb={handleChange}
          value={name}
        />
      </label>
      <label>
        Number
        <AddContactInput
          name={'number'}
          type={'tel'}
          validator={
            '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}'
          }
          title={
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          }
          cb={handleChange}
          value={number}
        />
      </label>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </StyledAddForm>
  );
};
