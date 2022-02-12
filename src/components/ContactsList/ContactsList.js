import PropTypes from 'prop-types';

export default function ContactsList({ contacts }) {
  return (
    <ul className="contacts-list">
      {contacts.map(contact => (
        <li key={contact.id} className="item">
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
