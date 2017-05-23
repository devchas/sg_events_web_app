import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../actions/events';
import Header from '../components/Header';

let HeaderContainer = ({ selectCategory }) => {
  const props = { 
    selectCategory: (category) => selectCategory(category) 
  };
  return <Header {...props} />
}

function mapDispatchToProps(dispatch) {
  return {
    selectCategory: (category) => dispatch(selectCategory(category))
  }
}

HeaderContainer = connect(null, mapDispatchToProps)(HeaderContainer)
export default HeaderContainer;