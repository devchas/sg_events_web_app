import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  } 

  render() {
    const { email } = this.props;

    return (
      <div className="major-item">
        <div><b>User:</b> {email}</div>
      </div>
    );
  }
}

export default User;