import React, { useState } from 'react';
import Counter from './components/Counter/Counter';
import './App.css';

const App = () => {
  const [count, setCount] = useState(42);

  const setCounterValue = (num) => {
    setCount(num);
  };

  return (
    <div className="App">
      <Counter count={count} handleBtnClick={setCounterValue}></Counter>
    </div>
  );
};

export default App;
