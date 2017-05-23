import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  } 

  render() {
    const { email } = this.props;
    const { selected } = this.state;

    const majorClass = (selected) ? "major-item selected" : "major-item";    

    return (
      <div className={majorClass} onClick={() => this.setState({ selected: !selected })}>
        <div><b>User:</b> {email}</div>
      </div>
    );
  }
}

export default User;