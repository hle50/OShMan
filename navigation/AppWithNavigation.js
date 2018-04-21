import React, { Component } from 'react';
import { connect } from 'react-redux';

import RootNavigator from './RootNavigator';

const App = ({ dispatch, nav }) => {

  return (
    <RootNavigator />
  );
};

const mapStateToProps = state => ({
  nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default AppWithNavigation;
