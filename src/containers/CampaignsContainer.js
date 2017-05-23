import React from 'react';
import { graphql } from 'react-apollo';
import { campaigns } from '../gql/queries';

export default (WrappedComponent, majorListCategory) => {
  let CampaignsContainer = ({ data: { loading, campaigns } }) => {
    if (loading) { return <div>Loading...</div>; }

    const props = { list: campaigns, majorListCategory };

    return <WrappedComponent {...props} />;
  };

  CampaignsContainer = graphql(campaigns)(CampaignsContainer);
  return <CampaignsContainer />;
}