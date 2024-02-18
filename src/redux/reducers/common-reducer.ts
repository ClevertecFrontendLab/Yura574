import {createSlice} from '@reduxjs/toolkit';
import {singIn, singUp} from '@redux/reducers/auth-reducer.ts';


const initialState = {
    isPending: false,
    dataError: {
        statusCode: null,
        error: null,
        errorMessage: ''
    },

}

const commonSlice = createSlice({
    name: 'commonReducer',
    initialState,
    reducers: {
        setIsPending: (state, action) => {
            state.isPending = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(singUp.pending, (state) => {
            state.isPending = true
        })
        builder.addCase(singUp.fulfilled, (state) => {
            state.isPending = false
        })
        builder.addCase(singUp.rejected, (state) => {
            state.isPending = false
        })

        builder.addCase(singIn.pending, (state) => {
            state.isPending = true

        })

        builder.addCase(singIn.rejected, (state, action: any) => {
            state.isPending = false
            state.dataError.errorMessage= action.payload.response.data.message
            state.dataError.error= action.payload.response.data.error
            state.dataError.statusCode= action.payload.response.data.statusCode
        })
    }

})

export const {setIsPending} = commonSlice.actions

export const commonReducer = commonSlice.reducer
