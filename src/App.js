import React, { Component } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [],
  };

  formSubmitHandler = name => {
    const newContact = { id: nanoid(), name };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  render() {
    return (
      <div className="App">
        <Form name={this.formSubmitHandler} />
        {/* Contacts */}
        <div className="contacts">
          <h1 className="title">Contacts</h1>
          <ul className="contacts-list">
            {this.state.contacts.map(contact => (
              <li key={contact.id} className="item">
                {contact.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
