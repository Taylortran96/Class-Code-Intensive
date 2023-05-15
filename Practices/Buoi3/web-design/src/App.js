import './App.css';
import React from'react';
import TopContainer from './Components/TopContainer/TopContainer';
import MiddleContainer from './Components/MiddleContainer/MiddleContainer';
import BottomContainer from './Components/BottomContainer/BottomContainer';


function App() {
  return (
    <div className="App">
      <TopContainer></TopContainer>
      <MiddleContainer></MiddleContainer>
      <BottomContainer></BottomContainer>
    </div>
  );
}

export default App;
