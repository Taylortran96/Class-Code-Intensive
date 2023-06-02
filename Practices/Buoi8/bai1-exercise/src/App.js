import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

export default function App() {
  const [text, setText] = useState ("");
  const [wordCount, setWordCount] = useState(0);
  const  [charCount, setCharcount] = useState (0);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  
  useEffect(() => {
    const countWords = () => {
      const wordsArray = text.split(" ");
      const filteredWordsArray = wordsArray.filter((word) => word !== ''); //lọc các từ có khoảng trắng
      setWordCount (filteredWordsArray.length)
      setCharcount (text.length); // update char count (including whitespaces)
    }
    countWords();
  }, [text])
  return (
    <div className="App">
      <h1>Word Counter</h1>
      <input type="text" placeholder="Enter text" onChange={handleInputChange}/>
      <p> Word(s): {wordCount}</p>
      <p> Character Counter (including whitespaces): {charCount} </p>
    </div>
  );
}

