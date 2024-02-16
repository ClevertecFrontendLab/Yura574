import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authApi} from '../../api.ts';

const registrationUser = createAsyncThunk(
    'auth/registration', async ({email, password}: {
        email: string,
        password: string
    }, thunkAPI) => {
        const response = await authApi.registrationUser(email, password)
        return response.data
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
        builder.addCase(registrationUser.fulfilled, (state, action) => {
            state.isAuth = true
        })
    }
})

export const authReducer = authSlice.reducer
