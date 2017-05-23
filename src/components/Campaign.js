import React, { Component } from 'react';

class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    // console.log(this.props);
    const { name } = this.props;

    return (
      <div className="major-item">
        <div><b>Campaign Name:</b> {name}</div>
      </div>
    );
  }
}

export default Campaign;