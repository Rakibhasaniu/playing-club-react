import React from 'react';
import Break from '../Break/Break';
import Person from '../Person/Person';
import './Totalsummary.css'

const Totalsummary = () => {
    return (
        <div className='total-summary'>
            <Person></Person>
            <h3>Add Break On Playing</h3>
            <Break></Break>
            <h3>Playing Plan</h3>
            <h4>Total Time:</h4>
            <h4>Break Adeed:</h4>
            <div className="btn-div">
                <button className="btn-execute">Execute</button>
            </div>
            
        </div>
    );
};

export default Totalsummary;