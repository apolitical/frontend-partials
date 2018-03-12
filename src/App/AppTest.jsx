// @flow
import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';

import App from './App';

describe('App', () => {
  it('should default to "Hello World"', () => {
    const app = mount(<App />);
    expect(app.text()).to.equal('Hello World');
  });

  it('should accept a name', () => {
    const app = mount(<App name="Apolitical" />);
    expect(app.text()).to.equal('Hello Apolitical');
  });

  it('should be clickable', () => {
    const app = mount(<App />);
    app.simulate('click');
  });

  it('should have a customisable onclick', () => {
    const callback = spy();
    const app = mount(<App onClick={callback} />);
    app.simulate('click');
    callback.should.have.callCount(1);
  });
});
