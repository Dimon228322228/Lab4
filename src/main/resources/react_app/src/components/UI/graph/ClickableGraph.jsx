import React, {useRef} from "react";
import {useSelector} from "react-redux";
import {useShootMutation} from "../../../services/htiResults";

class ClickGraphDrawer {
    clear = (graph) =>{
        graph.canvas.clearRect(0,0,graph.width,graph.height)
    }
    draw = (graph, style, data) => {
        const ctx = graph.canvas;
        const {x, y} = data;
        this.clear(graph);
        ctx.strokeStyle = style.pointerColor;
        //draw crosshair
        ctx.beginPath();
        ctx.moveTo(x-7,y);
        ctx.lineTo(x+7,y);
        ctx.moveTo(x,y-7);
        ctx.lineTo(x,y+7);
        ctx.stroke();
    }
}
const ClickableGraph = ({canvasParam, graphStyle}) => {
    const drawer = new ClickGraphDrawer();
    const canvas = useRef();
    const isRadiusInvalid = (radius) => radius==undefined || radius==0;
    const getOffsets = e => {
        return {
            x: e.clientX - canvas.current.getBoundingClientRect().left,
            y: e.clientY - canvas.current.getBoundingClientRect().top
        }
    }
    const mapCoords = (graph, x, y) => {
        return {
            x: Math.round((x - graph.startX)*graph.r/(graph.maxX - graph.startX) * 100) / 100,
            y: Math.round((y - graph.startY)*graph.r/(graph.maxY - graph.startY) * 100) / 100
        }
    }
    const r = useSelector(state => state.chooser.r)
    const [shootPost, {}] = useShootMutation();


    const graph = canvas.current==undefined ? undefined : {canvas: canvas.current.getContext('2d'), canvasParam, r};

    const onMouseMove = (e) => {
        if ( !isRadiusInvalid(r) ) {
            const {x, y} = getOffsets(e);
            drawer.draw(graph, graphStyle, { x, y })
        }
    }
    const onMouseLeave = (e) => {
        if ( !isRadiusInvalid(r) ) drawer.clear(graph);
    }
    const onMouseClick = (e) => {
        if ( !isRadiusInvalid(r) ) {
            const {x, y} = getOffsets(e);
            const { x: xMapped, y: yMapped } = mapCoords(graph, x, y);
            shootPost({x: xMapped, y: yMapped, r});
        }
    }

    return (
        <canvas
            width={canvasParam.width}
            height={canvasParam.height}
            ref={canvas}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={onMouseClick}
            // className={styles.layer1}
        />
    )
}

export default ClickableGraph;