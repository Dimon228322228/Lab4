import {Vector} from "../util/Vector";

export class CanvasController{
    constructor( canvasView, inputModel ){
        this._canvasView = canvasView;
        this._inputModel = inputModel;
    }

    request_data = e => {
        let vector = getPosition( e );
        vector.fromPxToUnits( this.canvasView.canvasDimention / this.canvasView.intervalsNumber, this.canvasView.canvasDimention / 2, this.canvasView.unitR );
        this._inputModel.requestData( vector, this.redraw_canvas );
    }

    handleMouseMove = event => {
        let mouseX = event.offsetX;
        let mouseY = event.offsetY;
        for (let i = 0; i < this._inputModel.table.length; i++) {
            let dot = this._inputModel.table[i];
            let vector = new Vector( dot.x, dot.y );
            vector.fromUnitsToPx( this.canvasView.canvasDimention / this.canvasView.intervalsNumber, this.canvasView.canvasDimention / 2, this.canvasView.unitR );
            let dx = mouseX - vector.x;
            let dy = mouseY - vector.y;
            if (dx * dx + dy * dy < this._canvasView.rDot) {
                this._canvasView.drawTip( dot );
                setTimeout( this.hide_tip , 3000);
            }
        }
    }

    hide_tip = () => {
        this._canvasView.tip_canvas.style.left = '-200px';
        this._canvasView.tip_canvas.style.opacity = 0;
    }

    redraw_canvas = table => {
        this.canvasView.clear();
        table.forEach(item => { this.canvasView.addPoint(item) });
    }

    set canvasView ( canvasView ){
        this._canvasView = canvasView
    }

    get canvasView (){
        return this._canvasView;
    }
}
const getPosition = e => { return new Vector( e.nativeEvent.offsetX, e.nativeEvent.offsetY ); }