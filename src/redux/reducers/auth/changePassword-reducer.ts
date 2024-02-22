import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ChangePasswordType} from '../../../api/apiTypes.ts';
import {setIsPending} from '@redux/reducers/common-reducer.ts';
import {authApi} from '../../../api/api.ts';

type InitialStateType = {
    error: boolean
}
const initialState: InitialStateType = {

    error: false
}

export const changePassword = createAsyncThunk('auth/changePassword', async (data: ChangePasswordType, {dispatch})=> {
    dispatch(setIsPending(true))
    try {
        console.log(data)
        const response = await authApi.changePassword(data)
        console.log(response)
        dispatch(setIsPending(false))
        return response
    } catch (error) {
        dispatch(setIsPending(false))
        console.log(error)
    }
})


const changePasswordSlice = createSlice({
    name: 'auth/changePassword',
    initialState,
    reducers: {

    }
})
// export const {} = changePasswordSlice.actions
export const checkEmailReducer = changePasswordSlice.reducer
