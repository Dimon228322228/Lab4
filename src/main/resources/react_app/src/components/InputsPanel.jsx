import React from 'react';
import classes from "./MainContent.module.css";
import {setR, setX, setY} from "../store/chooserSlice";
import TextChooser from "./UI/choosers/textChooser";
import ChooserWrapper from "./UI/choosers/ChooserWrapper";
import SliderChooser from "./UI/choosers/SliderChooser";

const InputsPanel = () => {

    return (
        <form className={classes.flexColumn}>
            <ChooserWrapper chooserName={"Введите x:"}>
                <TextChooser getValue={state => state.chooser.x} setValue={setX} minValue={-5} maxValue={5} />
            </ChooserWrapper>
            <ChooserWrapper chooserName={"Введите x:"}>
                <TextChooser getValue={state => state.chooser.y} setValue={setY} minValue={-5} maxValue={5} />
            </ChooserWrapper>
            <ChooserWrapper chooserName={"Выберите r:"}>
                <SliderChooser getValue={state => state.chooser.r} setValue={setR} minValue={-5} maxValue={5} />
            </ChooserWrapper>
        </form>
    );
};

export default InputsPanel;