import React from 'react';
import styled from 'styled-components';

type AppProps = {
  name: string,
  onclick: ()=>void,
  clicked: boolean
};

const H1 = styled.h1`
  color: ${props => props.clicked ? 'pink' : 'black'}
`;

const App = ({ name = 'World', onclick = () => {}, clicked = false} : AppProps) => (
  <div onClick={onclick} onKeyPress={onclick} role="button" tabIndex="0">
    <H1 clicked={clicked}>Hello {name}</H1>
  </div>
);

export default App;
