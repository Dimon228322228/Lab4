import React from 'react';
import classes from "./OutputItem.module.css";
import classes1 from "./../../MainContent.module.css";

const OutputItem = ({variable, describe, ...props}) => {
    return (
        <div className={[classes.item, classes1.flexColumn].join(" ")}>
            <label className={[classes1.textBlue20, classes.fontSize16, classes.seventyOpacity, classes.label].join(" ")} htmlFor={[variable, describe].join('_')}>{describe}</label>
            <output className={[classes.output, classes1.textBlue20].join(" ")} id={[variable, describe].join('_')}>{variable}</output>
        </div>
    );
};

export default OutputItem;