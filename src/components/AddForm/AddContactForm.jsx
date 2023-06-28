import { StyledAddForm } from './AddForm.styled';
// import propTypes from 'prop-types';
import { AddContactInput } from './AddFormInpt/AddFormInput';
import { AddContactBtn } from './AddFormInpt/AddFormInput.styled';
import { Component } from 'react';
// import { Phonebook } from 'components/Phonebook/Phonebook';

export class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    console.log(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <StyledAddForm onSubmit={this.handleSubmit}>
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
            cb={this.handleChange}
            value={this.state.name}
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
            key={crypto.randomUUID}
            title={
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            }
            cb={this.handleChange}
            value={this.state.number}
          />
        </label>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </StyledAddForm>
    );
  }
}
