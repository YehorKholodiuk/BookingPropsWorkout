import React from 'react';
import MenuItem from "./MenuItem";

const Menu = (props) => {
    console.log(props)
    return (

        <div>
            <MenuItem menuItem={props.menu[0]}/>
            <MenuItem menuItem={props.menu[1]}/>
            <MenuItem menuItem={props.menu[2]}/>
            <MenuItem menuItem={props.menu[3]}/>
        </div>
    );
};

export default Menu;
