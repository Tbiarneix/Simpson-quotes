import './App.css';
import React, { useState } from 'react';
import DisplayQuotes from './components/SimpsonQuotes';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState(null);
  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => { setQuote(data[0]);
      });
  };

  return (
    <div className="App">
      <DisplayQuotes quote={quote} />
      <button type="button" onClick={getQuote}>Get Simpson's Quote</button>
    </div>
  );
}

export default App;