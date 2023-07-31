import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  interface Quote {
    text: string;
    author: string;
  }
  // State variables
  const [quote, setQuote] = useState<Quote>({ text: '', author: '' }); // Store the current quote
  const [quoteData, setQuoteData] = useState([]); // Store the data fetched from the API
  const [count, setCount] = useState(0); // Counter for selecting a random quote
  const [loading, setLoading] = useState(true); // Displays loading
  const [imageBackground, setImageBackground] = useState<string | null> (null); // set image background
  const quoteApi: any = 'https://type.fit/api/quotes'; // API endpoint for fetching quotes

  // Background Image Change Handler
  const handleBackgroundChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImageBackground(URL.createObjectURL(file))
    }
  };

  // Button click event handler
  const handleClick = () => {
    setCount(Math.floor(Math.random() * quoteData.length)); // Generate a random count to select a quote
  }

  // Fetch quotes from the API and store the data in quoteData
  useEffect(() => {
    axios.get(quoteApi)
      .then((res) => {
        console.log(res);
        setQuoteData(res.data);
        handleClick(); 
        setLoading(false);
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
    <div className='app-container' style={{ backgroundImage: imageBackground ? `url(${imageBackground})` : undefined }}>
      {loading ? <h1>Loading...</h1> :
        <>
          <div className='quote-container'>
            <h1 id='quote-text'>"{quote.text}"</h1>
            {quote.author ? <h3>{quote.author}</h3> : <h3>Unknown Author</h3>}
          </div>
          <button onClick={handleClick}>Random Quote</button>
          {/* Use a label for the file input */}
          <label className='change-background'>
            Change Background
            <input type='file' accept='image/*' onChange={handleBackgroundChange} />
          </label>
        </>}
    </div>
  );
}

export default App