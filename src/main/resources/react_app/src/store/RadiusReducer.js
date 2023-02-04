const defaultState = {
    radius: 1,
}
const UPDATE_RADIUS = "UpdateRadius";

export const radiusReducer = (state = defaultState, action) => {
    switch (action.type){
        case UPDATE_RADIUS:
            return {...state, radius: action.radius}
        default:
            return state;
    }
}

export const updateRAction = r => ({ type: UPDATE_RADIUS, radius: r });