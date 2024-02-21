import {createSlice} from '@reduxjs/toolkit';
import {singIn, singUp} from '@redux/reducers/auth-reducer.ts';

export type DataErrorType = {
    statusCode: 400 | 404 | 409 | 429 | 500,
    error: string,
    errorMessage: string
}

type InitialStateType = {
    isPending: boolean
    dataError: DataErrorType | null
    isResult: boolean
}

const initialState: InitialStateType = {
    isPending: false,
    dataError: null,
    isResult: false

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
        }
    },
    extraReducers: (builder) => {

        builder.addCase(singUp.rejected, (state, action) => {
            console.log(action)
            const errorPayload = action.payload as DataErrorType
            state.dataError = errorPayload            // state.dataError = {...action.payload}
        })
        builder.addCase(singIn.rejected, (state, action) => {
            console.log(action)
            const errorPayload = action.payload as DataErrorType
            state.dataError = errorPayload            // state.dataError = {...action.payload}
        })

    }

})

export const {setIsPending, setIsResult, deleteError} = commonSlice.actions

export const commonReducer = commonSlice.reducer
