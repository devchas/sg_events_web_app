import React from 'react';
import { graphql } from 'react-apollo';
import { users } from '../gql/queries';

export default (WrappedComponent, majorListCategory) => {
  let UsersContainer = ({ data: { loading, users } }) => {
    if (loading) { return <div>Loading...</div>; }

    const props = { list: users, majorListCategory };

    return <WrappedComponent {...props} />;
  };

  UsersContainer = graphql(users)(UsersContainer);
  return <UsersContainer />;
}