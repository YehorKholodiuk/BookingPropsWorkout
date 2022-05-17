import React from 'react';
import Title from "./Title";
import Menu from "./Menu";

const Header = (props) => {
    console.log(props)
    return (
        <div>
         <Title title={props.title}/>
         <Menu menu={props.menu}/>
        </div>
    );
};

export default Header;
