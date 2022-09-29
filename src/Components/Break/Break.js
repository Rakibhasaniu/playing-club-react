import React from 'react';
import './Break.css'

const Break = ({ onClickBreakHandler }) => {
    return (
        <div className="break">
            <button onClick={() => onClickBreakHandler(1)}>1 Day</button>
            <button onClick={() => onClickBreakHandler(2)}>2 Days</button>
            <button onClick={() => onClickBreakHandler(3)}>3 Days</button>
            <button onClick={() => onClickBreakHandler(4)}>4 Days</button>
        </div>
    );
};

export default Break;