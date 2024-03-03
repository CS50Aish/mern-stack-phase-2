import React from 'react';
import CounterHook from './CounterHook';

function CounterHookApp(){

    const mystyle = {
        color: "white",
        backgroundColor: "Dodgerblue",
        padding: "10px",
        fontFamily: "Arial",
        border: "2px solid black"
    };

    return (
        <div>
            <CounterHook />
        </div>
    )
}

export default CounterHookApp;