import React from 'react';

type AppProps = {
  name: string,
  onclick: ()=>void,
};

const clickedStyle = {
  color:'pink'
};

const unclickedStyle = {
  color:'black'
};

const App = ({ name = 'World', onclick = () => {}, clicked } : AppProps) => (
  <div onClick={onclick} onKeyPress={onclick} role="button" tabIndex="0">
    <h1 style={clicked ? clickedStyle : unclickedStyle}>Hello {name}</h1>
  </div>
);

export default App;
