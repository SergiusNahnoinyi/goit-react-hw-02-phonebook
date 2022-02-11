import React, { Component } from 'react';

export default class Form extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <section className="phonebook">
        {/* Form */}
        <form className="form">
          <h1 className="title">Phonebook</h1>
          <label className="label">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button className="button" type="submit">
            Add contact
          </button>
        </form>
        {/* Contacts */}
        <div className="contacts">
          <h1 className="title">Contacts</h1>
          <ul className="contacts-list">
            <li className="item"></li>
          </ul>
        </div>
      </section>
    );
  }
}
