// This file exists to wrap fetch in an object so that it can be mocked later.
// Use this file, do not use isomorphic-fetch directly.

import fetch from 'isomorphic-fetch';

export default {
  fetch
};
