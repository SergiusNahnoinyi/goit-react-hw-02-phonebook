import React, { Component } from 'react';
import Form from './components/Form';

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [],
  };

  formSubmitHandler = formData => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, formData],
    }));
  };

  render() {
    return (
      <div className="App">
        <Form formData={this.formSubmitHandler} />
        {/* Contacts */}
        <div className="contacts">
          <h1 className="title">Contacts</h1>
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
