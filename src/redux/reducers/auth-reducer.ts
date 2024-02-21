import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authApi} from '../../api/api.ts';
import {LoginType, RegisterType} from '../../api/apiTypes.ts';
import {push} from 'redux-first-history';
import {setIsPending} from '@redux/reducers/common-reducer.ts';
import {pathName} from '../../routers/routers.tsx';


export const singUp = createAsyncThunk(
    'auth/registration', async (data: RegisterType, {rejectWithValue, dispatch}) => {
        dispatch(setIsPending(true))
        try {

            const response = await authApi.registrationUser(data)
            console.log(response)
            dispatch(push(`${pathName.result}/${pathName.success}`, {fromServer: true}))
            dispatch(setIsPending(false))
            return response
        } catch (error: any) {
            dispatch(setIsPending(false))

            // error.response.data.statusCode === 409
                dispatch(push(`${pathName.result}/${pathName.errorUserExist}`, {fromServer: true}))
                // :dispatch(push(`${pathName.result}/${pathName.error}`, {fromServer: true}))

            return rejectWithValue(error.response.data);
        }
    }
)

export const singIn = createAsyncThunk(
    'auth/login', async (dataLogin: LoginType, {dispatch, rejectWithValue}) => {
        dispatch(setIsPending(true))
        try {
            console.log(dataLogin)
            const response = await authApi.loginUser(dataLogin)
            if (dataLogin.rememberMe && 'accessToken' in response.data) {
                localStorage.setItem('token', response.data.accessToken
                )
            }
            dispatch(push(`${pathName.main}`, {fromServer: true}))
            dispatch(setIsPending(false))
            return response
        } catch (error: any) {
            dispatch(setIsPending(false))
            dispatch(push(`${pathName.result}/${pathName.errorLogin}`, {fromServer: true}))
            return rejectWithValue(error.response.data)
        }

    }
)


const initialState = {
    isAuth: !!localStorage.getItem('token')
}

const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        logout: (state)=>{
            localStorage.removeItem('token')
            state.isAuth =false
}
    },
    extraReducers: (builder) => {
        builder.addCase(singIn.fulfilled, (state, action) => {
            state.isAuth = true
            console.log(action.payload)
        })
    }
})

export const {logout}= authSlice.actions

export const authReducer = authSlice.reducer
