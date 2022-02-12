import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Form extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.name(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    return (
      <section className="phonebook">
        {/* Form */}
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="title">Phonebook</h1>
          <label className="label" htmlFor={this.nameInputId}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className="label" htmlFor={this.numberInputId}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className="button" type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}
