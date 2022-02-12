import PropTypes from 'prop-types';

export default function ContactsList({ contacts, onDelete }) {
  return (
    <ul className="contacts-list">
      {contacts.map(contact => (
        <li key={contact.id} className="item">
          {contact.name}: {contact.number}
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
