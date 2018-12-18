// @flow
import React from 'react';
import styled from 'styled-components';

type AppProps = {
  onClick?: ()=>void,
  clicked?: boolean,
  name?: string,
};

const Wrapper = styled.div`
  color: ${({ clicked }) => (clicked ? 'pink' : 'black')}
`;

const App = ({ onClick, clicked, name } : AppProps) => (
  <Wrapper clicked={clicked} onClick={onClick} onKeyPress={onClick} role="button" tabIndex="0">
    <h1>
      Hello
      {' '}
      {name}
    </h1>
  </Wrapper>
);

App.defaultProps = {
  onClick() {},
  clicked: false,
  name: 'World',
};

export default App;
