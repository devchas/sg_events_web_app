import React, { Component } from 'react';
import Event from './Event';
import User from './User';
import Campaign from './Campaign';
import { EVENTS, USERS, CAMPAIGNS } from '../containers/MajorListContainer';

class MajorList extends Component {
  render() {
    const { list } = this.props;
  
    return (
      <div>
        {list.map(item => {
          return this.renderItem(item);
        })}
      </div>
    );
  }

  renderItem(item) {
    switch(this.props.majorListCategory) {
      case EVENTS:
        return <Event key={item.id} {...item} />;
      case USERS:
        return <User key={item.id} {...item} />;
      case CAMPAIGNS:
        return <Campaign key={item.id} {...item} />;
      default:
        return null;
    }
  }
}

export default MajorList;