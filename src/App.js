import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


class App extends Component {
  state = {
    users: [
      { username: "Pepe" },
      { username: "Manolo" },
      { username: "Gonofredo" }
    ]
  };

  render() {
    var outputs = [];

    for (var user of this.state.users) {
      outputs.push(
        <UserOutput username = { user.username }/>
      );
    }

    return (
      <div className="App">
        <UserInput />

        { outputs }
      </div>
    );
  }
}

export default App;
