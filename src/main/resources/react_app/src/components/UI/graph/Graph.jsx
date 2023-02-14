import {CanvasDrawer, createGraphParams} from "./CanvasDrawer";
import {
    FILL_STYLE_COLOR, GRAPH_BACKGROUND_COLOR,
    GRAPH_HEIGHT,
    GRAPH_OFFSET,
    GRAPH_TEXT_COLOR, GRAPH_TEXT_ERROR_COLOR,
    GRAPH_WIDTH, POINTER_COLOR,
    STROKE_STYLE_COLOR
} from "../../../util/constants";
import GraphHolder from "./GraphHolder.jsx";
import ClickableGraph from "./ClickableGraph.jsx";
import classes from "./../../MainContent.module.css";

export class PointsDrawer{
    mapCoords( { r, canvasParam }, x, y) {
        return {
            x: x / r * (canvasParam.maxX - canvasParam.startX) + canvasParam.startX,
            y: y / r * (canvasParam.maxY - canvasParam.startY) + canvasParam.startY
        }
    }
    draw = (graph, style, data) => {
        const ctx = graph.canvas;
        for (const userResult of data) {
            const hitResult = userResult.hitResult;
            const { x, y } = this.mapCoords(graph, hitResult.coords.x, hitResult.coords.y);
            const isValid = hitResult.coords.r == graph.r;
            ctx.fillStyle = hitResult.shot.res ? (isValid ? style.hit : style.invalidHit) : (isValid ? style.miss : style.invalidMiss);
            ctx.beginPath();
            ctx.arc( x, y,4,0,2*Math.PI);
            ctx.fill();
        }
    }
}

const Graph = () => {
    const graphDrawer = new CanvasDrawer();
    const pointsDrawer = new PointsDrawer();
    const graphParams = createGraphParams(GRAPH_WIDTH, GRAPH_HEIGHT, GRAPH_OFFSET);
    const graphStyle = {
        strokeStyle: STROKE_STYLE_COLOR,
        fillStyle: FILL_STYLE_COLOR,
        text: GRAPH_TEXT_COLOR,
        backgroundColor: GRAPH_BACKGROUND_COLOR,
        errorColor: GRAPH_TEXT_ERROR_COLOR,
        pointerColor: POINTER_COLOR,
    };
    return (
        <div className={[classes.flexColumn, classes.flexCenter].join(" ")}>
            <GraphHolder graphDrawer={graphDrawer} pointsDrawer={pointsDrawer} graphParams={graphParams} graphStyle={graphStyle}/>
            <ClickableGraph graphParams={graphParams} graphStyle={graphStyle}/>
        </div>
    )
}

export default Graph;