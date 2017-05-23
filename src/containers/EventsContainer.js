import React from 'react';
import { graphql } from 'react-apollo';
import { events } from '../gql/queries';

export default (WrappedComponent, majorListCategory) => {
  let EventsContainer = ({ data: { loading, events } }) => {
    if (loading) { return <div>Loading...</div>; }

    const props = { list: events, majorListCategory };

    return <WrappedComponent {...props} />;
  };

  EventsContainer = graphql(events)(EventsContainer);
  return <EventsContainer />;
}
