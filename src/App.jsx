import React from 'react';
import './App.css';
import Header from './components/Header'

function App() {

  return (
    <div className="App bg-black border-4 border-yellow-400">
      <header className="App-header">
        <Header />
        <p className='text-lg textIntro text-gray-400'>
          Hello, it's Daksh here, welcome to my digital space. I am a full stack dev and I specialise in frontend. I love minimal and responsive sites. Contact me with any of the means above. I have a good knowledge of ReactJS and Express. I also love learning new things. I have basic knowledge of Python too.
        </p>
      </header>
    </div>
  );
}

export default App;
