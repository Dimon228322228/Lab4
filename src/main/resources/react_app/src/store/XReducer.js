const defaultState = {
    x: 0,
}

const UPDATE_X = "UpdateX";

export const XReducer = (state = defaultState, action) => {
    switch (action.type){
        case UPDATE_X:
            return {...state, x: action.x}
        default:
            return state;
    }
}

export const updateXAction = x => ({type: UPDATE_X, x: x});