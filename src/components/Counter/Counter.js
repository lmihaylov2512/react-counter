import React, { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(props.start || 0);

    const handleBtnClick = (event) => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2 className="counter">{count}</h2>
            <button className="counter-button" onClick={handleBtnClick}>Click</button>
        </div>
    );
};

export default Counter;
