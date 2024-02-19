import {createSlice} from '@reduxjs/toolkit';
import {singIn, singUp} from '@redux/reducers/auth-reducer.ts';

export type DataErrorType = {
    statusCode: 400| 404|409|429| 500,
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
        deleteError: (state)=> {
            state.dataError = null
            state.isResult= false
        },
        setIsResult: (state, action)=> {
            state.isResult = action.payload
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(singUp.pending, (state) => {
        //     state.isPending = true
        // })
        // // builder.addCase(singUp.fulfilled, (state) => {
        // //     state.isPending = false
        // //     state.isResult=true
        // // })
        // builder.addCase(singUp.rejected, (state) => {
        //     state.isPending = false
        //     state.isResult=true
        // })
        //
        // builder.addCase(singIn.pending, (state) => {
        //     state.isPending = true
        //
        // })
        // // builder.addCase(singIn.fulfilled, (state) => {
        // //     state.isPending = false
        // //     state.isResult=true
        // //
        // // })
        //
        // builder.addCase(singIn.rejected, (state, action: any) => {
        //     state.isPending = false
        //     console.log(action.payload)
        //     state.dataError = {
        //         statusCode: action.payload.response.data.statusCode,
        //         error: action.payload.response.data.error,
        //         errorMessage: action.payload.response.data.message
        //     }
        //     state.isResult=true
        // })
    }

})

export const {setIsPending, setIsResult, deleteError} = commonSlice.actions

export const commonReducer = commonSlice.reducer
