import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import TrainStatus from './components/tubeAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main-container">
        <h1>This is a test</h1>
        <p>please:</p>
        <Hero />
        <TrainStatus />
      
     </div>
    </>
  )
}

export default App
