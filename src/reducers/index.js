
import { combineReducers } from 'redux';
import { ApolloClient } from 'react-apollo';
import events from './events-reducer';

const client = new ApolloClient();

const rootReducer = combineReducers({
  apollo: client.reducer(),
  events
});

export default rootReducer;