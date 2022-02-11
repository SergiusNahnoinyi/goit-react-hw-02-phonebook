import React, { Component } from 'react';

export default class Form extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <form>
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Фамилия
          <input
            type="text"
            name="surename"
            value={this.state.surename}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
