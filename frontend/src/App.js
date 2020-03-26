import React from 'react';

import './global.css';

import Routes from './routes';  //quando se importa uma pasta, não é necessario 
//colocar /index no final pois o arquivo index ja é automaticamente procurado

// JSX (JavaScript XML) HTML integrado dentro do javasript

function App() {
   
  return (
   <Routes />
  );
}

export default App; //npm start (rodar programa)
