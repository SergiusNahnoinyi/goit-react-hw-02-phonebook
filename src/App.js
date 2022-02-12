import React, { Component } from 'react';
import Form from './components/Form';

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = formData => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, formData],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.getFiltredContacts();

    return (
      <div className="App">
        <Form formData={this.formSubmitHandler} />
        {/* Contacts */}
        <div className="contacts">
          <h1 className="title">Contacts</h1>
          <label className="label">
            Find contact by name
            <input
              type="text"
              name="name"
              value={filter}
              onChange={this.changeFilter}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <ul className="contacts-list">
            {filtredContacts.map(contact => (
              <li key={contact.id} className="item">
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
