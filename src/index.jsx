// @flow
import { render } from 'react-dom';
import base from './base';

import '@babel/polyfill';

const profileAppElement = document.getElementById('profile-app');

if (profileAppElement instanceof Element) {
  render(
    base(),
    profileAppElement,
  );
}
