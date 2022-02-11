import React, { Component } from 'react';
import Form from './components/Form';

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [],
  };

  formSubmitHandler = name => {
    console.log(name);
  };

  render() {
    return (
      <div className="App">
        <Form name={this.formSubmitHandler} />
        {/* Contacts */}
        <div className="contacts">
          <h1 className="title">Contacts</h1>
          <ul className="contacts-list">
            <li className="item"></li>
          </ul>
        </div>
      </div>
    );
  }
}
