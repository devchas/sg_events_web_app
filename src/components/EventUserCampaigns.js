import React, { Component } from 'react';
import Event from './Event';

class EventUserCampaign extends Component {
  render() {
    const { event: { user: { email, campaigns } } } = this.props;

    return (
      <div className="level-2-container">  
        <div className="level-2-title">Campaigns Sent to {email}:</div>
        {this.renderCampaigns()}
      </div>
    );
  }

  renderCampaigns() {
     const { event: { user: { campaigns } } } = this.props;

     return campaigns.map(campaign => {
        const { id, name, userEvents } = campaign;
        const user = this.props.event.user;
        const props = { id, name, user, userEvents };

        return <MinorCampaign {...props} key={id}/>;
     });
  }
}

export default EventUserCampaign;


class MinorCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  handleClick(e) {
    e.stopPropagation();
    this.setState({ selected: !this.state.selected });
  }

  render() {
    const { id, name } = this.props;

    return (
      <div onClick={e => this.handleClick(e)}>
        <div className="major-item">
          <b>Campaign:</b> { name || `ID - ${id}`}
          {this.state.selected && this.renderUserEvents()}
        </div>
      </div>
    );
  }

  renderUserEvents() {
    const { id, name, user: { email }, userEvents } = this.props;

    console.log(userEvents);

    return (
      <div className="level-2-container"> 
        <div className="level-2-title">{email}'s Events from Campaign: {name || id}</div>
        {this.userEventsList(userEvents)}
      </div>
    );
  }  

  userEventsList(events) {
    const { user, id, name } = this.props;

    return events.map(event => {
      const props = Object.assign({}, event, {
        user,
        campaign: { id, name }
      });

      return <Event key={event.id} {...props} />
    });
  }
}