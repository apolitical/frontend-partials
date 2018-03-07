import React from 'react';
import { connect } from 'react-redux';

import App from './App';
import { clickedAction } from './AppReducer';

const mapStateToProps = (state) => ({
  clicked: state.app.clicked,
});

const mapDispatchToProps = (dispatch) => ({
  onclick: () => dispatch(clickedAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
