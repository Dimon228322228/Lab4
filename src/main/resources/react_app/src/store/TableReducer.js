const defaultState = {
    table: [],
}

const UPDATE_TABLE = "UpdateTable";
const ADD_ELEMENTS = "AddOneElement";

export const TableReducer = (state = defaultState, action) => {
    switch (action.type){
        case UPDATE_TABLE:
            return {...state, table: action.table}
        case ADD_ELEMENTS:
            return {...state, table: [...state.table, action.table]}
        default:
            return state;
    }
}

export const updateTableAction = table => ({type: UPDATE_TABLE, table: table});
export const addElementsAction = table => ({type: ADD_ELEMENTS, table: table});
