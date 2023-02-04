import React from 'react';
import classes from "./Table.module.css";
import classes1 from "../../MainContent.module.css"
import TableItem from "./TableItem";

const Table = () => {
    return (
        <>
        <div className={[classes1.flexCenter, classes.wrapHeader, classes1.textBlue20].join(" ")}> <p> Таблица результатов </p></div>
        <div className={[classes1.flexColumn, classes.table].join(" ")}>
            <TableItem currentTime={1} executeTime={1} isShoot={"Попал"} numberOfShot={"1"} r={2} x={"2"} y={"3"}/>
            <TableItem currentTime={1} executeTime={1} isShoot={"Попал"} numberOfShot={"1"} r={2} x={"2"} y={"3"}/>
            <TableItem currentTime={1} executeTime={1} isShoot={"Попал"} numberOfShot={"1"} r={2} x={"2"} y={"3"}/>
            <TableItem currentTime={1} executeTime={1} isShoot={"Попал"} numberOfShot={"1"} r={2} x={"2"} y={"3"}/>
            <TableItem currentTime={1} executeTime={1} isShoot={"Попал"} numberOfShot={"1"} r={2} x={"2"} y={"3"}/>
            <TableItem currentTime={1} executeTime={1} isShoot={"Попал"} numberOfShot={"1"} r={2} x={"2"} y={"3"}/>
        </div>
        </>
    );
};

export default Table;