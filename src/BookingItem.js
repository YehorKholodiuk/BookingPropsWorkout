import React from 'react';
import Availability from "./Availability";

const BookingItem = (props) => {
    return (
        <div>
            <h3>{props.offer.name}</h3>
            <p>{props.offer.description}</p>
            <div>price: ${props.offer.price}/night</div>
            <Availability/>
        </div>
    );
};

export default BookingItem;
