import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>This is a test</h1>
        <p>please:</p>
        <Hero />
      
     </div>
    </>
  )
}

export default App
