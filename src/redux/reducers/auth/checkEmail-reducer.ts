import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setEmail, setIsPending} from '@redux/reducers/common-reducer.ts';
import {authApi} from '../../../api/api.ts';
import {push} from 'redux-first-history';
import {pathName} from '../../../routers/routers.tsx';
import {ConfirmType} from '../../../api/apiTypes.ts';
import {AxiosError} from 'axios';

type InitialStateType = {
    repeatedCheckEmail: string | null
    email: string,
    error: boolean
}
const initialState: InitialStateType = {
    repeatedCheckEmail: null,
    email: '',
    error: false
}

export const checkEmail = createAsyncThunk('auth/check-email', async (email: string, {dispatch}) => {
    dispatch(setIsPending(true))
    try {
        const response = await authApi.checkEmail(email)
        dispatch(setIsPending(false))
        dispatch(push(`${pathName.auth}/${pathName.confirmEmail}`,{fromServer: true}))
        dispatch(setEmail(email))
        console.log(response)
        return response
    } catch (err) {
        const error = err as AxiosError

        if (Number(error.response?.status) === 404) {
            dispatch(push(`${pathName.result}/${pathName.errorCheckEmailNoExist}`, {fromServer: true}))
        } else {

            dispatch(push(`${pathName.result}/${pathName.errorCheckEmail}`, {fromServer: true}))
            dispatch(setRepeatedCheckEmail(email))
        }
        dispatch(setIsPending(false))
    }
})

export const confirmEmail = createAsyncThunk('auth/confirmEmail', async (data: ConfirmType, {dispatch}) => {
    dispatch(setIsPending(true))
    try {
        const response =await authApi.confirmEmail(data)
        dispatch(setIsPending(false))
        dispatch(push(`${pathName.auth}/${pathName.changePassword}`,{fromServer: true}))
        return response
    } catch (error) {
        dispatch(setIsPending(false))
        dispatch(setError(true))

    }
})

const checkEmailSlice = createSlice({
    name: 'checkEmailReducer',
    initialState,
    reducers: {
        setRepeatedCheckEmail: (state, action: PayloadAction<string | null>) => {
            state.repeatedCheckEmail = action.payload
        },
        // setEmail: (state, action) => {
        //     state.email = action.payload
        // },
        setError: (state, action)=> {
            state.error = action.payload
        }
    }
})
export const {setRepeatedCheckEmail, setError} = checkEmailSlice.actions
export const checkEmailReducer = checkEmailSlice.reducer
