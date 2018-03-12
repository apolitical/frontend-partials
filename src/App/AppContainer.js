// @flow
import { connect } from 'react-redux';

import App from './App';
import { clickedAction } from './AppReducer';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps.match.params,
  clicked: state.app.clicked,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(clickedAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
