import React from 'react';
import SimpleChart from './SimpleChart';
import SimpleChart2 from './SimpleChart2';
import SimpleChart3 from './SimpleChart3';
import SimpleChart4 from './SimpleChart4';
import SimpleChart5 from './SimpleChart5';
import './master.css';
// import PropTypes from 'prop-types';

const ChartsComp = () => {
    return (
        <div>
            <h1>Simple line chart</h1>
            <SimpleChart />
            <h1>CustomizedDot line chart</h1>
            <SimpleChart2 />
            <h1>Stacked AreaChart</h1>
            <SimpleChart3 />
            <h1>Mix Bar Chart</h1>
            <SimpleChart4 />
            <h1>Composed Responsive Container</h1>
            <SimpleChart5 />
        </div>
    );
};

// ChartsComp.propTypes = {};

export default ChartsComp;