import React from 'react';
import classes from "./Table.module.css";
import classes1 from "../../MainContent.module.css";
import MyButton from "../button/MyButton.jsx";

const TableItem = ({userHitResult, ...props}) => {
    const hitResult = userHitResult.hitResult;
    return (
        <div className={[classes1.flexColumn, classes.allContent].join(" ")}>
            <div className={[classes1.flexRow, classes1.spaceBetween, classes1.alignBaseLine, classes1.marginBottom10].join(" ")}>
                <div className={[classes1.flexRow, classes.mainContent, classes1.textBlue20].join(" ")}>
                    <p>{ hitResult.number + 1 }</p>
                    <p>{ hitResult.message }</p>
                    <p>X: { hitResult.coordinate.x.toFixed(2) }</p>
                    <p>Y: { hitResult.coordinate.y.toFixed(2) }</p>
                    <p>R: { hitResult.coordinate.r.toFixed(2) }</p>
                </div>
                <MyButton styles={classes1.textBlue20}>Удалить</MyButton>
            </div>
            <div className={[classes1.flexRow, classes.timeBlock, classes1.textBlue20].join(" ")}>
                <p> Время запроса: { new Date(hitResult.currentTime).toTimeString() }</p>
                <p> Время исполнения запроса: { hitResult.executeTime }</p>
            </div>
        </div>
    );
};

export default TableItem;