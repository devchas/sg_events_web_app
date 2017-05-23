import React from 'react';
import { connect } from 'react-redux';
import EventsContainer from './EventsContainer';
import UsersContainer from './UsersContainer';
import CampaignsContainer from './CampaignsContainer';
import MajorList from '../components/MajorList';

export const EVENTS = 'events';
export const USERS = 'users';
export const CAMPAIGNS = 'campaigns';

let MajorListContainer;

MajorListContainer = ({ majorListCategory }) => {
  switch(majorListCategory) {
    case EVENTS:
      return EventsContainer(MajorList, majorListCategory);
    case USERS:
      return UsersContainer(MajorList, majorListCategory);
    case CAMPAIGNS:
      return CampaignsContainer(MajorList, majorListCategory);
    default:
      return EventsContainer(MajorList, majorListCategory);
  }
}

function mapStateToProps(state) {
  const { events: { majorListCategory } } = state;
  return { majorListCategory };
}

MajorListContainer = connect(mapStateToProps)(MajorListContainer);
export default MajorListContainer;