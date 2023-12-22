import React , {useState}from 'react';
import '../App.css';
import { GrPowerReset } from "react-icons/gr";

const Index = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      setCount(count - 1);
    };
  
    const handleReset = () => {
      setCount(0);
    };
  
    return (
      <div className="App">
        <h1 className='head'>Counter App</h1>
            <p className='h2'>{count}</p>
        <div className="counter">
          <button className='plus-minus' onClick={handleDecrement}>-</button>
        
          <button  className='plus-minus' onClick={handleIncrement}>+</button>
        </div>
        <button  onClick={handleReset} className="reset-btn">
        <GrPowerReset/>
        </button>
      </div>
    );
}

export default Index