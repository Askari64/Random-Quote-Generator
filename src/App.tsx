import {useState} from 'react'
import './App.css'
function App() {

  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    setCount(Math.ceil(Math.random()* 100));
  }

  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={handleClick}>Press</button>
    </>
  )
}

export default App
