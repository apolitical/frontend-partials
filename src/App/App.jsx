import React from 'react';

type AppProps = {
  name: string,
  onclick: ()=>void,
};

const App = ({ name = 'World', onclick = () => {} } : AppProps) => (
  <div onClick={onclick} onKeyPress={onclick} role="button" tabIndex="0">
    <h1>Hello {name}</h1>
  </div>
);

export default App;
