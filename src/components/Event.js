import React, { Component } from 'react';
import './list-style.css';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    // console.log(this.props);

    const { id, eventType, url, timestamp, user, campaign } = this.props;
    const { selected } = this.state;

    const majorClass = (selected) ? "major-item selected" : "major-item";
    const userEmail = (user) ? user.email : 'User';
    const link = (url) ? `(${url})` : '';
    const campaignName = (campaign) ? campaign.name : 'None';

    return (
      <div className={majorClass} onClick={() => this.setState({ selected: !selected })}>
        <div><b>User:</b> {userEmail}</div>
        <div><b>Event:</b> {eventType.toUpperCase()} {link}</div>
        <div><b>At:</b> {timestamp}</div>
        <div><b>Campaign:</b> {campaignName}</div>
      </div>
    );
  }
}

export default Event;