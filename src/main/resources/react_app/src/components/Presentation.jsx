import React from 'react';
import OutputItem from "./UI/outputItem/OutputItem";

const Presentation = ({group, name, variant, ...props}) => {
    return (
        <>
            <OutputItem variable={name} describe={"Имя"}/>
            <OutputItem variable={group} describe={"Группа"}/>
            <OutputItem variable={variant} describe={"Вариант"}/>
        </>
    );
};

export default Presentation;