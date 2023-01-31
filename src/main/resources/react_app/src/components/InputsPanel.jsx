import React from 'react';
import classes from "./MainContent.module.css";

const InputsPanel = () => {
    let variable = ["x", "y"];

    return (
        <form className={classes.flexColumn}>
            {
                variable.map( (variable, index) =>
                <input key={index} className={[classes.textBlue20, classes.input, classes.scalableItem].join(" ")} type={"text"} placeholder={"Введите " + variable + ": "}/>
            )}
            <div className={[classes.scalableItem, classes.flexColumn].join(" ")}>
                <label className={[classes.textBlue20, classes.paddingLeft20].join(" ")} htmlFor={"radius"}>Выберите r:</label>
                <input id={"radius"} className={[classes.input].join(" ")} type={"range"} min={'1'} max={'5'} step={"0.01"}/>
            </div>
        </form>
    );
};

export default InputsPanel;