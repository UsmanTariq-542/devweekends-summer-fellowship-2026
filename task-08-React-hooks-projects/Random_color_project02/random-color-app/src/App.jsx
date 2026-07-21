import { useState } from 'react'
import './App.css'
import RandomColor from './components/random-color'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {/*Random color component*/}
    <RandomColor />
    </div>
  )
}

export default App
