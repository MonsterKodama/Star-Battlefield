import React from 'react';
import { SpeachBox } from './core-components/SpeachBox';
import { Gameboard } from './core-components/Gameboard';
import './App.css';

function Heading({title}: {title:string}) {
  return (
      <h1>{title}</h1>
  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading title="Battlefield"></Heading>
      </header>
        <Gameboard></Gameboard>
        <SpeachBox>Welcone to the game!</SpeachBox>
    </div>
  );
}

export default App;
