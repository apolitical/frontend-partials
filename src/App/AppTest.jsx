import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should default to "Hello World"', () => {
    const app = shallow(<App />);
    expect(app.text()).to.equal('Hello World');
  });
});
