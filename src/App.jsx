import { useState } from 'react';
import Header from './components/Searchbar/header';
import Hero from './components/Hero/Hero';
import TrainStatus from './components/TrainStatus/trainStatus';
import './App.css';

function App() {

  const [lineName, setLineName] = useState("");

  return (
    <>
      <div id="header">
        <Header setLineName={setLineName} />
      </div>
      <div id="Hero">
        <Hero />
     </div>
     <div id="trainOuterContainer">
      <TrainStatus lineName={lineName}/>
     </div>
    </>
  )
}

export default App
