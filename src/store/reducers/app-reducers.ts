/* eslint-disable */
import {createSlice, isAnyOf, PayloadAction} from '@reduxjs/toolkit';
import {AllBooksType, getAllBooks, getAllCategories, getBook} from './book-reducer';

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
    currentCategory: string
    isExtraMenu: boolean
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
    currentCategory: '',
    isExtraMenu: false
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
        setError: (state, action) => {
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
        },
        setCurrentCategory: (state, action:PayloadAction<string>)=>{
            state.currentCategory =action.payload
        },
        setExtraMenu: (state, action:PayloadAction<boolean>)=>{
            state.isExtraMenu = action.payload
        }

    },
    extraReducers(builder) {
        builder.addMatcher(
            isAnyOf(getAllBooks.fulfilled, getAllCategories.fulfilled), (state) => {

                state.isLoading = false
            })
        builder.addMatcher(
            isAnyOf(getAllBooks.rejected, getAllCategories.rejected), (state) => {

                state.isLoading = false
            })

            // .addCase(getAllBooks.pending, (state) => {
            //     state.isLoading = true
            // })
            // .addCase(getBook.fulfilled, (state) => {
            //     state.isLoading = false
            // })
            // .addCase(getAllBooks.rejected, (state, action) => {
            //     console.log(action.error)
            //     const {name, message, code} = action.error
            //     state.isLoading = false
            // })

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
    setCurrentCategory,
    setExtraMenu,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
