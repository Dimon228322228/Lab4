import React from 'react';
import classes from "./MainContent.module.css";
import Presentation from "./Presentation";
import Canvas from "./UI/canvas/Canvas";
import InputsPanel from "./InputsPanel";
import Table from "./UI/table/Table";

const MainContent = () => {
    return (
        <div className={[classes.flexRow, classes.flexCenter, classes.marginTop24].join(" ")}>
            <div className={[classes.flexColumn, classes.childWidth20].join(' ')}>
                <Presentation  group={"P32302"} name={"Лазарев Дмитрий Иванович"} variant={"336684"}/>
            </div>
            <div className={[classes.flexColumn, classes.childWidth70, classes.marginBottom10].join(' ')}>
                <div className={[classes.flexRow, classes.spaceAround].join(" ")}>
                    <div className={classes.graph}>
                        <Canvas width={"600px"} height={"400px"}/>
                    </div>
                    <div className={classes.inputs}>
                        <InputsPanel/>
                    </div>
                </div>
                <div>
                    <Table/>
                </div>
            </div>
        </div>
    );
};

export default MainContent;