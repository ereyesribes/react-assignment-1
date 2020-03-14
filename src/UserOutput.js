import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {
  render() {
    return (
      <div className = "UserOutput">
        <p>Hey!</p>
        <p>Sup, { this.props.username }.</p>
      </div>
    );
  }
}

export default UserOutput;
