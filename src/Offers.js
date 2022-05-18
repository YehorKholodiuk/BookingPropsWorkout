import React from 'react';
import BookingItem from "./BookingItem";

const Offers = (props) => {
    console.log(props)
    return (
        <div>
        <h2>Offers</h2>
            {props.offers.map(el=><BookingItem offer={el}/>)}

        </div>
    );
};

export default Offers;
