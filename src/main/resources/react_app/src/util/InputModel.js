import {RequestHandler} from "./RequestHandler";
import {store} from "../store";
import {addElementsAction, updateTableAction} from "../store/TableReducer";

export class InputModel{
    constructor( ) {
        this._table = store.getState().tableReducer.table;
        this._r = store.getState().rReducer.radius;
    }

    get table() {
        return this._table;
    }

    get r(){
        return this._r;
    }
    requestData( vector, callback ){
        const requestMap = new Map();
        requestMap.set("x", vector.x);
        requestMap.set("y", vector.y);
        requestMap.set("r", this._r);
        RequestHandler.getData( requestMap )
            .then(resp => callback( resp ))
            .catch(reason => console.log(reason))
            .then(repl => repl ? store.dispatch(addElementsAction(repl)) : store.dispatch(updateTableAction(this._table)));
    }
}