export class HitResult {
    constructor(x, y, r, isHit, currentTime, executionTime) {
        this._x = x;
        this._y = y;
        this._r = r;
        this._isHit = isHit;
        this._currentTime = currentTime;
        this._executionTime = executionTime;
    }

    get executionTime() {
        return this._executionTime;
    }
    get currentTime() {
        return this._currentTime;
    }
    get isHit() {
        return this._isHit;
    }
    get r() {
        return this._r;
    }
    get y() {
        return this._y;
    }
    get x() {
        return this._x;
    }
}