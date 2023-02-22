/* eslint-disable */
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AllBooksType, getAllBooks, getBook} from "./book-reducer";

export type ErrorType = {
    "data": string | null;
    "error": {
        "status": number;
        "name": string;
        "message": string;
        "details": {}
    }

}
type InitialStateType = {
    isToggleMenu: boolean,
    isToggleList: boolean,
    activeLink: boolean,
    isLoading: boolean,
    error: ErrorType | null
    sortByRating: boolean
    inputSortValue: string
    searchData: AllBooksType[]
}
const initialState: InitialStateType = {
    isToggleMenu: false,
    isToggleList: true,
    activeLink: true,
    isLoading: false,
    error: null,
    sortByRating: true,
    inputSortValue: '',
    searchData: [],
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setIsToggleMenu: (state, action: PayloadAction<boolean>) => {
            state.isToggleMenu = action.payload;
        },
        setActiveLink: (state, action: PayloadAction<boolean>) => {
            state.activeLink = action.payload;
        },
        setIsToggleList: (state, action: PayloadAction<boolean>) => {
            state.isToggleList = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
            document.body.style.overflow = 'hidden'
        },
        setError: (state, action: PayloadAction<ErrorType | null>) => {
            state.error = action.payload
        },
        isSortByRating: (state, action: PayloadAction<boolean>) => {
            state.sortByRating = action.payload
        },
        setInputSortValue: (state, action:PayloadAction<string>)=>{
            state.inputSortValue = action.payload
        },
        setSearchData: (state, action:PayloadAction<AllBooksType[]>)=>{
            state.searchData = action.payload
        }

    },
    extraReducers(builder) {
        builder
            .addCase(getAllBooks.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(getBook.fulfilled, (state) => {
                state.isLoading = false
            })
    }


});

export const {
    setIsToggleMenu,
    setActiveLink,
    setIsToggleList,
    setIsLoading,
    setError,
    isSortByRating,
    setInputSortValue,
    setSearchData,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
