// @flow
import { render } from 'react-dom';
import base from './base';

import '@babel/polyfill';

const reactAppElement = document.getElementById('react-app');

if (reactAppElement instanceof Element) {
  render(
    base(),
    reactAppElement,
  );
}
