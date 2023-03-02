/* eslint-disable */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppRootStateType} from '../store';
import {authApi} from '../../api/api';
import {setError, setIsLoading} from './app-reducers';
import {AxiosError} from 'axios';

type InitialStateType = {
    isAuth: boolean
    registryStep: number
    registryData: RegisterDataType
    userData: UserDataType
}
const initialState: InitialStateType = {
    isAuth: false,
    registryStep: 1,
    registryData: {
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: ''
    },
    userData: {
        id: 0,
        username: '',
        email: '',
        provider: '',
        confirmed: true,
        blocked: false,
        createdAt: '',
        updatedAt: '',
        firstName: '',
        lastName: '',
        phone: ''
    }
}

export const registryUserTC = createAsyncThunk('registry', async (arg, {
    getState,
    dispatch,
    rejectWithValue,
}) => {
    dispatch(setIsLoading(true))
    const state = getState() as AppRootStateType
    try {
        dispatch(setIsLoading(false))
        const res = await authApi.register(state.auth.registryData)
        return res.data
    } catch (err) {
        dispatch(setIsLoading(false))

        const error = err as AxiosError
        dispatch(setError(error.response?.data))
        return rejectWithValue('some error')
    }
})
export const authMeTC = createAsyncThunk('authMe', async (arg, {dispatch, rejectWithValue}) => {
    dispatch(setIsLoading(true))
    try {
        dispatch(setIsLoading(false))
        const res  = await authApi.auth()
        return res.data
    } catch (e) {
        dispatch(setIsLoading(false))
    }
})
export const loginTC = createAsyncThunk('authMe', async (loginData: LoginDataType, {dispatch, rejectWithValue}) => {
    dispatch(setIsLoading(true))
    try {
        dispatch(setIsLoading(false))
        const res  = await authApi.login(loginData)
        return res.data
    } catch (e) {
        dispatch(setIsLoading(false))
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        setRegistryDataLoginPassword: (state, action: PayloadAction<{ login: string, password: string, registryStep: number }>) => {
            state.registryData.username = action.payload.login
            state.registryData.password = action.payload.password
            state.registryStep = 2
        },
        setRegistryDataName: (state, action: PayloadAction<{ firstName: string, lastName: string, registryStep: number }>) => {
            state.registryData.firstName = action.payload.firstName
            state.registryData.lastName = action.payload.lastName
            state.registryStep = 3
        },
        setRegistryDataEmailPhone: (state, action: PayloadAction<{ email: string, phone: string }>) => {
            state.registryData.email = action.payload.email
            state.registryData.phone = action.payload.phone
        },
    },
    extraReducers( builder) {
     builder
         .addCase(loginTC.fulfilled, (state, action)=>{
             state.isAuth = true
         } )
    }
})

export const {
    setIsAuth,
    setRegistryDataLoginPassword,
    setRegistryDataName,
    setRegistryDataEmailPhone
} = authSlice.actions
export const authReducer = authSlice.reducer


export type RegisterDataType = {
    email: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string
}
export type LoginDataType = {
    identifier: string,
    password: string
}
export type ForgotPasswordData = {
    email: string
}

export type ResetPasswordType = {
    password: string,
    passwordConfirmation: string,
    code: string
}

type UserDataType = {
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string,
    firstName: string,
    lastName: string,
    phone: string
}

