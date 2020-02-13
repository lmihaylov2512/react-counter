import React from 'react';
import Counter from './components/Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter start={42}></Counter>
    </div>
  );
}

export default App;
