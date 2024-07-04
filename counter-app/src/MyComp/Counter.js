import React, { useState } from 'react';
import './Counter.css';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter App</h1>
            <h2 className="counter-value">{count}</h2>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    );
};


