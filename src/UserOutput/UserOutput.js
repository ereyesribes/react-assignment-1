import React, { Component } from 'react';
import './UserOutput.css';

const userOutput = function(props) {
  return (
    <div className = "UserOutput">
      <p>Hey!</p>
      <p>Sup, { props.username }.</p>
    </div>
  );
}

export default userOutput;
