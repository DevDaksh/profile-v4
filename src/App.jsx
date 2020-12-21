import React from 'react';
import './App.css';
import Bio from './components/Bio';
import Header from './components/Header'

function App() {

  return (
    <div className="App ">
      <Header />
      <header className="App-header">
        <Bio />
      </header>
    </div>
  );
}

export default App;
