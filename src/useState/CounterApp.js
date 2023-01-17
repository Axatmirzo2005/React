import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const CounterApp = () => {

    const [state, setstate] = useState(0);

    function increment() {
        setstate(state + 1);
    }

    function dicrement() {
        setstate(state - 1);
    }

    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{state}</span>
            <button onClick={dicrement}>-</button>
        </div>
    );
};

// CounterApp.propTypes = {};

export default CounterApp;