// @flow
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Organism } from '@apolitical/styleguide';
import { ThemeProvider } from 'styled-components';

import { meReducer } from './App/Reducers/Member/MeReducer';
// import Header from './App/Component/Organism/Header/HeaderContainer';
import ApoliticalBrand from './App/Theme/ApoliticalBrand';
import ApoliticalGlobalStyles from './App/Theme/ApoliticalGlobalStyles';
import { headerReducer } from './App/Component/Organism/Header/HeaderReducer';

import '@babel/polyfill';

const { Header } = Organism;

const reducers = combineReducers({
  meReducer,
  headerReducer,
});
const store = createStore(reducers);

const HeaderApp = () => (
  <Provider store={store}>
    <ApoliticalGlobalStyles />
    <BrowserRouter>
      <ThemeProvider theme={ApoliticalBrand}>
        <Header />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

const reactAppElement = document.getElementById('header-app');

if (reactAppElement instanceof Element) {
  render(
    <HeaderApp />,
    reactAppElement,
  );
}
