import React from 'react';
import { EVENTS, USERS, CAMPAIGNS } from '../containers/MajorListContainer';

let Header = ({ selectCategory }) => {
  return (
    <div>
      <button onClick={() => selectCategory(EVENTS)}>Events</button>
      <button onClick={() => selectCategory(USERS)}>Users</button>
      <button onClick={() => selectCategory(CAMPAIGNS)}>Campaigns</button>
    </div>
  );
}

export default Header;