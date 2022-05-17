import React from 'react';

const MenuItem = (props) => {
    console.log(props)
    return (
        <div>
<li>{props.menuItem}</li>
        </div>
    );
};

export default MenuItem;
