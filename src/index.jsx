import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import 'babel-polyfill';

import App from './App/AppContainer';
import { appReducer } from './App/AppReducer';

const reducers = combineReducers({
  app: appReducer,
});
const store = createStore(reducers);


render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>

          <Route path="/:name" component={App}/>
          <Route path="/" component={App}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
  document.getElementById('profile-app'),
);
