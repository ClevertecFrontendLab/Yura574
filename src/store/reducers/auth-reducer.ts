/* eslint-disable */
import {createAsyncThunk, createSlice, isAnyOf, PayloadAction} from '@reduxjs/toolkit';
import {AppRootStateType} from '../store';
import {authApi} from '../../api/api';
import {setError, setIsLoading} from './app-reducers';
import {AxiosError} from 'axios';
import {getAllBooks, getAllCategories} from './book-reducer';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;
import {log} from 'util';

type InitialStateType = {
    isAuth: boolean
    registryStep: number
    registryData: RegisterDataType
    userData: UserDataType
    jwtToken: string
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
    },
    jwtToken: ''
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
        const res = await authApi.auth()
        return res.data
    } catch (e) {
        dispatch(setIsLoading(false))
    }
})
export const loginTC = createAsyncThunk('authMe', async (loginData: LoginDataType, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setIsLoading(true))
    // try {
    //     dispatch(setIsLoading(false))
    //     const res = await authApi.login(loginData)
    //     console.log(res)
    //     return res.data
    // } catch (e) {
    //     dispatch(setIsLoading(false))
    //     return  rejectWithValue(error)
    // }
    authApi.login(loginData)
        .then(res => {
            console.log(res)
            dispatch(setIsAuth(true))
        })
        .catch(_err => {
            const error = _err as AxiosError
            if(error.response?.status === 400){
                const err = {
                    data: null,
                    error: {
                        status: error.response?.status,
                        name: '',
                        message: 'Не верный логин или пароль',
                        details: {}
                    }
                }
                dispatch(setError(err))
            } else { dispatch(setError(error.response?.data))}


        })
        .finally(() => dispatch(setIsLoading(false)))
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        setRegistryDataLoginPassword: (state, action: PayloadAction<{ login: string, password: string }>) => {
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
        setJwtToken: (state, action) => {
            state.jwtToken = action.payload
        }
    },
    extraReducers(builder) {

        // builder.addCase(loginTC.fulfilled, (state, action) => {
        //     console.log(action)
        //     // state.isAuth = true
        // })
        builder.addMatcher(
            isAnyOf(getAllBooks.fulfilled, getAllCategories.fulfilled), (state) => {

                state.isAuth = true
            })
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

