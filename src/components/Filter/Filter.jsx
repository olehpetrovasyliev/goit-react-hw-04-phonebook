import propTypes from 'prop-types';

const { FilterInput } = require('./Filter.styled');

export const Filter = ({ name, type, cb, value }) => {
  return (
    <FilterInput
      className="filter_input"
      name={name}
      type={type}
      onChange={cb}
      value={value}
    />
  );
};

Filter.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  cb: propTypes.func,
  value: propTypes.string,
};
