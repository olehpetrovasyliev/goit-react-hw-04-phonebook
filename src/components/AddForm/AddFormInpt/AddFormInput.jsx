import { AddFormStyledInput } from './AddFormInput.styled';
import propTypes from 'prop-types';

export const AddContactInput = ({
  type,
  name,
  cb,
  validator,
  id,
  title,
  value,
}) => {
  return (
    <AddFormStyledInput
      type={type}
      name={name}
      onChange={cb}
      pattern={validator}
      key={id}
      title={title}
      required
      value={value}
    />
  );
};

AddContactInput.propTypes = {
  type: propTypes.string,
  name: propTypes.string,
  cb: propTypes.func,
  validator: propTypes.string,
  id: propTypes.string,
  title: propTypes.string,
  value: propTypes.string,
};
