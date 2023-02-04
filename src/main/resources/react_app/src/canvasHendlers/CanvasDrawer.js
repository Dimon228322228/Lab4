import {getHeightText} from "../util/UtilFunction";

export class canvasDrawer {

    constructor(canvas, tipCanv) {
        this.canvas = canvas;
        this.tipCanvas = tipCanv;
        this.ctx = canvas.getContext('2d');
        this.tip_ctx = this.tipCanvas.getContext('2d');
        this.height = this.canvas.height;
        this.width = this.canvas.width;
        this._radius = 1;
    }

    get radius() {
        return this._radius;
    }

    drawPoint(dot) {
        let dotCircle = new Path2D();
        dotCircle.arc(dot.x, dot.y, this._radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = dot.color;
        this.ctx.fill(dotCircle);
    }

    drawTip(dot, vector) {
        this.tipCanvas.style.left = (vector.x) + "px";
        this.tipCanvas.style.top = (vector.y - 20) + "px";
        this.tip_ctx.clearRect(0, 0, this.tipCanvas.width, this.tipCanvas.height);
        this.tip_ctx.font = "14px sans-serif";
        this.tip_ctx.fillStyle = `rgb(${185 / 4}, ${95 / 4}, ${11 * 10})`;
        this.tip_ctx.fillText(` X: ${dot.x}; Y: ${dot.y}; R: ${dot.r}; `, 5, 20);
    }

    clearCanvas(unitRSizePx) {
        this.ctx.clearRect(-unitRSizePx + this.canvas.width / 2, -unitRSizePx + this.canvas.width / 2, unitRSizePx + this.canvas.width / 2, unitRSizePx + this.canvas.width / 2);
    }

    drawBackground(unitRSizePx, unitR) {
        this.drawAxises();
        this.drawLeftTopSquareCircle(unitRSizePx, unitR);
        this.drawRectangle(unitRSizePx, unitR);
        this.drawTriangle(unitRSizePx, unitR);
        this.drawText(unitRSizePx, unitR);
    }

    drawAxises() {
        this.ctx.strokeStyle = '#000';
        this.ctx.fillStyle = '#000';
        let xAxis = new Path2D();
        let yAxis = new Path2D();
        let axisTriangles = new Path2D();

        xAxis.moveTo(0, this.height / 2);
        xAxis.lineTo(this.width, this.height / 2);
        yAxis.moveTo(this.width / 2, 0);
        yAxis.lineTo(this.width / 2, this.height);
        yAxis.addPath(xAxis);
        this.ctx.stroke(yAxis);

        axisTriangles.moveTo(this.width, this.height / 2);
        axisTriangles.lineTo(this.width - 10, (this.height / 2) - 5);
        axisTriangles.lineTo(this.width - 10, (this.height / 2) + 5);
        axisTriangles.closePath();
        axisTriangles.moveTo(this.width / 2, 0);
        axisTriangles.lineTo((this.width / 2) + 5, 10);
        axisTriangles.lineTo((this.width / 2) - 5, 10);
        this.ctx.fill(axisTriangles);
    }

    drawLeftTopSquareCircle(unitRSizePx, unitR) {
        this.ctx.fillStyle = 'rgba(28,73,255,0.55)';
        let path = new Path2D();
        path.moveTo(this.width / 2, this.height / 2);
        path.arc(this.width / 2, this.height / 2, unitRSizePx / 2 / unitR, 0, - Math.PI / 2, true);
        path.closePath();
        this.ctx.fill(path);
    }

    drawRectangle(unitRSizePx, unitR) {
        let path = new Path2D();
        this.ctx.fillStyle = 'rgba(28,73,255,0.55)';
        path.rect(this.width / 2 - unitRSizePx / unitR, this.height / 2, unitRSizePx / unitR, unitRSizePx / unitR);
        this.ctx.fill(path);
    }

    drawTriangle(unitRSizePx, unitR) {
        let path = new Path2D();
        this.ctx.fillStyle = 'rgba(28,73,255,0.55)';
        path.moveTo(this.width / 2, this.height / 2);
        path.lineTo(this.width / 2, (this.height / 2) + unitRSizePx / unitR);
        path.lineTo((this.width / 2) + unitRSizePx / unitR, this.height / 2);
        this.ctx.fill(path);
    }

    drawText(unitRSizePx, unitR) {
        this.ctx.font = "14px sans-serif";
        this.ctx.fillStyle = '#000';
        let dashes = new Path2D();
        let newUnitRSizePx = unitRSizePx / unitR;
        dashes.moveTo((this.width / 2) - (newUnitRSizePx / 2), (this.height / 2) + 5);
        dashes.lineTo((this.width / 2) - (newUnitRSizePx / 2), (this.height / 2) - 5);
        dashes.moveTo((this.width / 2) - newUnitRSizePx, (this.height / 2) + 5);
        dashes.lineTo((this.width / 2) - newUnitRSizePx, (this.height / 2) - 5);
        dashes.moveTo((this.width / 2) + (newUnitRSizePx / 2), (this.height / 2) + 5);
        dashes.lineTo((this.width / 2) + (newUnitRSizePx / 2), (this.height / 2) - 5);
        dashes.moveTo((this.width / 2) + newUnitRSizePx, (this.height / 2) + 5);
        dashes.lineTo((this.width / 2) + newUnitRSizePx, (this.height / 2) - 5);
        dashes.moveTo((this.width / 2) + 5, (this.height / 2) + (newUnitRSizePx / 2));
        dashes.lineTo((this.width / 2) - 5, (this.height / 2) + (newUnitRSizePx / 2));
        dashes.moveTo((this.width / 2) + 5, (this.height / 2) + newUnitRSizePx);
        dashes.lineTo((this.width / 2) - 5, (this.height / 2) + newUnitRSizePx);
        dashes.moveTo((this.width / 2) + 5, (this.height / 2) - (newUnitRSizePx / 2));
        dashes.lineTo((this.width / 2) - 5, (this.height / 2) - (newUnitRSizePx / 2));
        dashes.moveTo((this.width / 2) + 5, (this.height / 2) - newUnitRSizePx);
        dashes.lineTo((this.width / 2) - 5, (this.height / 2) - newUnitRSizePx);
        this.ctx.stroke(dashes);

        let unsignStrR = `${unitR}`;
        let sign_strR = `${-unitR}`;
        let halfUnsignStrR = `${unitR / 2}`;
        let halfSignStrR = `${-unitR / 2}`;
        let heightText = getHeightText(unsignStrR).height;
        this.ctx.textBaseLine = 'top';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(halfSignStrR, (this.width / 2) - (newUnitRSizePx / 2), (this.height / 2) - heightText / 2 - 1);
        this.ctx.fillText(sign_strR, (this.width / 2) - newUnitRSizePx, (this.height / 2) - heightText / 2 - 1);
        this.ctx.fillText(halfUnsignStrR, (this.width / 2) + (newUnitRSizePx / 2), (this.height / 2) - heightText / 2 - 1);
        this.ctx.fillText(unsignStrR, (this.width / 2) + newUnitRSizePx, (this.height / 2) - heightText / 2 - 1);
        this.ctx.fillText(halfSignStrR,
            (this.width / 2) + this.ctx.measureText(halfSignStrR).width,
            (this.height / 2) + (newUnitRSizePx / 2) + (heightText / 4));
        this.ctx.fillText(sign_strR,
            (this.width / 2) + this.ctx.measureText(sign_strR).width * 1.2,
            (this.height / 2) + newUnitRSizePx + (heightText / 4));
        this.ctx.fillText(halfUnsignStrR,
            (this.width / 2) + this.ctx.measureText(halfUnsignStrR + " ").width,
            (this.height / 2) - (newUnitRSizePx / 2) + (heightText / 4));
        this.ctx.fillText(unsignStrR,
            (this.width / 2) + this.ctx.measureText(unsignStrR + " ").width,
            (this.height / 2) - newUnitRSizePx + (heightText / 4));
        this.ctx.fillText("X", this.width - this.ctx.measureText("X").width / 2, (this.height / 2) + 20);
        this.ctx.fillText("Y", (this.width / 2) - this.ctx.measureText("X").width, 12);
    }
}