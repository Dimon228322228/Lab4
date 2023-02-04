const defaultState = {
    y: 0,
}

const UPDATE_Y = "UpdateY";

export const YReducer = (state = defaultState, action) => {
    switch (action.type){
        case UPDATE_Y:
            return {...state, y: action.y}
        default:
            return state;
    }
}

export const updateYAction = y => ({type: UPDATE_Y, y: y});