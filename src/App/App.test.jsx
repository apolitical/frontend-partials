// @flow
import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('App', () => {
  it('should default to "Hello World"', () => {
    const app = mount(<App />);
    expect(app.text()).toEqual('Hello World');
  });

  it('should accept a name', () => {
    const app = mount(<App name="Apolitical" />);
    expect(app.text()).toEqual('Hello Apolitical');
  });

  it('should be clickable', () => {
    const app = mount(<App />);
    app.simulate('click');
  });

  it('should have a customisable onclick', () => {
    const callback = jest.fn();
    const app = mount(<App onClick={callback} />);
    app.simulate('click');
    expect(callback.mock.calls.length).toBe(1);
  });
});
