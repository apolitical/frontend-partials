// @flow
import { render } from 'react-dom';
import base from './base';

import '@babel/polyfill';

const appElement = document.getElementById('app');

if (appElement instanceof Element) {
  render(
    base(),
    appElement,
  );
}
