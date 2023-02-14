import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {isNumeric} from "../../../util/UtilFunction";
import classes from "../../MainContent.module.css";

const TextChooser = ({getValue, setValue, minValue, maxValue}) => {
    const dispatch = useDispatch();
    const [localValue, setLocalValue] = useState("");

    const onInputChange = (e) => {
        setLocalValue(e.target.value);
        if (isValid(e.target.value)){
            const input = Number(e.target.value);
            dispatch(setValue(input));
        }
    }

    const isValid = (str) => {
        const input = isNumeric(str) ? Number(str) : NaN;
        return str!=="" && !isNaN(input) && input >= minValue && input <= maxValue;
    }

    return (
          <form>
              <input className={[classes.textBlue20, classes.input, classes.scalableItem].join(" ")} value={localValue} type={"text"} required maxLength={6} onChange={onInputChange}/>
          </form>
    );
};

export default TextChooser;