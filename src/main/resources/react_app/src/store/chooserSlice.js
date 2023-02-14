import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = {
    x: undefined,
    y: undefined,
    r: undefined
}

export const chooserSlice = createSlice({
    name: 'chooser',
    initialState,
    reducers: {
        setX: (state, action) => {
            state.x = action.payload;
        },
        setY: (state, action) => {
            state.y = action.payload;
        },
        setR: (state, action) => {
            state.r = action.payload;
        },
    }
})

export const { setX, setY, setR } = chooserSlice.actions;

export const selectIsRadiusSet = createSelector( state => state.r, item => item === undefined || item === 0 );

export default chooserSlice.reducer;