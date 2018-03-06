import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import App from './App';

describe('App', () => {
  it('should default to "Hello World"', () => {
    const app = shallow(<App />);
    expect(app.text()).to.equal('Hello World');
  });

  it('should accept a name', () => {
    const app = shallow(<App name="Apolitical" />);
    expect(app.text()).to.equal('Hello Apolitical');
  });

  it('should be clickable', () => {
    const app = shallow(<App />);
    app.simulate('click');
  });

  it('should have a customisable onclick', () => {
    const callback = spy();
    const app = shallow(<App onclick={callback} />);
    app.simulate('click');
    callback.should.have.callCount(1);
  });
});
