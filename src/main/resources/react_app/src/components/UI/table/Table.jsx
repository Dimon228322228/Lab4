import React from 'react';
import classes from "./Table.module.css";
import classes1 from "../../MainContent.module.css"
import TableItem from "./TableItem.jsx";
const Table = ({hitResults, isLoading, ...props}) => {
    return (
        <>
        <div className={[classes1.flexCenter, classes.wrapHeader, classes1.textBlue20].join(" ")}> <p> Таблица результатов </p></div>
        <div className={[classes1.flexColumn, classes.table].join(" ")}>
            { hitResults != undefined ? hitResults.map(hitResult => <TableItem userHitResult={hitResult} key={hitResult.number.toString()}/>) : ''}
        </div>
        </>
    );
};

export default Table;