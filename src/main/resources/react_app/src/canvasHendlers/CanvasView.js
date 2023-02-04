import {canvasDrawer} from "./CanvasDrawer";
import {Vector} from "../util/Vector";
import {Dot} from "../util/Dot";

export class CanvasView{
    constructor( canvas, tipCanvas, unitR ){
        this.canvas = canvas;
        this._tipCanvas = tipCanvas;
        this.canvasDrawer = new canvasDrawer( canvas, tipCanvas );
        this._canvasDimention = canvas.height;
        this._intervalsNumber = 1;
        this._unitR = unitR;
        this.canvasDrawer.drawBackground( this.canvasDimention/this.intervalsNumber, unitR );
    }

    clear = () => {
        this.canvasDrawer.clearCanvas( this.canvasDimention / this.intervalsNumber, this.unitR );
        this.canvasDrawer.drawBackground( this.canvasDimention / this.intervalsNumber, this.unitR );
    }

    drawBackground = () => {
        this.canvasDrawer.drawBackground( this.canvasDimention/this.intervalsNumber, this.unitR );
    }

    drawTip = dot => {
        let vector = new Vector( dot.x, dot.y);
        vector.fromUnitsToPx(this.canvasDimention / this.intervalsNumber, this.canvasDimention / 2, this.unitR);
        this.canvasDrawer.drawTip( dot, vector );
        this.tip_canvas.style.opacity = 1;
    }

    addPoint = ( hitResults ) => {
        let vector = new Vector( hitResults.x, hitResults.y );
        vector.fromUnitsToPx( this.canvasDimention / this.intervalsNumber,
            this.canvasDimention / 2, this.unitR );
        let dot;
        hitResults.isHit
            ? dot = hitResults.r === this.unitR
                ? new Dot( vector.x, vector.y, "rgba(0, 128, 0, 1)" )
                : new Dot( vector.x, vector.y, "rgba(0, 0, 0, 0.05)" )
            : dot = hitResults.r === this.unitR
                ? new Dot( vector.x, vector.y, "rgba(255, 0, 0, 1)" )
                : new Dot( vector.x, vector.y, "rgba(0, 0, 0, 0.05)" );
        this.canvasDrawer.drawPoint( dot );
    }

    get rDot(){
        return this.canvasDrawer.radius;
    }

    get tip_canvas(){
        return this._tipCanvas;
    }

    get canvasDimention(){
        return this._canvasDimention;
    }

    get intervalsNumber(){
        return this._intervalsNumber;
    }

    get unitR(){
        return this._unitR;
    }
}