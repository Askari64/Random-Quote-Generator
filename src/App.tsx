import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // State variables
  const [quote, setQuote] = useState({ text: '', author: '' }); // Store the current quote
  const [quoteData, setQuoteData] = useState([]); // Store the data fetched from the API
  const [count, setCount] = useState(0); // Counter for selecting a random quote
  const [arrLen, setArrLen] = useState(0); // Length of the quote data array
  const quoteApi: any = 'https://type.fit/api/quotes'; // API endpoint for fetching quotes

  // Button click event handler
  const handleClick = () => {
    setCount(Math.ceil(Math.random() * arrLen)); // Generate a random count to select a quote
  }

  // Fetch quotes from the API and store the data in quoteData
  useEffect(() => {
    axios.get(quoteApi)
      .then((res) => {
        console.log(res);
        setArrLen(res.data.length);
        setQuoteData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []); // Run only once to get data from the API and store it in quoteData

  // Update the quote when count or quoteData changes
  useEffect(() => {
    if (quoteData.length > 0) {
      setQuote(quoteData[count]); // Set the current quote based on the count
    }
  }, [count, quoteData]);

  // Update the document title when the quote author changes
  useEffect(() => {
    if (quote.author) {
      document.title = quote.author
    }
    else {
      document.title = "Unknown Author"
    }
  }, [quote.author]);

  // Rendered JSX
  return (
    <>
      <h1>"{quote.text}"</h1>
      {quote.author ? <h3>{quote.author}</h3> : <h3>Unknown Author</h3>}
      <button onClick={handleClick}>Random Quote</button>
    </>
  )
}

export default App
