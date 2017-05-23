import React, { Component } from 'react';

class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    // console.log(this.props);
    const { name } = this.props;
    const { selected } = this.state;

    const majorClass = (selected) ? "major-item selected" : "major-item";

    return (
      <div className={majorClass} onClick={() => this.setState({ selected: !selected })}>
        <div><b>Campaign Name:</b> {name}</div>
      </div>
    );
  }
}

export default Campaign;