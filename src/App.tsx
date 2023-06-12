import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {

  const [quote, setQuote] = useState({text: '', author: ''});

  const [count, setCount] = useState(0)

  const [arrLen, setArrLen] = useState(0)

  const quoteApi: any = 'https://type.fit/api/quotes';

  const handleClick = () => {
    setCount(Math.ceil(Math.random()*arrLen));
  }
  

  useEffect(() => {
    axios.get(quoteApi)
      .then((res) => {
        console.log(res);
         setArrLen(res.data.length)
         setQuote(res.data[count])
      })
      .catch((err) => {
        console.log(err);
      })
  }, [count]);

  useEffect(() =>{
    document.title = quote.author;
  },[quote.author]);

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>"{quote.text}"</h1>
      <h3>~{quote.author}</h3>
      <button onClick={handleClick}>Random Quote</button>
      
    </>
  )
}

export default App
