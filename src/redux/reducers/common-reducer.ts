import {createSlice} from '@reduxjs/toolkit';

export type DataErrorType = {
    statusCode: 400 | 404 | 409 | 429 | 500,
    error: string,
    errorMessage: string

}

type InitialStateType = {
    isPending: boolean
    email: string
    dataError: DataErrorType | null
    isResult: boolean,
    repeatedRequest: {
            email: string,
            password: string
    } | null
}

const initialState: InitialStateType = {
    isPending: false,
    dataError: null,
    isResult: false,
    repeatedRequest: null,
    email: ''

}

const commonSlice = createSlice({
    name: 'commonReducer',
    initialState,
    reducers: {
        setIsPending: (state, action) => {
            state.isPending = action.payload
        },
        deleteError: (state) => {
            state.dataError = null
            state.isResult = false
        },
        setIsResult: (state, action) => {
            state.isResult = action.payload
        },
        setRepeatedRequestData: ((state, action)=> {
            state.repeatedRequest = action.payload
        }),

        setEmail: (state, action) => {
            state.email = action.payload
        },
    },

})

export const {setIsPending,setEmail, setRepeatedRequestData, setIsResult, deleteError} = commonSlice.actions

export const commonReducer = commonSlice.reducer
