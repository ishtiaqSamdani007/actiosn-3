import React, { useState } from 'react';
import './App.css';
import Button from './components/atoms/Button';
import Typography from './components/atoms/Typography';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
    <center>
      <Typography fontSize="20px" text="Counter App" />
    </center>
    <br />
    <br />

    <div className="counter">
      <Button text="+" onClick={increment} />
      <Typography fontSize="20px" text={count.toString()} />
     <Button text="-" onClick={decrement} />
    </div>

</>
  );
}

export default App;
