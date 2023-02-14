import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import classes from "../../MainContent.module.css";

const SliderChooser = ({getValue, setValue, options}) => {
    const dispatch = useDispatch();
    // const selected = useAppSelector(state => getValue(state));
    const [localValue, setLocal] = useState(1);

    const rChosen = e => {
        if (e.target.value) {
            setLocal(e.target.value);
            dispatch(setValue(Number(e.target.value)))
        }
    }
    return (
        <from className={[classes.scalableItem, classes.flexColumn].join(" ")}>
            <input type={"range"} min={0} max={10} value={localValue} onChange={rChosen} />
        </from>
    )};

export default SliderChooser;