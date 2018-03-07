// @flow
import React from 'react';
import styled from 'styled-components';

type AppProps = {
  onClick?: ()=>void,
  clicked?: boolean,
  name?: string,
};

const Wrapper = styled.div`
  color: ${(props) => (props.clicked ? 'pink' : 'black')}
`;

const App = (props : AppProps) => (
  <Wrapper {...props} onKeyPress={props.onClick} role="button" tabIndex="0">
    <h1>Hello {props.name}</h1>
  </Wrapper>
);

App.defaultProps = {
  onClick() {},
  clicked: false,
  name: 'World',
};

export default App;
