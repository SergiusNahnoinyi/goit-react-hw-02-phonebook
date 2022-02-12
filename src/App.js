import React, { Component } from 'react';

import ContactsForm from './components/ContactsForm';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';

export default class App extends Component {
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
      <section className="Phonebook">
        <h1 className="title">Phonebook</h1>
        <ContactsForm formData={this.formSubmitHandler} />

        <h2 className="title">Contacts</h2>
        <Filter stateFilterValue={filter} inputValue={this.changeFilter} />
        <ContactsList contacts={filtredContacts} />
      </section>
    );
  }
}
