import React, { Component } from 'react';
import './list-style.css';
import EventUserCampaignsContainer from '../containers/EventUserCampaignsContainer';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    const { id, eventType, url, timestamp, user, campaign } = this.props;
    const { selected } = this.state;

    const majorClass = (selected) ? "major-item selected" : "major-item";
    const userEmail = (user) ? user.email : 'User';
    const link = (url) ? `(${url})` : '';
    
    let campaignName;
    if (campaign) {
      if (campaign.name) {
        campaignName = campaign.name;
      } else if (campaign.id) {
        campaignName = `ID - ${campaign.id}`;
      }
    } else {
      campaignName = 'None';
    }

    return (
      <div className={majorClass} onClick={() => this.setState({ selected: !selected })}>
        <div><b>Event:</b> {eventType.toUpperCase()} {link}</div>
        <div><b>User:</b> {userEmail}</div>
        <div><b>At:</b> {timestamp}</div>
        <div><b>Campaign:</b> {campaignName}</div>
        {this.state.selected &&
        <EventUserCampaignsContainer eventId={id} userId={user.id} />}
      </div>
    );
  }
}

export default Event;