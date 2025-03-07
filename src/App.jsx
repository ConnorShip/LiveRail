import { useState } from 'react';
import Hero from './components/Hero/Hero';
import TrainStatus from './components/TrainStatus/trainStatus';
import './App.css';

function App() {

  return (
    <>
      <div>
        <Hero />
     </div>
     <div>
      <TrainStatus />
     </div>
    </>
  )
}

export default App
