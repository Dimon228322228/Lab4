import React from 'react';
import classes from "./MainContent.module.css";
import {useDispatch, useSelector} from "react-redux";
import {updateRAction} from "../store/RadiusReducer";
import {updateXAction} from "../store/XReducer";
import {updateYAction} from "../store/YReducer";

const InputsPanel = () => {
    const dispatch = useDispatch();
    const radius = useSelector(state => state.rReducer.radius);

    const changeR = e => dispatch(updateRAction(e.target.value));
    const changeY = e => dispatch(updateYAction(e.target.value));
    const changeX = e => dispatch(updateXAction(e.target.value));

    return (
        <form className={classes.flexColumn}>
            <input onChange={changeX} className={[classes.textBlue20, classes.input, classes.scalableItem].join(" ")} type={"text"} placeholder={"Введите x: "}/>
            <input onChange={changeY} className={[classes.textBlue20, classes.input, classes.scalableItem].join(" ")} type={"text"} placeholder={"Введите y: "}/>
            <div className={[classes.scalableItem, classes.flexColumn].join(" ")}>
                <label className={[classes.textBlue20, classes.paddingLeft20].join(" ")} htmlFor={"radius"}>Выберите r:</label>
                <input onChange={e => changeR(e)} id={"radius"} className={[classes.input].join(" ")} type={"range"} min={'1'} max={'5'} step={"0.01"} value={radius}/>
                <div className={[classes.flexRow, classes.spaceBetween, classes.textBlue20].join(" ")}>
                    <p>1</p>
                    <p>5</p>
                </div>
            </div>
        </form>
    );
};

export default InputsPanel;