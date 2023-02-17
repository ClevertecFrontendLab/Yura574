/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    pageSize: 8,
    currentPage: 1,
    siblingCount: 1,
    searchBookOrAuthor: ''
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setSearchBookOrAuthor : (state, action:PayloadAction<string>)=>{
            state.searchBookOrAuthor = action.payload
        }
    }
});

export const {setCurrentPage, setSearchBookOrAuthor} = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
