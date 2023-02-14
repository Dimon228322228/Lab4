import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    itemPerPage: 3,
}

export const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setItemPerPage: (state, action) => {
            state.itemPerPage = action.payload;
        }
    }
})

export const {setCurrentPage, setItemPerPage} = paginationSlice.actions;

export default paginationSlice.reducer;
