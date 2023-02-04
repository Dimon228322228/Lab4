import React, {useEffect, useMemo, useRef} from 'react';
import classes from "./Cnavas.module.css";
import {InputModel} from "../../../util/InputModel";
import {CanvasView} from "../../../canvasHendlers/CanvasView";
import {CanvasController} from "../../../canvasHendlers/CanvasController";
import {useDispatch, useSelector} from "react-redux";

const Canvas = ({width, height, ...props}) => {
    const radius = useSelector( state => state.rReducer.radius);
    let canvas = useRef();
    let tipCanvas = useRef();
    let inputModel = new InputModel();
    let canvasView;
    useEffect(() => {
        canvasView = new CanvasView( canvas.current, tipCanvas.current, radius );
    });
    let canvasController = new CanvasController( canvasView, inputModel );
    useEffect(() => {
        canvasController.redraw_canvas( canvasView, [] )
    }, [radius])

    return (
        <>
            <canvas ref={tipCanvas}
                    width={width}
                    height={height}
                    id={"tipCanvas"}
                    className={classes.canvasTip}
            />
            <canvas ref={canvas} className={classes.canvas}
                    width={width} height={height}
                    // onClick={ e => canvasController.request_data(e) }
                    onMouseMove={ e => canvasController.handleMouseMove(e) }
            />
        </>
    );
};

export default Canvas;