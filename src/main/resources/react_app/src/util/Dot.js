export class Dot{
    constructor(x, y, color){
        this._x = x;
        this._y = y;
        this._color = color;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get color(){
        return this._color;
    }
}