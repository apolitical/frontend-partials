// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Organism } from '@apolitical/styleguide';

import { toggleVerticalNav, toggleVerticalSearch } from './HeaderReducer';

const { Header } = Organism;

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  showVerticalNav: state.headerReducer.showVerticalNav,
  showVerticalSearch: state.headerReducer.showVerticalSearch,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleVerticalNav: () => dispatch(toggleVerticalNav()),
  toggleVerticalSearch: () => dispatch(toggleVerticalSearch()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
