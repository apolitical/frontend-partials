// @flow
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { meReducer } from './App/Reducers/Member/MeReducer';
import Header from './App/Component/Organism/Header/HeaderContainer';
import { headerReducer } from './App/Component/Organism/Header/HeaderReducer';

import '@babel/polyfill';


const reducers = combineReducers({
  meReducer,
  headerReducer,
});
const store = createStore(reducers);

const HeaderApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>
);

const reactAppElement = document.getElementById('react-app');

if (reactAppElement instanceof Element) {
  render(
    <HeaderApp />,
    reactAppElement,
  );
}
