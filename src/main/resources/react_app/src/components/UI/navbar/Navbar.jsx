import React from 'react';
import classes from "./Navbar.module.css";
import MyButton from "../button/MyButton";
import classes1 from "../../MainContent.module.css";

const Navbar = ({children, ...props}) => {
    return (
        <>
            <div className={classes.root}>
                <svg viewBox="0 0 24 24" className={classes.svg} >
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor" fill-rule="evenodd"/>
                </svg>
                <MyButton styles={classes1.textWhite20}>Log out</MyButton>
            </div>
            {children}
        </>
);
};

export default Navbar;