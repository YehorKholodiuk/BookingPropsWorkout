import React from 'react';

const Availability = () => {
    return (
        <div>
            Check-in:
            <input type='date'/>
            Check out:
            <input type='date'/>
            <button>Check availability</button>
        </div>
    );
};

export default Availability;
