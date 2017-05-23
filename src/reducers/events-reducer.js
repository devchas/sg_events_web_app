import { EVENTS, USERS, CAMPAIGNS } from '../containers/MajorListContainer';
import { SELECT_CATEGORY } from '../actions/events';

const initialState = {
  majorListCategory: EVENTS
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SELECT_CATEGORY:
      return Object.assign({}, state, { majorListCategory: action.payload });
    default:
      return state; 
  }
}