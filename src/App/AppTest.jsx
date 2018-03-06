import React from 'react';
import App from './App';
import assert from 'assert';

describe('App', () => {
  it('should default to "Hello World"', () => {

    const app = <App />;
    assert(app);

  });
});
