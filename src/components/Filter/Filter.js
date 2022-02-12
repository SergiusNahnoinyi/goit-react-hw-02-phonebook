import PropTypes from 'prop-types';

export default function Filter({ stateFilterValue, inputValue }) {
  return (
    <label className="label">
      Find contact by name
      <input
        type="text"
        name="name"
        value={stateFilterValue}
        onChange={inputValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
}

Filter.propTypes = {
  stateFilterValue: PropTypes.string.isRequired,
  inputValue: PropTypes.func.isRequired,
};
