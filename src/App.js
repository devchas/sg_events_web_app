import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import MajorListContainer from './containers/MajorListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <MajorListContainer />
      </div>
    );
  }
}

export default App;
