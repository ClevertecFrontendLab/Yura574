import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authApi} from '../../../api/api.ts';
import {LoginType, RegisterType} from '../../../api/apiTypes.ts';
import {push} from 'redux-first-history';
import {setIsPending, setRepeatedRequestData} from '@redux/reducers/common-reducer.ts';
import {path, pathName} from '../../../routers/routers.tsx';
import {AxiosError} from 'axios';


export const singUp = createAsyncThunk(
    'auth/registration', async (data: RegisterType, {rejectWithValue, dispatch}) => {
        dispatch(setIsPending(true))
        try {
            const response = await authApi.registrationUser(data)
            dispatch(push(`${pathName.result}/${pathName.success}`, {fromServer: true}))
            dispatch(setIsPending(false))
            return response
        } catch (error) {
            const errors = error as AxiosError
            dispatch(setIsPending(false))
            if (Number(errors.response?.status) === 409) {
                dispatch(push(`${pathName.result}/${pathName.errorUserExist}`, {fromServer: true}))
            } else {
                dispatch(push(`${pathName.result}/${pathName.error}`, {fromServer: true}))
                dispatch(setRepeatedRequestData(data))
            }


            return rejectWithValue(errors.response?.data);
        }
    }
)
export const singIn = createAsyncThunk(
    'auth/login', async (dataLogin: LoginType, {dispatch, rejectWithValue}) => {
        dispatch(setIsPending(true))
        try {

            const response = await authApi.loginUser(dataLogin)
            if (dataLogin.rememberMe && 'accessToken' in response.data) {
                localStorage.setItem('accessToken', response.data.accessToken)
            }
            if (!dataLogin.rememberMe && 'accessToken' in response.data) {
                dispatch(setAccessToken(response.data.accessToken))
            }
            dispatch(push(`${path.main}`))
            dispatch(setIsPending(false))
            return response
        } catch (error) {
            const errors = error as AxiosError
            dispatch(setIsPending(false))
            dispatch(push(`${pathName.result}/${pathName.errorLogin}`, {fromServer: true}))
            return rejectWithValue(errors.response?.data)
        }

    }
)


const initialState = {
    isAuth: !!localStorage.getItem('accessToken'),
    accessToken: null
}

const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('accessToken')
            state.isAuth = false
        },
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(singIn.fulfilled, (state) => {
            state.isAuth = true
        })
    }
})

export const {
    logout,
    setAccessToken,
    setIsAuth
} = authSlice.actions

export const authReducer = authSlice.reducer
