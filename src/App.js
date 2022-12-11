import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Exercice_paper from './composants/Paper.js';

function App() {
  return (
    <div className="App">
      <div className="section-paper">
        <h1>Basic paper</h1>
          <Exercice_paper/>

      </div>

    </div>
  );
}

export default App;
