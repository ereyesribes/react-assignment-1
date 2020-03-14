import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    users: [
      { username: "Pepe" },
      { username: "Manolo" },
      { username: "Gonofredo" }
    ]
  };


  userNameChangedHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: "Manolo" },
        { username: "Gonofredo" }
      ]
    });
  }


  render() {
    var outputs = [];

    for (var user of this.state.users) {
      outputs.push(
        <UserOutput username = { user.username }/>
      );
    }

    return (
      <div className="App">
        <UserInput username = { this.state.users[0].username } changed = { this.userNameChangedHandler } />

        { outputs }
      </div>
    );
  }
}

export default App;
