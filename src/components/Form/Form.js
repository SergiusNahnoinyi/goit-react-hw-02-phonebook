import React, { Component } from 'react';

export default class Form extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.name(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <section className="phonebook">
        {/* Form */}
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="title">Phonebook</h1>
          <label className="label">
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button className="button" type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}
