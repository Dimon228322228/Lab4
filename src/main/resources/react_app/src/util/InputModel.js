import {RequestHandler} from "./RequestHandler";

export class InputModel{
    constructor( r ) {
        this._r = r;
        this._table = [];
    }

    get table() {
        return this._table;
    }

    get r(){
        return this._r;
    }
    requestData( vector, r, callback ){
        const requestMap = new Map();
        requestMap.set("x", vector.x);
        requestMap.set("y", vector.y);
        requestMap.set("r", r);
        callback( RequestHandler.getData( requestMap ) );
    }
}