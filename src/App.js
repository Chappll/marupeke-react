import logo from './logo.svg';
import './App.css';
import Game from './Components/Game'
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div >
      <Game boardSize={3}></Game>
    </div>
  );
}

export default App;
