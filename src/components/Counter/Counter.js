import React from 'react';

const Counter = ({count, handleBtnClick}) => {
    return (
        <div>
            <h2 className="counter">{count}</h2>
            <button className="counter-button" onClick={() => { handleBtnClick(count + 1) }}>Click</button>
        </div>
    );
};

export default Counter;
