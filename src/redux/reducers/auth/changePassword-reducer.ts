import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ChangePasswordType} from '../../../api/apiTypes.ts';
import {setIsPending} from '@redux/reducers/common-reducer.ts';
import {authApi} from '../../../api/api.ts';
import {push} from 'redux-first-history';
import {pathName} from '../../../routers/routers.tsx';

type InitialStateType = {
    error: boolean
}
const initialState: InitialStateType = {
    error: false
}

export const changePassword = createAsyncThunk('auth/changePassword', async (data: ChangePasswordType, {dispatch}) => {
    dispatch(setIsPending(true))
    try {
        const response = await authApi.changePassword(data)
        dispatch(push(`${pathName.result}/${pathName.successChangePassword}`, {fromState: true}))
        dispatch(setIsPending(false))
        return response
    } catch (error) {
        dispatch(setIsPending(false))
        dispatch(push(`${pathName.result}/${pathName.errorChangePassword}`, {fromState: true}))
    }
})


const changePasswordSlice = createSlice({
    name: 'auth/changePassword',
    initialState,
    reducers: {}
})
export const changePasswordReducer = changePasswordSlice.reducer
