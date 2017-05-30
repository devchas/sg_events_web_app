import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { eventUserCampaigns } from '../gql/queries';
import EventUserCampaigns from '../components/EventUserCampaigns';

class EventUserCampaignsContainer extends Component {
  render() {
    const { data: { loading, event } } = this.props;

    if (loading) { return null; }

    return <EventUserCampaigns event={event} />
  }
}

EventUserCampaignsContainer = graphql(eventUserCampaigns, {
  options: (props) => ({
    variables: {
      eventId: props.eventId,
      userId: props.userId
    }
  })
})(EventUserCampaignsContainer)
export default EventUserCampaignsContainer;