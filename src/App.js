import React, { Component } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';

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

  InputId = nanoid();

  render() {
    return (
      <div className="App">
        <Form formData={this.formSubmitHandler} />
        {/* Contacts */}
        <div className="contacts">
          <h1 className="title">Contacts</h1>
          <label className="label" htmlFor={this.InputId}>
            Find contact by name
          </label>
          <input
            type="text"
            name="name"
            id={this.InputId}
            value={this.state.filter}
            onChange={this.changeFilter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ul className="contacts-list">
            {this.state.contacts.map(contact => (
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
