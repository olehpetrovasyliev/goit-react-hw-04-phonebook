import {
  ContactsListWrapper,
  DelBtnStyled,
  StyledContact,
} from './ContactsList.styled';
import propTypes from 'prop-types';

export const ContactsList = ({ arr, cb }) => {
  return (
    <ContactsListWrapper>
      {arr.map(li => (
        <StyledContact id={li.id}>
          {li.name}:{li.number}
          <DelBtnStyled onClick={() => cb(li.id)}>Delete</DelBtnStyled>
        </StyledContact>
      ))}
    </ContactsListWrapper>
  );
};

ContactsList.propTypes = {
  arr: propTypes.arrayOf(propTypes.objectOf(propTypes.string)),
  cb: propTypes.func,
};
