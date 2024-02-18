import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authApi} from '../../api/api.ts';
import {LoginType} from '../../api/apiTypes.ts';
import {setIsPending} from '@redux/reducers/common-reducer.ts';


export const singUp = createAsyncThunk(
    'auth/registration', async (data: LoginType, {rejectWithValue}) => {
        try {
            const response = await authApi.registrationUser(data)
            console.log(response)
            return response.data
        } catch (error: any) {
            console.log(error)
            return rejectWithValue(error.response.data);
        }
    }
)

export const singIn = createAsyncThunk(
    'auth/login', async (data: LoginType, {rejectWithValue}) => {

        try {
            const response = await authApi.loginUser(data)
            console.log(response.data)
        } catch (error: any) {
            console.log(error)
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
        builder.addCase(singUp.fulfilled, (state, action) => {
            state.isAuth = true
            action.payload.dispath(setIsPending(false))
        })
    }
})

export const authReducer = authSlice.reducer
