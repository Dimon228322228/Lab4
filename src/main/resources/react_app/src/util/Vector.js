export class Vector{

    constructor(x, y){
        this._x = x;
        this._y = y;
    }

    // offset - this.canvasDimension / 2
    // unitRSizePx = canvasDimension / intervalsNumber
    fromPxToUnits = (unitRSizePx, offset, unitR) => {
        this.unshiftOffset(offset);
        this.scaleFromPx(unitRSizePx, unitR);
    }

    fromUnitsToPx = ( unitRSizePx, offset, unitR ) => {
        this.scaleToPx(unitRSizePx, unitR);
        this.shiftToAxisCenter(offset);
    }

    scaleToPx = (unitRSizePx, unitR) => {
        this._x *= unitRSizePx / unitR / unitR;
        this._y *= unitRSizePx / unitR / unitR;
    }

    scaleFromPx = (unitRSizePx, unitR) => {
        this._x /= unitRSizePx
        this._x *= unitR;
        this._x *= unitR;
        this._y /= unitRSizePx;
        this._y *= unitR;
        this._y *= unitR;
    }

    shiftToAxisCenter = (offset) => {
        this._x += offset;
        this._y -= offset;
        this._y = -this.y;
    }

    unshiftOffset = (offset) => {
        this._x -= offset;
        this._y = -this.y;
        this._y += offset;
    }

    toString = () => {
        return `(${this.x}, ${this.y})`;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }
}