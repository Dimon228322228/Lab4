import React from 'react';
import classes from "./MyButton.module.css";
import classes1 from "./../../MainContent.module.css"
const MyButton = ({ children, styles, ...props}) => {
    return (
        <div className={classes.wrap}>
            {
                (typeof styles === 'string' || styles instanceof String)?
                    <button className={[classes.btn, styles].join(" ")} {...props}>{children}</button>
                :   <button className={[classes.btn, ...styles].join(" ")} {...props}>{children}</button>
            }
        </div>
    );
};

export default MyButton;