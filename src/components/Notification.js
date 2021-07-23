import React from 'react';

const Notification = ({ successMessage, errorMessage }) => {
  if (successMessage === null && errorMessage === null) {
    return null;
  }
  if (successMessage) {
    return <div style={successMessageStyle}>{successMessage}</div>;
  }
  if (errorMessage) {
    return <div style={errorMessageStyle}>{errorMessage}</div>;
  }
};

const successMessageStyle = {
  color: 'green',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};
const errorMessageStyle = {
  color: 'red',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

export default Notification;
