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

type Props = {
  loggedOutFunction: () => void,
}

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
    const { loggedOutFunction } = this.props;
    getMember('me')
      .then((me) => this.setState({ me }))
      .catch(loggedOutFunction);
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

const reactAppElements = Array.from(document.querySelectorAll('[data-partial-app=\'header\']'));

reactAppElements
  .filter((element) => element instanceof Element)
  .map((element) => {
    if (Object.hasOwnProperty.call(element.dataset, 'headerLoggedOut')) {
      const loggedOutFunctionName = element.dataset.headerLoggedOut;
      if (Object.hasOwnProperty.call(window, loggedOutFunctionName) && typeof window[loggedOutFunctionName] === 'function') {
        return [element, window[loggedOutFunctionName]];
      }
    }
    return [element, () => {}];
  })
  .forEach(([element, loggedOut]) => render(<HeaderApp loggedOutFunction={loggedOut} />, element));
