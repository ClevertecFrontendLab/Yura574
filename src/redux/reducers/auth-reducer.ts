import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authApi} from '../../api/api.ts';
import {LoginType} from '../../api/apiTypes.ts';
import {push} from 'redux-first-history';
import {setIsPending} from '@redux/reducers/common-reducer.ts';


export const singUp = createAsyncThunk(
    'auth/registration', async (data: LoginType, {rejectWithValue, dispatch}) => {
        try {
            const response = await authApi.registrationUser(data)
            console.log(response)
            dispatch(push('/result/success', {fromServer: true}))
            return response
        } catch (error: any) {
            console.log(error)
            dispatch(push('/result/error', {fromServer: true}))
            return rejectWithValue(error.response.data);
        }
    }
)

export const singIn = createAsyncThunk(
    'auth/login', async (dataLogin: LoginType, {dispatch, rejectWithValue}) => {
        dispatch(setIsPending(true))
        try {
            const response = await authApi.loginUser(dataLogin)
            console.log(response)
            dispatch(push('/result/success', {fromServer: true}))
            dispatch(setIsPending(false))
            return  response
        } catch (error: any) {
            dispatch(setIsPending(false))
            dispatch(push('/result/error', {fromServer: true}))
            return rejectWithValue(error)
        }

    }
)


const initialState = {
    isAuth: false
}

const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(singIn.fulfilled, (state, action) => {
            state.isAuth = true
            debugger
            console.log(action.payload)
        })
    }
})

export const authReducer = authSlice.reducer
