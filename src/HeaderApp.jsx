// @flow
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { meReducer } from './App/Reducers/Member/MeReducer';
import Header from './App/Component/Organism/Header/HeaderContainer';
import ApoliticalBrand from './App/Theme/ApoliticalBrand';
import ApoliticalGlobalStyles from './App/Theme/ApoliticalGlobalStyles';
import { headerReducer } from './App/Component/Organism/Header/HeaderReducer';

import '@babel/polyfill';
import type { Member } from './types';
import { getMember } from './App/Api/api';

const reducers = combineReducers({
  meReducer,
  headerReducer,
});
const store = createStore(reducers);

type Props = {}

type State = {
  me: ?Member,
}

class HeaderApp extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      me: null,
    };
  }

  componentWillMount() {
    getMember('me')
      .then((me) => this.setState({ me }))
      .catch(() => { window.location = '/login'; });
  }

  render() {
    return (
      <Provider store={store}>
        <ApoliticalGlobalStyles />
        <BrowserRouter>
          <ThemeProvider theme={ApoliticalBrand}>
            <Header {...this.state} />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

const reactAppElement = document.getElementById('header-app');

if (reactAppElement instanceof Element) {
  render(
    <HeaderApp />,
    reactAppElement,
  );
}
