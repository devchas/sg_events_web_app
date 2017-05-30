import React, { Component } from 'react';

class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    const { name, id } = this.props;
    const { selected } = this.state;

    const campaignName = (name) ? name : `ID - ${id}`;
    const majorClass = (selected) ? "major-item selected" : "major-item";

    return (
      <div className={majorClass} onClick={() => this.setState({ selected: !selected })}>
        <div><b>Campaign:</b> {campaignName}</div>
      </div>
    );
  }
}

export default Campaign;