/* eslint-disable */
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appReducer } from "./reducers/app-reducers";
import {booksReducer} from "./reducers/book-reducer";
import {paginationReducer} from "./reducers/pagination-reducers";


const rootReducer = combineReducers({
    app: appReducer,
    books: booksReducer,
    pagination: paginationReducer,
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

// @ts-ignore
window.store = store;
