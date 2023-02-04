import React from 'react';
import classes from "./Table.module.css";
import classes1 from "../../MainContent.module.css";
import MyButton from "../button/MyButton";

const TableItem = ({numberOfShot, isShoot, x, y, r, executeTime, currentTime, ...props}) => {
    return (
        <div className={[classes1.flexColumn, classes.allContent].join(" ")}>
            <div className={[classes1.flexRow, classes1.spaceBetween, classes1.alignBaseLine, classes1.marginBottom10].join(" ")}>
                <div className={[classes1.flexRow, classes.mainContent, classes1.textBlue20].join(" ")}>
                    <p>{ numberOfShot }</p>
                    <p>{ isShoot }</p>
                    <p>X: { x }</p>
                    <p>Y: { y }</p>
                    <p>R: { r }</p>
                </div>
                <MyButton styles={classes1.textBlue20}>Удалить</MyButton>
            </div>
            <div className={[classes1.flexRow, classes.timeBlock, classes1.textBlue20].join(" ")}>
                <p> Время запроса: { currentTime }</p>
                <p> Время исполнения запроса: { executeTime }</p>
            </div>
        </div>
    );
};

export default TableItem;