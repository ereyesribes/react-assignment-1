import React, { Component } from 'react';
import './UserInput.css';

const userInput = function(props) {
  return (
    <div className = "UserInput">
      <input type = "text" onChange = { props.changed } value = { props.username }/>
    </div>
  );
}

export default userInput;
